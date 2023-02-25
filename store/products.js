export const state = () => ({
  products: [],
  isLoading: false,
  error: null
})

export const mutations = {
  getProductsStart(ctx) {
    ctx.isLoading = true
  },
  getProductsSuccess(ctx, payload) {
    ctx.isLoading = false
    ctx.products = payload
  },
  getProductsFailure(ctx, error) {
    ctx.isLoading = false
    ctx.error = error
  },

  addToFavoriteStart(ctx) {
    ctx.isLoading = true
  },
  addToFavoriteSuccess(ctx, id) {
    ctx.isLoading = false
    ctx.products = ctx.products.map(el => {
      const item = el
      if (el.id === id) {
        item.isInFavourites = !el.isInFavourites
      }
      return item
    })
  },
  addToFavoriteFailure(ctx, error) {
    ctx.isLoading = false
    ctx.error = error
  },

  removeFromFavoriteStart(ctx) {
    ctx.isLoading = true
  },
  removeFromFavoriteSuccess(ctx, id) {
    ctx.isLoading = false
    ctx.products = ctx.products.map(el => {
      const item = el
      if (el.product.id === id) {
        item.product.isInFavourites = !el.product.isInFavourites
      }
      return item
    })
  },
  removeFromFavoriteFailure(ctx, error) {
    ctx.isLoading = false
    ctx.error = error
  }
}

export const actions = {
  async getProducts({commit}, {limit, offset}) {
    commit('getProductsStart')
    try {
      const {data} = await this.$axios.get(
        `/commerce/products?filters[limit]=${limit}&filters[offset]=${offset}`
      )
      commit('getProductsSuccess', data.data.products)
    } catch (error) {
      commit('getProductsFailure', error)
    }
  },
  async addToFavorite({commit}, id) {
    commit('addToFavoriteStart')
    try {
      await this.$axios.post('/commerce/products/favourites', {product: id})
      commit('addToFavoriteSuccess', id)
    } catch (error) {
      commit('addToFavoriteFailure', error)
    }
  },
  async removeFromFavorite({commit}, id) {
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
  products(ctx) {
    return ctx.products
  }
}
