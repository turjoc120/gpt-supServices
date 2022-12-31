import { useMemo } from 'react'
import isEmpty from 'lodash/isEmpty'

function useAuthority(userAuthority = [], authority = [], emptyCheck = false) {

	const roleMatched = useMemo(() => {

		// console.log(authority.some(role => userAuthority.includes(role)));
		return authority.some(role => userAuthority.includes(role))

	}, [authority, userAuthority])

	if (isEmpty(authority) || isEmpty(userAuthority) || typeof authority === 'undefined') {
		return !emptyCheck
	}

	return roleMatched
}

export default useAuthority