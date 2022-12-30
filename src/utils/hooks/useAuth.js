import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from 'store/auth/userSlice'
import { apiSignIn, apiSignOut, apiSignUp } from 'services/AuthService'
import { onSignInSuccess, onSignOutSuccess } from 'store/auth/sessionSlice'
import appConfig from 'configs/app.config'
import { REDIRECT_URL_KEY } from 'constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail, getIdToken } from 'firebase/auth'
import { auth } from 'store/auth/firebase'
import { useEffect, useState } from 'react'
import { apiAddUser, apiGetPlans, apiGetUser } from 'services/PlansServies'


function useAuth() {
	const [authRes, setAuthRes] = useState({});
	const [isLoading, setLoading] = useState(true)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const query = useQuery()

	const { token, signedIn } = useSelector((state) => state.auth.session)

	const signIn = (values) => {

		setLoading(true)
		signInWithEmailAndPassword(auth, values.email, values.password)
			.then(async (userCredential) => {
				if (userCredential.user) {
					setAuthRes({
						status: 'success',
						message: ""
					})

					getIdToken(userCredential.user).then((token) => {
						dispatch(onSignInSuccess(token))
					})

					const userDe = await apiGetUser({ uid: userCredential.user.uid })
					if (userDe.data.authority.includes("premium", "basic")) {
						const redirectUrl = query.get(REDIRECT_URL_KEY)
						navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
					} else {
						navigate(appConfig.unsubEntryPath)
					}

				}

			})
			.catch((error) => {
				setAuthRes({
					status: 'failed',
					message: error?.message
				})
			}).finally(() => setLoading(false))
	}

	const signUp = (values) => {
		setLoading(true)
		createUserWithEmailAndPassword(auth, values.email, values.password)
			.then(async (userCredential) => {
				const userr = userCredential.user;
				await updateProfile(userr, {
					displayName: values.userName,
				});
				const fireToken = await getIdToken(userCredential.user)

				const addTodb = await apiAddUser(
					{
						uid: userCredential.user.uid,
						avatar: '',
						userName: values.userName,
						authority: ['user'],
						email: values.email
					}, { authorization: "Bearer " + fireToken })

				if (addTodb.data.status === "valid") {
					setAuthRes({
						status: 'success',
						message: ""
					})
					dispatch(onSignInSuccess(fireToken))
				}

				navigate(appConfig.unsubEntryPath)

			})
			.catch((errors) => {
				setAuthRes({
					status: 'failed',
					message: errors?.message
				})
			}).finally(() => setLoading(false));

	}



	useEffect(() => {
		setLoading(true)
		const unsubscribed = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const userDe = await apiGetUser({ uid: user.uid })
				dispatch(setUser(userDe.data))
			} else {

				dispatch(setUser({
					avatar: '',
					userName: '',
					authority: [],
					email: ''
				}))

			}
			setLoading(false)
		});
		return () => unsubscribed
	}, [])




	const handleSignOut = () => {
		dispatch(onSignOutSuccess())
		dispatch(setUser(initialState))
		navigate(appConfig.unAuthenticatedEntryPath)
	}

	const forgotPasswordHandler = async (values) => {
		if (values.email)
			setLoading(true)
		await sendPasswordResetEmail(auth, values.email).then(() => {
			setAuthRes({
				status: 'success',
				message: "an email has been sent!"
			})
			setLoading(false)
		}).catch((errors) => {
			setAuthRes({
				status: 'failed',
				message: errors?.message
			})
			setLoading(false)
		});
	};

	const logOut = () => {
		signOut(auth).then(() => {

		}).catch((error) => {
			console.log(error);
		});
		handleSignOut()
	}

	return {
		authenticated: token && signedIn,
		signIn,
		signUp,
		logOut,
		forgotPasswordHandler,
		authRes, isLoading,
		setAuthRes,

	}
}

export default useAuth