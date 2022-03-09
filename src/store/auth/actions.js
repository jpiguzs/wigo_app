import { LocalStorage } from 'quasar'
export function login({ commit }, user) {
    return new Promise((resolve, reject) => {
        commit('auth_request')

        axios.post('auth/login', { email: user.email, password: user.password, token:user.token_firebase }).then(res => {
            const { token, user } = res.data

            localStorage.setItem('token', token)
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('auth_success', { token, user })
            resolve(res)

        }).catch(error => {
            commit('auth_error')
            localStorage.removeItem('token')

            reject(error.response.data.msg)

        })
    })
}
export function logout({ commit }, user) {
    return new Promise((resolve, reject) => {

        axios.post('auth/logout').then(res => {


            LocalStorage.clear();
            commit("log_out")
            resolve(res)

        }).catch(error => {


            LocalStorage.clear();
            reject(error)

        })
    })
}
export function register({ commit }, user) {
    return new Promise((resolve, reject) => {
        commit('auth_request')

        axios.post('auth/register', { email: user.email, password: user.password, name:user.name, tlf:user.tlf, carnet_id:user.carnet_id  }).then(res => {
            const { token, user } = res.data

            localStorage.setItem('token', token)
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('auth_success', { token, user })
            resolve(res)

        }).catch(error => {
            commit('auth_error')
            localStorage.removeItem('token')

            reject(error.response.data.msg)

        })
    })
}

