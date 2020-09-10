const { client } = require('./pg.js');

module.exports.productos = async()=>{
    try {
      client.connect();
      let sql = `select * from productos;`
      console.log(sql)
      let res = await client.query(sql);
      return res.rows;
    } catch (error) {
      return null;
    }
}