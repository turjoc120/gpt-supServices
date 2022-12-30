import { Spinner } from 'components/ui'
import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthContext from 'utils/hooks/useAuthContext'
import useAuthority from 'utils/hooks/useAuthority'

const AuthorityGuard = props => {

	const { userAuthority = [], authority = [], children } = props
	const { isLoading } = useAuthContext;
	const roleMatched = useAuthority(userAuthority, authority)

	return roleMatched ? children : isLoading ? <Spinner></Spinner> : <Navigate to="/access-denied" />
}

export default AuthorityGuard