<template>
  <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
    <div class="container d-flex justify-content-between align-items-center w-100">
      <nuxt-link class="navbar-brand" to="/">
        Главная
      </nuxt-link>
      <ul v-if="!$auth.loggedIn" class="navbar-nav">
        <li class="nav-item">
          <nuxt-link active-class="active" class="nav-link" to="/login">
            Авторизация
          </nuxt-link>
        </li>
      </ul>
      <ul v-else class="navbar-nav">
        <li class="nav-item">
          <nuxt-link
            exact
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

export default {
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}

</script>

<style lang="scss"></style>
