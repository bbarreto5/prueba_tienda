const { Pool, Client } = require('pg');
 
module.exports.client = new Client({
  user: 'postgres',
  host: '35.199.84.6',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

module.exports.getAllUser = async()=>{
    try {
      client.connect();
      let res = await client.query(`SELECT * FROM dev.users;`);
      return res.rows;
    } catch (error) {
        return error;
    }
}

module.exports.getUser = async(id)=>{
    let sqlCampos = `id, full_name, email, phone_number, address,`+ 
    `radius, categories, filters, id_rol, profile_picture,`+
    ` concat('{"latitude":',ST_X(dev.users.position),',`+
    `"longitude":',ST_Y(dev.users.position),'}')::json as position`;
    try {
      client.connect();
      let res = await client.query(`SELECT ${sqlCampos} FROM dev.users where id=${id};`);
      if(res.rows[0]){
        return res.rows[0]
      }
      return {msg:"no hay nada"};
    } catch (error) {
        return {error};
    }
}

module.exports.updateUser = async(id,body)=>{
    let sqlUpdate = "";
    sqlUpdate+= (body.profilePicture)?`profile_picture='${JSON.stringify(body.profilePicture)}',`:"";
    sqlUpdate+= (body.full_name)?`full_name='${body.full_name}',`:"";
    sqlUpdate+= (body.email)?`email='${body.email}',`:"";
    sqlUpdate+= (body.phone_number)?`phone_number='${body.phone_number}',`:"";
    sqlUpdate+= (body.address)?`address='${body.address}',`:"";
    sqlUpdate+= (body.radius)?`radius='${body.radius}',`:"";
    sqlUpdate+= (body.categories)?`categories='{${body.categories}}',`:"";
    sqlUpdate+= (body.filters)?`filters='{${body.filters}}',`:"";
    sqlUpdate+= (body.position)?`position=ST_GeomFromText('POINT(${body.position.longitude} ${body.position.latitude})', 4326),`:"";
    sqlUpdate = sqlUpdate.substring(0,sqlUpdate.length-1)+" ";
    let sql = `UPDATE dev.users SET ${sqlUpdate} WHERE id=${id} ;`;
    try {
      client.connect();
      let resultado = await client.query(sql);
      return{
        res:resultado.rows,
      }
    } catch (error) {
        return {
          error,
        };
    }
};
module.exports.test = async(id)=>{
    try {
      let sqlCampos = `id, full_name, email, phone_number, address,`+ 
      `radius, categories, filters, id_rol, profile_picture,`+
      ` concat('{"latitude":',ST_X(dev.users.position),',`+
      `"longitude":',ST_Y(dev.users.position),'}')::json as position`;
        client.connect()
        let resultado = await client.query(`SELECT ${sqlCampos} FROM dev.users where id=${id};`);
        return resultado.rows[0];
    } catch (error) {
        return null;
    }
}