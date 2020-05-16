const config = require('../utils/helperDB');
const oracledb = require('oracledb');


module.exports = class Connection {

  obterconexao() {
    let conn;
    conn =
       oracledb.getConnection(config);
    return conn;
  }

}

