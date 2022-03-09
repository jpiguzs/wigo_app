import { LocalStorage } from 'quasar'
export default function () {
  return {
    isLoggedIn: LocalStorage.getItem('user') ? true : false,
    //isLoggedIn: true,
    token: localStorage.getItem('token') || '',
    loading: false,
    status: '',
    user: LocalStorage.getItem('user') || null,
    notifications: [],
    expire_token: false,


  }
}
