export default function ({
  $axios
}) {
  $axios.interceptors.request.use((config) => {
    config.headers.Account = '8b59a775077536f3b73bb774655b94f6'
    return config
  })
}
