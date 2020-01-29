/**Retorna true se for numero e false se não for
 * @param {any} valor
 * @return {boolean} resultado
 * */
var isNumber = function(value) {return typeof parseInt(value) !=='NAN'};
/** Converte numero em escala Alfanumerica
 * @return {string}
 */
Number.prototype.parseCol = function (){
    return this.valueOf()==0?'':String.fromCharCode(this.valueOf()+64);
};

/** Converte numero em notacao 1A
 * @return {string}
 */
Number.prototype.a1notation = function(){
    var unidade = this.valueOf();
    var dezena = parseInt(unidade/26,10);
    unidade = unidade>(dezena*26) ? unidade-(dezena*26):(dezena*26)-unidade;
    dezena = dezena.parseCol();
    unidade = unidade.parseCol();
    return dezena+unidade;
}