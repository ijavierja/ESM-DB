// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: 'localhost',
      port: '5432',
      database: 'esm-db',
      user: 'postgres',
      password: 'P@ssw0rd123!'
    },
    pool: {
      min: 2,
      max: 10
    },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  }

};
