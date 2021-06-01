// https://axios.nuxtjs.org/helpers
export default function ({ $axios, redirect, error: nuxtError }, inject) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
    // return Promise.resolve(true)
  })

  $axios.onResponse((response) => {
    console.log('get an response ', response)
    return Promise.resolve(response)
  })

  // $axios.onError((error) => {
  //   // const code = parseInt(error.response && error.response.status)
  //   // if (code === 400) {
  //   //   redirect('/400')
  //   // } else if (code === 500) {
  //   //   redirect('/sorry')
  //   // }
  //   nuxtError({
  //     statusCode: error.response.status,
  //     message: error.message,
  //   })
  //   return Promise.resolve(false)
  // })

  // onRequestError(err)
  // onResponseError(err)
}
