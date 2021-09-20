export const state = () => ({
  token: '',
  authenticated: false
})
export const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  setAuthenticated (state, payload) {
    state.authenticated = payload
  }
}
export const getters = {
  getToken: state => state.token,
  getAuthenticated: state => state.authenticated
}
export const actions = {
  async login (ctx, { email, password }) {
    const response = await this.$axios.$post(`/auth/login?email=${email}&password=${password}`)
    ctx.commit('setToken', response.access_token)
    ctx.commit('setAuthenticated', true)
    this.$cookies.set('token', response.access_token)
    this.$cookies.set('token_time', Date.now())
  },
  async logout () {
    const token = 'Bearer ' + this.$cookies.get('token')
    const response = await this.$axios.$post('auth/logout', {}, {
      headers: {
        Authorization: token
      }
    })
    this.$cookies.remove('token')
    this.$cookies.remove('token_time')
    console.log(response)
  },
  async postRefreshToken (ctx, { token, tokenTime }) {
    const interval = Date.now() - tokenTime
    const currentMinute = Math.floor(interval / 60000)
    console.log(currentMinute)
    if (currentMinute > 25 && currentMinute < 30) {
      const response = await this.$axios.$post('/auth/refresh', {}, {
        headers: {
          Authorization: token
        }
      })
      console.log(response)
      this.$cookies.set('token', response.access_token)
      this.$cookies.set('token', new Date())
      localStorage.setItem('token_time', new Date().toString())
      localStorage.setItem('token', response.access_token)
      this.$notification.success({
        message: 'Сессия изменилась'
      })
    } else if (currentMinute > 30) {
      this.$cookies.remove('token')
      this.$cookies.remove('token_time')
    }
    console.log(currentMinute)
  }
}
