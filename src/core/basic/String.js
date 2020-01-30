/**Retorna true se for objeto e false se não for
* @param {any} valor
* @return {boolean} resultado
* */
var isString = function(value) {return typeof value ==='string'};
/**Converte string em matriz
* @return {Array} matriz
* */
String.prototype.toMatrix = function () {
    return [[this.concat()]];
};
/**Converte escala alfanumerica em number
* @return {number} valor de coluna
* */
String.prototype.parseCol = function(){
    return this.toUpperCase()
        .split('')
        .reverse()
        .map(function (a) {return parseInt(a.charCodeAt(0),10)-64;})
        .reduce(function (a,b,i) {return a+(b*i*26)});
};
/**Retorna valor em notação A1
 * @return {string} notação A1.
 **/
String.prototype.a1notation = function () {
    return this.concat();
};
/**Retorna valor em notação A1 no formato de array
 * @return {Array} notação A1.
 **/
String.prototype.a1notationToArray = function () {
    var response = this.split(':');
    response = response.map(function (r) {return r.separeLinCol();});
    return response[0].concat(response[1]);
};
/**Retorna valor em notação A1 em array [linha,coluna}]
 * @return {Array} array [linha,coluna}].
 **/
String.prototype.separeLinCol = function () {
    var response = this.split('');
    var numbers = response.filter(function (r) {return /[0-9]/.test(r)}).join('');
    var letters = response.filter(function (r) {return!(/[0-9]/.test(r))}).join('');
    return [parseInt(numbers,10),letters.parseCol()];
};
/**Realiza a translação de um intervalo
 * @return {Intervalo} Intervalo.
 **/
String.prototype.translar = function (inter) {
    var notacao = this.a1notationToArray();
    inter = inter.a1notationToArray();
    if (inter.length < 4) inter = [inter[0],inter[1],inter[0],inter[1]];
    inter = [notacao[0],notacao[1],Math.abs(inter[0]-inter[2])+notacao[0],Math.abs(inter[1]-inter[3])+notacao[1]];
    return intervalo(inter);
}