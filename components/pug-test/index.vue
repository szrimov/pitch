<template lang="pug">
h1(
  value='2',
  data='2',
  data='2',
  dataA='hello',
  dataB='hello',
  data='helloC',
  @click='hello'
) hello
  .test
    span test2
</template>

<script>
export default {
  name: 'pug-test-component',
  methods: {
    hello(df) {
      return 'hello'
    }
  }
}
</script>

<style></style>
