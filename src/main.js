function main() {
  var conn = new  Mysqlcon('45.225.15.203','11306','mkradius','qti.gscripts','axevonay8032$');
  conn = conn.getMetadata('select * from sis_notas;');
  console.log(conn);
  return conn.metadata;
}
