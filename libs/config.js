module.exports = {
  app: {
    name: 'incoming',
    host: process.env.APP_HOST || 'incoming.io',
    post: process.env.APP_PORT || 13000
  },
  database: {
    name: process.env.APP_DB_NAME || 'incoming',
    hosts: ['localhost']
  },
  sessions: {
    key: 'put yourself a fancy little key here'
  }
}