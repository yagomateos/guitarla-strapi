module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf02fqirrk0eqcp770bg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_lv67'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'UGXNRaD66IXMUYqoaugsssze3iuzsFdm'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
