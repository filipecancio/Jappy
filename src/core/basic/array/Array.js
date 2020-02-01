/**Retorna se o array é matriz ou não
* @return {boolean}
**/
Array.prototype.isMatrix = function(){
    return this.matrix = true;
};
/**Limpa valores nulos de matriz
* @return {Array} Array sem valores nulos
**/
Array.prototype.trim = function(){
    return this.filter(isntNull);
};
/**Executa somente se o array é matriz, do contrário, retorna -1
* @return {boolean}
**/
Array.prototype.matrixExecute = function(fn){
    var response = "It isn't a matrix!";
    if(this.isMatrix()){response = fn(this)}
    return response
};
/**Retorna um array com propriedades de ij de uma tabela
* @param {Array} tabela
* @return {Array} propriedades ij
**/
Array.prototype.matrixLength = function(){
    var response = [this.length,1];
    this.map(function (i) {
        if(i !== null) {
            if (isObject(i) && i.length > response[1]) response[1]= i.length;
        }});
    return response;
};
/**Formata o array em matriz
 * @return {Array} matriz
 */
Array.prototype.toMatrix = function () {
    var prop = this.matrixLength();
    return this.map(function(i){
        i = isObject(i) ? i : [i];
        while (i.length<prop[1]){i.push('')}
        return i;
    });
}
/**Retorna a matriz transposta
 * @return {Array} matriz transposta
 */
Array.prototype.transpose = function() {
    var temp = this.toMatrix();
    return temp[0].map(function(col,i) {
        return temp.map(function (row) {
            return row[i];
        });
    });
}
/**Realiza busca em matiz pelo titulo da conluna
 * @param {string} Nome da coluna.
 * @param {number} linha do valor
 * @param {number} linha do cabeçalho
 * @return {Array} valor desejado
 */
Array.prototype.busca = function(name,value,key){
    key = key == undefined?0:key;
    value = value == undefined?1:value;
    return this[value][this[key].indexOf(name)];
};
/**Converte array em objeto
 * @param obj para chamadas recursivas.
 * @return {Object} array de objetos
 */
Array.prototype.toObject = function (obj) {
    obj = arguments.length>0 ?object:{};
    var array = this.transpose();
    array.map(function(i){obj[i[0]]=i[1];});
    return obj;
};
/**Retorna valor em notação A1
 * @return {string} notação A1.
 **/
Array.prototype.a1notation = function () {
    var inicio = notacao(this[0],this[1]);
    var fim = this.length>2?notacao(this[2],this[3]):notacao(this[0],this[1]);
    return new Intervalo(inicio,fim).a1notation();
}
/**Retorna soma de matrizes
 * @return {Array} soma resultante
 **/
Array.prototype.sum = function(array){
    return this.map(function (a,i) {
        return a+array[i];
    });
};
/**Retorna valor em notação A1 no formato de array
 * @return {Array} notação A1.
 **/
Array.prototype.a1notationToArray = function () {
    return this;
};
/**Realiza a translação de um intervalo
 * @return {Intervalo} Intervalo.
 **/
Array.prototype.translar = function (inter) {
    var notacao = this.a1notationToArray();
    inter = inter.a1notationToArray();
    console.log(inter);
    Logger.log(inter);
    if (inter.length < 4) inter = [inter[0],inter[1],inter[0],inter[1]];
    inter = [notacao[0],notacao[1],Math.abs(inter[0]-inter[2])+notacao[0],Math.abs(inter[1]-inter[3])+notacao[1]];
    return intervalo(inter);
};
Array.prototype.parseFloat = function(){
    return this.map(function(i){
        var temp = parseFloat(i);
        return isNaN(temp) ? i : temp
    }).filter(isntNull);
}