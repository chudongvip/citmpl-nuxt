<template>
  <div>
    <Logo />
  </div>
</template>

<script>
// eslint-disable-next-line no-console
export default {
  async asyncData({ $api }) {
    await $api.getUserInfo()
    // console.log(context.env.BASE_URL)
    return {}
  },
}
</script>

<style scoped></style>
