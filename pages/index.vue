<template>
  <div>
    <h2 class="text-center">
      Главная страница
    </h2>
  </div>
</template>

<script>
import { getItem } from '@/helpers/localStoarageHelper'
export default {
  name: 'IndexPage',
  mounted () {
    this.$store.commit('login/setAuthorization', getItem('Authorization'))
  }
}
</script>
