import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import appConfig from 'configs/app.config'
import useAuth from 'utils/hooks/useAuth'
import useAuthContext from 'utils/hooks/useAuthContext'
import { Spinner } from 'components/ui'
import { useSelector } from 'react-redux'

const { authenticatedEntryPath, unsubEntryPath } = appConfig

const PublicRoute = () => {

    const { authenticated, isLoading } = useAuthContext()
    const userAuthority = useSelector((state) => state?.auth?.user?.authority)

    return authenticated ? isLoading ? <Spinner></Spinner> : <Navigate to={userAuthority?.includes("premium", "basic") ? authenticatedEntryPath : unsubEntryPath} /> : <Outlet />
}

export default PublicRoute