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
    |
    h3 test2
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
