<template>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">Previous</a>
    </li>
    <li v-for="page in pages" :key="page" class="page-item">
      <router-link :to="{ name: 'main-feed' }" class="page-link" href="#">
        {{
          page
        }}
      </router-link>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</template>
<script>
import { range } from '@/helpers/utils'

export default {
  props: {
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    pages () {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    }
  }
}
</script>

<style lang="scss"></style>
