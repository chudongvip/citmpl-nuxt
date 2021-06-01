export default ({ $axios }, inject) => {
  // Includes all api
  const api = {
    getUserInfo: async () => {
      return await $axios.$get('/favicon.ico')
    },
  }

  // Inject to context as $api
  inject('api', api)
}
