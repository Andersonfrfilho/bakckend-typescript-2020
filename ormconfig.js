module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  username: process.env.DB_USER || 'postgres',
  password:process.env.DB_PASSWORD || '102030',
  database: process.env.DB_NAME || 'application_db',
  migrations: [
    './src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};