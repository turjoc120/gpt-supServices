import React, { useEffect, useState } from 'react'
import { Input, Button, FormItem, FormContainer, Alert } from 'components/ui'
import { ActionLink } from 'components/shared'
import { apiForgotPassword } from 'services/AuthService'
import useTimeOutMessage from 'utils/hooks/useTimeOutMessage'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import useAuthContext from 'utils/hooks/useAuthContext'

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Please enter your email'),
})

const ForgotPasswordForm = props => {

	const { disableSubmit = false, className, signInUrl = '/sign-in' } = props

	const [emailSent, setEmailSent] = useState(false)

	const [message, setMessage] = useTimeOutMessage()

	const { forgotPasswordHandler, setAuthRes, authRes, isLoading } = useAuthContext()


	useEffect(() => {
		setAuthRes({})
	}, [])

	const onSendMail = async (values, setSubmitting) => {
		setSubmitting(true)

		await forgotPasswordHandler(values)
		if (authRes.status === 'success') {
			setSubmitting(false)
			setEmailSent(true)
		}
		if (authRes.status === 'failed') {
			setMessage(authRes?.message)
			setSubmitting(false)
		}
		// } catch (errors) {
		// 	setMessage(errors?.response?.data?.message || errors.toString())
		// 	setSubmitting(false)
		// }
	}

	return (
		<div className={className}>
			<div className="mb-6">
				{
					emailSent ?
						<>
							<h3 className="mb-1">Check your email</h3>
							<p>We have sent a password recovery instruction to your email</p>
						</>
						:
						<>
							<h3 className="mb-1">Forgot Password</h3>
							<p>Please enter your email address to receive a verification code</p>
						</>
				}
			</div>
			{authRes.status === 'failed' && <Alert className="mb-4" type="danger" showIcon>{authRes?.message}</Alert>}
			{authRes.status === 'success' && <Alert className="mb-4" type="success" showIcon>{authRes?.message}</Alert>}
			<Formik
				initialValues={{
					email: 'admin@mail.com',
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (!disableSubmit) {
						onSendMail(values, setSubmitting)
					} else {
						setSubmitting(false)
					}
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						<FormContainer>
							<div className={emailSent ? 'hidden' : ''}>
								<FormItem
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
							</div>
							<Button block loading={isLoading} variant="solid" type="submit">
								{emailSent ? 'Resend Email' : 'Send Email'}
							</Button>
							<div className="mt-4 text-center">
								<span>Back to </span>
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

export default ForgotPasswordForm