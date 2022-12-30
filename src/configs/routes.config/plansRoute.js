import { USER } from 'constants/roles.constant'
import React from 'react'

const plansRoute = [
    {
        key: 'getPlans',
        path: `/plans`,
        component: React.lazy(() => import('views/plans/Plans')),
        authority: [USER],
    },
    // {
    //     key: 'signUp',
    //     path: `/sign-up`,
    //     component: React.lazy(() => import('views/auth/SignUp')),
    //     authority: [],
    // },
    // {
    //     key: 'forgotPassword',
    //     path: `/forgot-password`,
    //     component: React.lazy(() => import('views/auth/ForgotPassword')),
    //     authority: [],
    // },
    // {
    //     key: 'resetPassword',
    //     path: `/reset-password`,
    //     component: React.lazy(() => import('views/auth/ResetPassword')),
    //     authority: [],
    // }
]

export default plansRoute