<template>
  <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
    <div class="container d-flex justify-content-between align-items-center w-100">
      <nuxt-link class="navbar-brand" to="/">
        Главная
      </nuxt-link>
      <ul v-if="!Authorization" class="navbar-nav">
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/login">
            Авторизация
          </nuxt-link>
        </li>
      </ul>
      <ul v-if="Authorization" class="navbar-nav">
        <li class="nav-item">
          <nuxt-link
            exact
            no-prefetch
            active-class="active"
            class="nav-link "
            aria-current="page"
            to="/catalog"
          >
            Каталог
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/favourites">
            Избранное
          </nuxt-link>
        </li>
        <li class="nav-item">
          <a active-class="active" class="nav-link" :style="{cursor: 'pointer'}" @click="logout">
            Выйти
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { mapGetters } from 'vuex'
import { getItem } from '../helpers/localStoarageHelper'

export default {
  computed: {
    ...mapGetters('login', ['Authorization'])
  },
  mounted () {
    if (getItem('Authorization')) {
      this.$store.commit('login/setAuthorization', getItem('Authorization'))
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('login/logout')
      this.$router.push('/login')
    }
  }
}

</script>

<style lang="scss"></style>
