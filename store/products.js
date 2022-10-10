export const state = () => ({
  products: [],
  isLoading: false,
  error: null
})

export const mutations = {
  getProductsStart (state) {
    state.isLoading = true
  },
  getProductsSuccess (state, payload) {
    state.isLoading = false
    state.products = payload
  },
  getProductsFailure (state, error) {
    state.isLoading = false
    state.error = error
  },

  addToFavoriteStart (state) {
    state.isLoading = true
  },
  addToFavoriteSuccess (state, id) {
    state.isLoading = false
    state.products = state.products.map((el) => {
      if (el.id === id) {
        el.isInFavourites = !el.isInFavourites
      }
      return el
    })
  },
  addToFavoriteFailure (state, error) {
    state.isLoading = false
    state.error = error
  },

  removeFromFavoriteStart (state) {
    state.isLoading = true
  },
  removeFromFavoriteSuccess (state, id) {
    state.isLoading = false
    state.products = state.products.map((el) => {
      if (el.product.id === id) {
        el.product.isInFavourites = !el.product.isInFavourites
      }
      return el
    })
  },
  removeFromFavoriteFailure (state, error) {
    state.isLoading = false
    state.error = error
  }
}

export const actions = {
  async getProducts ({ commit }, { limit, offset }) {
    commit('getProductsStart')
    try {
      const { data } = await this.$axios.get(`/commerce/products?filters[limit]=${limit}&filters[offset]=${offset}`)
      commit('getProductsSuccess', data.data.products)
    } catch (error) {
      commit('getProductsFailure', error)
    }
  },

  async addToFavorite ({ commit }, id) {
    commit('addToFavoriteStart')
    try {
      await this.$axios.post('/commerce/products/favourites', { product: id })
      commit('addToFavoriteSuccess', id)
    } catch (error) {
      commit('addToFavoriteFailure', error)
    }
  },

  async removeFromFavorite ({ commit }, id) {
    commit('addToFavoriteStart')
    try {
      await this.$axios.delete(`/commerce/products/${id}/favourites`)
      commit('addToFavoriteSuccess', id)
    } catch (error) {
      commit('addToFavoriteFailure', error)
    }
  }
}

export const getters = {
  products (state) {
    return state.products
  }
}
