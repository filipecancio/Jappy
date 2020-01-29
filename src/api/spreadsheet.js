/**Objeto Planilha
* @param {String} id da planilha
**/
var Planilha = function (id) {
    this.planilha = (id == undefined)? SpreadsheetApp.getActive():SpreadsheetApp.openById(id);
    this.paginas = this.planilha.getSheets().map(function (sheet) {return [sheet.getName(),sheet]}).transpose().toObject();
};
/**Coleta a notação da página completa
* @param {String} nome da página
* @return {String} notação A1
**/
Planilha.prototype.paginaNotacao = function(name){
    var pagina = this.paginas[name];
    var notation = 'A1:'+getNotation(pagina.getLastRow(),pagina.getLastColumn());
    return notation;
};
/**Coleta o intervalo de uma página em matriz
* @param {String} nome da página
* @param {String} notação A1
* @return {Array} valores da planilha
* */
Planilha.prototype.getIntervalo = function (name,notation) {
    return this.paginas[name].getRange(notation).getDisplayValues();
}

/**Coleta o intervalo  completo de uma página em matriz
* @param {String} nome da página
* @param {String} notação A1
* @return {Array} valores da planilha
**/
Planilha.prototype.getPaginaIntervalo = function(name){
    var notation = this.paginaNotacao(name);
    return this.getIntervalo(name,notation);
};
/**Insere uma matriz em um intervalo de uma página
* @param {String} nome da página
* @param {Array|String} valores da planilha
* @param {Array|String} notação em string "A1" ou [row,col].
* @param {String} notação A1
* */
Planilha.prototype.setValor = function (name,value,notation) {
    value = value.toMatrix();
    notation = notation.a1notation();
    var anchor = value.matrixLength();
    anchor = [1,1,anchor[0],anchor[1]].a1notation();
    notation = notation.translar(anchor).a1notation();
    this.paginas[name].getRange(notation).setValues(value);
    return 'ok';
};
/**Instancia o objeto Planilha
* @param {String} id da planilha
* @return {Planilha} Objeto Planilha
* */
function planilha(id){
    return new Planilha(id);
};