//This file holds any configuration variables we may need
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://bengorman:83mqwRMmmKDjrBU@ds147975.mlab.com:47975/cen3031',
  },
  port: (process.env.PORT == null || process.env.PORT == "") ? 8080 : process.env.port,
};
