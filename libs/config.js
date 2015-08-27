module.exports = {
  app: {
    name: 'incoming',
    host: process.env.INCOMING_HOST || 'incoming.io',
    port: process.env.INCOMING_PORT || 3000
  },
  database: {
    name: process.env.INCOMING_DB_NAME || 'incoming',
    username: process.env.INCOMING_DB_USERNAME || 'incomingUser',
    password: process.env.INCOMING_DB_PASSWORD || 'incomingpass',
    dialect: {
      sequel: {
        name: 'mysql',
        host: 'localhost'
      },
      nosql: {
        name: 'mongodb',
        host: ['localhost']
      }
    }
  },
  sessions: {
    key: 'put yourself a fancy little key here'
  }
};