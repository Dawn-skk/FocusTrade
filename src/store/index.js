import {createStore} from 'vuex'

export default createStore({
    state: {
        creator:{address: '' ||sessionStorage.getItem('creator')},
        token:localStorage.getItem('token') || '',
        tokenExpiration: localStorage.getItem('tokenExpiration') || 0,
        apikey:localStorage.getItem('apikey') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3MzcyNjA5ODM0MzMsImVtYWlsIjoid3BtNjk1QG91dGxvb2suY29tIiwiYWN0aW9uIjoidG9rZW4tYXBpIiwiYXBpVmVyc2lvbiI6InYyIiwiaWF0IjoxNzM3MjYwOTgzfQ.BfprAjaHC0vYZoU4j0Lcv5hBM0VjDkW6uN71yUNYCeY'
    },
    mutations: {
        setToken(state, token) {
            const expirationTime = Date.now() + 60 * 60 * 1000;  // 假设 token 过期时间为 1 小时
            state.token = token;
            state.tokenExpiration = expirationTime;
            
            localStorage.setItem('token', token);
            localStorage.setItem('tokenExpiration', expirationTime);
          },
          removeToken(state) {
            state.token = '';
            state.tokenExpiration = 0;
            
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiration');
          },
          setApikey(state,apikey){
            state.apikey = apikey
            localStorage.setItem('apikey',apikey)
          },
          removeApikey(state){
            state.apikey = ''
            localStorage.removeItem('apikey')
          },
    },
    actions: {
        logout({ commit }) {
            commit('removeToken');
          },
    },
    getters: {
        isTokenExpired(state) {
          return Date.now() > state.tokenExpiration;
        },
        getToken(state) {
          return state.token;
        },
        getApikey(state){
          return state.apikey
        }
      },
})
