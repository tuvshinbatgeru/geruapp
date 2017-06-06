module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
  	laravelLocal: true,
  	laravelRemote: false,
  },
  
  LARAVEL: {
    local: {
      URL: 'http://192.168.0.123/',
      DEBUG: true,
    },
    remote: {
      URL: 'https://geru.mn/',
      DEBUG: false,
    }
  },
}