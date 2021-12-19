module.exports = {
  production: {
    client: "pg",
    connection: {
      user: "uvfjvlxsebprxb",
      password: "40c4eb4f9f70673a9461a47a0c4c1c9e3f1eada0d09a558d8450b8a5e542f682",
      host: "ec2-34-242-89-204.eu-west-1.compute.amazonaws.com",
      port: 5432,
      database: "dbc6fqcv0t223t",
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: "knex_migrations",
      directory: "./migrations",
    },
  },
};
