<template lang="pug">
h1(value='2', data='2', data='2', @click='hello') hello
</template>

<script>
export default {
  name: 'pug-test-component',
  methods: {
    hello() {
      return 'hello'
    }
  }
}
</script>

<style></style>
