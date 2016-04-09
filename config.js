exports.isProd = process.env.NODE_ENV === 'production'
exports.host = process.env.HOST || (exports.isProd && '23.239.22.146')
exports.ports = {
  http: process.env.PORT || (exports.isProd ? 80 : 9100),
  https: process.env.PORT_HTTPS || (exports.isProd ? 443 : 9101)
}
