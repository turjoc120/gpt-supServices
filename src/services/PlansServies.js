import ApiService from './ApiService'

const BASE_URL_MY = "http://localhost:5000/api"

export async function apiGetPlans() {
    return ApiService.fetchData({
        url: `${BASE_URL_MY}/payment/get-plans`,
        method: 'get',
    })
}

export async function apiPlanSubscription(headers) {
    return ApiService.fetchData({
        url: `${BASE_URL_MY}/payment/subscription`,
        method: 'post',

        headers
    })
}

export async function apiAddUser(data, headers) {
    return ApiService.fetchData({
        url: `${BASE_URL_MY}/user/add-user`,
        method: 'post',
        data,
        headers
    })
}
export async function apiGetUser(headers) {
    return ApiService.fetchData({
        url: `${BASE_URL_MY}/user/get-user`,
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
