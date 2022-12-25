import React, { useEffect } from 'react'
import { Input, Button, FormItem, FormContainer, Alert } from 'components/ui'
import { PasswordInput, ActionLink } from 'components/shared'
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuth from 'utils/hooks/useAuth'
import useAuthContext from 'utils/hooks/useAuthContext'

const validationSchema = Yup.object().shape({
	userName: Yup.string().required('Please enter your user name'),
	email: Yup.string().email('Invalid email').required('Please enter your email'),
	password: Yup.string().required('Please enter your password'),
	confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords do not match')
})

const SignUpForm = props => {

	const { disableSubmit = false, className, signInUrl = '/sign-in' } = props

	const { signUp, authRes, isLoading, setAuthRes } = useAuthContext()

	const [message, setMessage] = useTimeOutMessage()

	useEffect(() => {
		setAuthRes({})
	}, [])

	const onSignUp = (values, setSubmitting) => {
		const { email, password, userName } = values
		setSubmitting(true)
		signUp({ userName, password, email })
		console.log(authRes);
		if (authRes.status === 'failed') {
			setMessage(authRes.message)
		}

		setSubmitting(false)
	}

	return (
		<div className={className}>
			{authRes.status === 'failed' && <Alert className="mb-4" type="danger" showIcon>{authRes.message}</Alert>}
			<Formik
				initialValues={{
					userName: 'Mujtaba',
					password: 'gpt321',
					confirmPassword: 'gpt321',
					email: 'user1@xxx.com'
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (!disableSubmit) {
						onSignUp(values, setSubmitting)
					} else {
						setSubmitting(false)
					}
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						<FormContainer>
							<FormItem
								label="Full Name"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field
									type="text"
									autoComplete="off"
									name="userName"
									placeholder="Full Name"
									component={Input}
								/>
							</FormItem>
							<FormItem
								label="Email"
								invalid={errors.email && touched.email}
								errorMessage={errors.email}
							>
								<Field
									type="email"
									autoComplete="off"
									name="email"
									placeholder="Email"
									component={Input}
								/>
							</FormItem>
							<FormItem
								label="Password"
								invalid={errors.password && touched.password}
								errorMessage={errors.password}
							>
								<Field
									autoComplete="off"
									name="password"
									placeholder="Password"
									component={PasswordInput}
								/>
							</FormItem>
							<FormItem
								label="Confirm Password"
								invalid={errors.confirmPassword && touched.confirmPassword}
								errorMessage={errors.confirmPassword}
							>
								<Field
									autoComplete="off"
									name="confirmPassword"
									placeholder="Confirm Password"
									component={PasswordInput}
								/>
							</FormItem>
							<Button
								block
								loading={isLoading}
								variant="solid"
								type="submit"
							>
								{isLoading ? 'Creating Account...' : 'Sign Up'}
							</Button>
							<div className="mt-4 text-center">
								<span>Already have an account? </span>
								<ActionLink to={signInUrl}>
									Sign in
								</ActionLink>
							</div>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default SignUpForm