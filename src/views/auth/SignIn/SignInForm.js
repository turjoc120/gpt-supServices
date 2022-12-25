import React from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Alert } from 'components/ui'
import { PasswordInput, ActionLink } from 'components/shared'
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuthContext from 'utils/hooks/useAuthContext'

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Please enter your email'),
	password: Yup.string().required('Please enter your password'),
	rememberMe: Yup.bool()
})

const SignInForm = props => {

	const {
		disableSubmit = false,
		className,
		forgotPasswordUrl = '/forgot-password',
		signUpUrl = '/sign-up'
	} = props

	const [message, setMessage] = useTimeOutMessage()

	const { signIn, authRes, isLoading } = useAuthContext()

	const onSignIn = (values, setSubmitting) => {
		const { email, password } = values
		setSubmitting(true)

		signIn({ email, password })

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
					email: 'user1@xxx.com',
					password: 'gpt321',
					rememberMe: true
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (!disableSubmit) {
						onSignIn(values, setSubmitting)
					} else {
						setSubmitting(false)
					}
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						<FormContainer>
							<FormItem
								label="Email"
								invalid={errors.email && touched.email}
								errorMessage={errors.email}
							>
								<Field
									type="text"
									autoComplete="off"
									name="email"
									placeholder="Full Name"
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
							<div className="flex justify-between mb-6">
								<Field className="mb-0" name="rememberMe" component={Checkbox} children="Remember Me" />
								<ActionLink to={forgotPasswordUrl}>
									Forgot Password?
								</ActionLink>
							</div>
							<Button block loading={isLoading} variant="solid" type="submit">
								{isLoading ? 'Signing in...' : 'Sign In'}
							</Button>
							<div className="mt-4 text-center">
								<span>Don't have an account yet? </span>
								<ActionLink to={signUpUrl}>
									Sign up
								</ActionLink>
							</div>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default SignInForm