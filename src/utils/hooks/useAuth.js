import { useSelector, useDispatch } from 'react-redux'
import { setUser, initialState } from 'store/auth/userSlice'
import { apiSignIn, apiSignOut, apiSignUp } from 'services/AuthService'
import { onSignInSuccess, onSignOutSuccess } from 'store/auth/sessionSlice'
import appConfig from 'configs/app.config'
import { REDIRECT_URL_KEY } from 'constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from 'store/auth/firebase'
import { useEffect, useState } from 'react'


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
			.then((userCredential) => {
				if (userCredential.user) {
					setAuthRes({
						status: 'success',
						message: ""
					})

					dispatch(onSignInSuccess(userCredential?.user?.uid))
					// dispatch(setUser({
					// 	avatar: '',
					// 	userName: values.userName,
					// 	authority: ['admin', 'user'],
					// 	email: values.email
					// }))

					const redirectUrl = query.get(REDIRECT_URL_KEY)
					navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)
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
				if (userCredential.user) {
					setAuthRes({
						status: 'success',
						message: ""
					})

					dispatch(onSignInSuccess(userCredential?.user?.uid))
					// dispatch(setUser({
					// 	avatar: '',
					// 	userName: values.userName,
					// 	authority: ['admin', 'user'],
					// 	email: values.email
					// }))


					///check for sub or not 
					const redirectUrl = query.get(REDIRECT_URL_KEY)
					navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath)

				}
			})
			.catch((errors) => {
				setAuthRes({
					status: 'failed',
					message: errors?.message
				})
			}).finally(() => setLoading(false));

	}


	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {

				dispatch(setUser({
					avatar: '',
					userName: user.displayName,
					authority: ['admin', 'user'],
					email: user.email
				}))
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