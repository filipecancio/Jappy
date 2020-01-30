var Mysqlcon = function(endereco,porta,banco,usuario,senha){
    this.endereco = endereco;
    this.porta = porta;
    this.banco = banco;
    this.usuario = usuario;
    this.senha = senha;
    this.url = 'jdbc:mysql://'+this.endereco+':'+this.porta+'/'+this.banco;
    this.connection = this.getConnection();
    this.metadata = '';
}
Mysqlcon.prototype.getConnection = function(){
    return Jdbc.getConnection(this.url,this.usuario,this.senha);
}
Mysqlcon.prototype.getMetadata = function(query){
    query = this.connection.createStatement().executeQuery(query);
    //return query.getMetaData();
    return query;
}
Mysqlcon.prototype.getTabela = function(query){
  var response = [];
    for(var i in result.getColumnCount()){
      var col = [];
      col.push(result.getColumnLabel(i));
      response.push(col);
    }
}
/*
function getTabela(conexao,query){
    var pesquisa = conexao.createStatement().executeQuery(query);
    var resultado = pesquisa.getMetaData();
    var tabela = [];
    
    for(var i=1; i<=resultado.getColumnCount(); i++){
      var temp = [];
      temp.push(resultado.getColumnLabel(i));
      tabela.push(temp);
    }
    while(pesquisa.next()){
      for(var i=1; i<=resultado.getColumnCount(); i++){
        tabela[i-1].push(pesquisa.getString(i));
      }
    }
    return tabela;
  }
*/