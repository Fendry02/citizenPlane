const conf = {};

conf.dbConf = {
    client: 'pg',
    version: '10.7',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'tionebbruy',
      database : 'citizenPlaneDb'
    }
};

conf.serverConf = {
  port: 3000,
  host: 'localhost'
};

module.exports = conf;