const config = require('../utils/helperDB');
const oracledb = require('oracledb');
const Conexao = require('../utils/connectionOracle');


async function getPesorns() {

  let conn;

  try {
    conn = await oracledb.getConnection(config);
    const result = await conn.execute('select * from PESSOA');
    console.log(result);
    return result.rows;
  } catch (err) {
    console.error(err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}



module.exports = {
  getPesorns
}