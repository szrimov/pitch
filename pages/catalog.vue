<template>
  <div>
    <h2 class="text-center">
      Каталог товаров
    </h2>
    <div class="mt-3">
      <ul>
        <li v-for="product in products" :key="product.id" class="d-flex justify-content-between">
          <p>{{ product.title }}</p>
          <button
            class="btn bg-transparent p-0 m-0"
            @click="favoriteHandler(product.id, product.isInFavourites)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              :fill="product.isInFavourites ? 'red': 'grey'"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </button>
        </li>
      </ul>
      <VPaginate
        :page-count="50"
        :click-handler="getProducts"
        :prev-text="'&laquo;'"
        :next-text="'&raquo;'"
        :container-class="'pagination justify-content-center mt-5'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-class="'page-item'"
        :next-class="'page-item'"
        :prev-link-class="'page-link'"
        :next-link-class="'page-link'"
      >
        >
      </VPaginate>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch ({ store }) {
    await store.dispatch('products/getProducts', {
      limit: 50,
      offset: 1
    })
  },
  computed: {
    ...mapGetters('products', ['products'])
  },
  methods: {
    getProducts (offset) {
      this.$store.dispatch('products/getProducts', {
        limit: 50,
        offset: 1 + 50 * (offset - 1)
      })
    },
    favoriteHandler (id, isInFavourites) {
      isInFavourites
        ? this.$store.dispatch('products/removeFromFavorite', id)
        : this.$store.dispatch('products/addToFavorite', id)
    }
  }
}
</script>

<style lang="scss"></style>
