import { setItem } from '@/helpers/localStoarageHelper'

export const state = () => ({
  isLoading: false,
  error: null,
  Authorization: null
})
export const mutations = {
  loginStart (state) {
    state.isLoading = true
  },
  loginSuccess (state) {
    state.isLoading = false
  },
  loginFailure (state, error) {
    state.isLoading = false
    state.error = error
  },
  logout (state) {
    state.isLoading = false
    state.Authorization = ''
  },
  setAuthorization (state, payload) {
    state.Authorization = payload
  }

}
export const actions = {
  async login ({ commit }, credentials) {
    commit('loginStart')
    try {
      const { data } = await this.$axios.post('/auth/login', credentials)
      setItem('Authorization', data.data.Authorization)
      commit('loginSuccess')
    } catch (error) {
      commit('loginFailure', error)
    }
  },

  async logout ({ commit }) {
    return await new Promise((resolve) => {
      setItem('Authorization', '')
      commit('logout')
      resolve()
    })
  },

  async auth ({ commit }) {
    commit('loginStart')
    try {
      await this.$axios.post('/auth')
      commit('loginSuccess')
    } catch (error) {
      commit('loginFailure', error)
    }
  }
}

export const getters = {
  isLoggedIn (state) {
    return state.isLoggedIn
  },
  Authorization (state) {
    return state.Authorization
  }
}
