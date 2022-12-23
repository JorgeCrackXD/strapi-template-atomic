const path = require('path');

module.exports = ({ env }) => ({
  // This connection is to use a MySql Database
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL'),
    },
  },
  
});
