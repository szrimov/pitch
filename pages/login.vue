<template>
  <div class="login">
    <div class="container">
      <div class="row mt-5 login-form">
        <div class="col-md-4 col-lg-4 col-4 mx-auto">
          <div class="text-center">
            <div v-if="$route.query.message" class="alert alert-danger">
              Нужно авторизоваться
            </div>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="mb-3 mt-3">
              <input
                id="email"
                v-model="username"
                placeholder="Почта"
                type="email"
                class="form-control"
              >
            </div>
            <div class="mb-3">
              <input
                id="password"
                v-model="password"
                placeholder="Пароль"
                type="password"
                class="form-control"
              >
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-primary" :disabled="false">
                Вход
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'test@test.ru',
      password: '1234'
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('login/login', { username: this.username, password: this.password })
        .then(() => {
          this.$router.push({ name: 'index' })
        })
    }
  }
}
</script>

<style lang="scss"></style>
