module.exports =
{
  "development": {
    "username": "postgres",
    "password": null,
    "database": "hacktiv8",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "hacktiv8",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.RDS_USERNAME || '',
    "password": process.env.RDS_PASSWORD || '',
    "database": process.env.RDS_DB_NAME || "startup_quotes",
    "host": process.env.RDS_HOSTNAME || '',
    "port": process.env.RDS_PORT || '5432',
    "dialect": "postgres"
  }
}
