/**Objeto Formulario
* @param {String} id da formulario
**/
function Formulario(id) {
    //this.valor = (id == undefined)? FormApp.getActiveForm():FormApp.openById(id);
    this.form = FormApp.openById(id);
    this.esquema = this.form.getItems().map((e)=>{
        return {
            "nome": e.getTitle()
        }
    });
};

/**
   * Retorna um array de dados das perguntas.
   *
   * @param {Form} formulario.
   * @return Array de perguntas.
   * @customfunction
   
  Formulario.prototype.getPerguntas = ()=>{
      return this.valor.getItems()
                        .map((e)=>{
                            return item.getTitle();
                        });
  }*/

/**Instancia o objeto Formulario
* @param {String} id da formulario
* @return {Planilha} Objeto formulario
* */
const formulario = (id) => {return new Formulario(id)};

/**
 * function getPerguntas(formulario){
    
    var itens = formulario.getItems();
    var secao_id = '';
    var secao_nome = '';
    var values = itens.map(function(item){
      if(item.getType() == 'PAGE_BREAK'){
        secao_id = item.getId();
        secao_nome = item.getTitle();
      }else{
        return[item.getId(),item.getTitle(),item.getType(),item,secao_id,secao_nome];
      }
    });
    return values.filter(function(e){return !((e == null)||(e == undefined))});
  }
 */