import ApiService from './ApiService'



export async function apiGetPlans() {
    return ApiService.fetchData({
        url: `${process.env.REACT_APP_BASE_API_URL}/payment/get-plans`,
        method: 'get',
    })
}

export async function apiPlanSubscription(data, headers) {
    return ApiService.fetchData({
        url: `${process.env.REACT_APP_BASE_API_URL}/payment/subscription`,
        method: 'post',
        data,
        headers
    })
}

export async function apiAddUser(data, headers) {
    return ApiService.fetchData({
        url: `${process.env.REACT_APP_BASE_API_URL}/user/add-user`,
        method: 'post',
        data,
        headers
    })
}
export async function apiGetUser(headers) {
    return ApiService.fetchData({
        url: `${process.env.REACT_APP_BASE_API_URL}/user/get-user`,
        method: 'get',
        headers
    })
}


// export async function apiSignUp(data) {
//     return ApiService.fetchData({
//         url: '/sign-up',
//         method: 'post',
//         data
//     })
// }

// export async function apiSignOut(data) {
//     return ApiService.fetchData({
//         url: '/sign-out',
//         method: 'post',
//         data
//     })
// }

// export async function apiForgotPassword(data) {
//     return ApiService.fetchData({
//         url: '/forgot-password',
//         method: 'post',
//         data
//     })
// }

// export async function apiResetPassword(data) {
//     return ApiService.fetchData({
//         url: '/reset-password',
//         method: 'post',
//         data
//     })
// }
