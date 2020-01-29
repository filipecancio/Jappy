/**Objeto Notacao
 * @param {Number|string} lin
 * @param {Number} col
 * */
var Notacao = function (lin,col) {
    if(arguments[1] == undefined){
        this.notacao = lin;
        lin = lin.a1notationToArray();
        this.lin = lin[0];
        this.col = lin[1];
    }else{
        this.lin = lin;
        this.col = col;
        this.notacao = col.a1notation()+lin;
    }
};
/**Retorna valor em notação A1
 * @return {string} notação A1.
 **/
Notacao.prototype.a1notation = function () {
    return this.notacao;
};
/**Retorna valor em notação A1 no formato de array
 * @return {Array} notação A1.
 **/
Notacao.prototype.a1notationToArray = function () {
    return this.notacao.a1notationToArray();
};
/**Realiza a translação de um intervalo
 * @return {Intervalo} Intervalo.
 **/
Notacao.prototype.translar = function (inter) {
    var notacao = this.a1notationToArray();
    inter = inter.a1notationToArray();
    console.log(inter);
    Logger.log(inter);
    if (inter.length < 4) inter = [inter[0],inter[1],inter[0],inter[1]];
    inter = [notacao[0],notacao[1],Math.abs(inter[0]-inter[2])+notacao[0],Math.abs(inter[1]-inter[3])+notacao[1]];
    return intervalo(inter);
};
/**Instancia um novo objeto intervalo
 * @return {notaco} notação.
 **/
var notacao = function(lin,col){ return new Notacao(lin,col);};

