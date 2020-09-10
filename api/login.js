const { client } = require('./pg.js');

module.exports.login = async(email,pass)=>{
    try {
      client.connect();
      let sql = `SELECT nombre, apellido, id FROM public.usuarios where correo = '${email}' and "n_Identidad" = ${pass};`
      console.log(sql)
      let res = await client.query(sql);
      return res.rows;
    } catch (error) {
      return null;
    }
}