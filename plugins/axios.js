export default function ({
  $axios,
  store
}) {
  $axios.interceptors.request.use((config) => {
    config.headers.Account = '8b59a775077536f3b73bb774655b94f6'
    if (store.getters['login/Authorization']) {
      config.headers.Authorization = store.getters['login/Authorization']
    }
    return config
  })
}
