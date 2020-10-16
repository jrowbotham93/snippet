module.exports = {
  username: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.PGPORT,
  dialect: 'postgres',
};
