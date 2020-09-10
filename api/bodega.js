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


module.exports.pedidos = async(idCliente)=>{
  try {
    client.connect();
    let sql = `select * from pedidos where id_usuario = ${idCliente};`
    console.log(sql)
    let res = await client.query(sql);
    let aux = []
    let total;
    res.rows.forEach(e => {
      total = 0;
      JSON.parse(e.pedido).forEach( a => {
        total += a.precio * a.cantidad 
      })
      aux.push({
        id: e.id,
        total,
        fecha: e.fecha,
        estado: e.estado
      })
    });
    return aux;
  } catch (error) {
    return [];
  }
}




module.exports.crearPedido = async(idCliente,lista)=>{
  try {
    client.connect();
    let sql = `INSERT INTO public.pedidos(
      id_usuario, pedido, fecha, estado)
      VALUES (${idCliente}, '${JSON.stringify(lista)}', now(), false) returning id;`
    console.log(sql)
    let res = await client.query(sql);
    console.log(res.rows)
    let idPedido = res.rows[0].id;
    lista.forEach(e => {
      sql = `INSERT INTO public.pedidos_productos(
        id_pedido, id_producto, fecha, stado, precio)
        VALUES (${idPedido}, ${e.id}, now(), true, ${e.precio});`;
      client.query(sql)
    });
    return true;
  } catch (error) {
    return false;
  }
}