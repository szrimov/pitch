export const state = () => ({
  favourites: [],
  isLoading: false,
  error: null
})

export const mutations = {
  getFavouritesStart (state) {
    state.isLoading = true
  },
  getFavouritesSuccess (state, payload) {
    state.isLoading = false
    state.favourites = payload
  },
  getFavouritesFailure (state, error) {
    state.isLoading = false
    state.error = error
  },

  addToFavoriteStart (state) {
    state.isLoading = true
  },
  addToFavoriteSuccess (state, id) {
    state.isLoading = false
    state.favourites = state.favourites.filter(el => el.product.id !== id)
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
    state.favourites = state.favourites.map((el) => {
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
  async getFavourites ({ commit }, { limit, offset }) {
    commit('getFavouritesStart')
    try {
      const { data } = await this.$axios.get(`/commerce/products/favourites?filters[limit]=${limit}&filters[offset]=${offset}`)
      commit('getFavouritesSuccess', data.data.productsFavourites)
    } catch (error) {
      commit('getFavouritesFailure', error)
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
  favourites (state) {
    return state.favourites
  }
}
