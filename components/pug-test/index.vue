<template lang="pug">
  h1(
    data="2"
    data="2"
    data="2"
    data="2"
    data="2"
    data="232"
    data="2325"
    data="helloC"
    dataA="hello"
    value="2"
    :class="{ hello: true }"
    @click="hello") hello
    .test(
      value="2"
      data="2"
      data="2"
      data="2"
      data="helloC"
      dataA="hello"
      dataB="hello"
      value="2"
      :class="{ hello: true }")
      .test test
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
