module.exports = {
  development: {
    username: 'techyecom',
    password: 'techy123#',
    database: 'techyecomm',
    host: 'database-1.c9kpucnskl1o.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
  },
  test: {
    username: 'techyecom',
    password: 'techy123#',
    database: 'techyecomm',
    host: 'database-1.c9kpucnskl1o.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    dialectModule: 'mysql2',
    logging: null
  },
  production: process.env.DATABASE_URL
};
