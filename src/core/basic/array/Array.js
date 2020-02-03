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
    if (inter.length < 4) inter = [inter[0],inter[1],inter[0],inter[1]];
    inter = [notacao[0],notacao[1],Math.abs(inter[0]-inter[2])+notacao[0],Math.abs(inter[1]-inter[3])+notacao[1]];
    return intervalo(inter);
};
/**Converte os elementos de um array, se possível
 * @return {Array}
 */
Array.prototype.parseFloat = function(){
    return this.map(function(i){
        var temp = parseFloat(i);
        return isNaN(temp) ? i : temp
    }).filter(isntNull);
};
/**Coleta indice de coluna
 * @param {string|number} Nome da coluna.
 * @param {number} Linha onde o nome da coluna se encontra (padrão = 0).
 * @returns Coluna correspondente.
*/
Array.prototype.getIndexColuna = function(nome,lin){
    lin = lin == undefined ? 0 : lin;
    return this[lin].indexOf(nome);
}
/**Coleta valores de coluna
 * @param {string|number} Nome ou index da coluna.
 * @param {number} Linha onde o nome da coluna se encontra (padrão = 0).
 * @returns Coluna correspondente.
*/
Array.prototype.getColuna = function(nome,lin){
    lin = lin == undefined ? 0 : lin;
    var col = typeof nome == 'number' ? nome : this[lin].indexOf(nome);
    if(col <0) throw new Error("Coluna '"+nome+"' não encontrada.");
    return this.map(function(element){return element[col]});
}
/**Coleta os indices de linha
 * @param {String} Nome da linha.
 * @param {number} Coluna onde o nome da linha se encontra (padrão = 0).
 * @returns Linha ou conjunto de linhas correspondentes.
*/
Array.prototype.getIndexLinha = function(nome,col){
    col = col == undefined ? 0 : col;
    var lin = this.map(function(element,index){
        if(element[col].indexOf(nome) > -1) return index;
    }).filter(isntNull);
    if(lin.length > 1) return lin;
    if(lin.length == 1) return lin[0];
    throw new Error("Linha '"+nome+"' não encontrada.");
}
/**Coleta valores de linha
 * @param {String} Nome da linha.
 * @param {number} Coluna onde o nome da linha se encontra (padrão = 0).
 * @returns Linha ou conjunto de linhas correspondentes.
*/
Array.prototype.getLinha = function(nome,col,lin){
    var array = this;
    var lin = this.getIndexLinha(nome,col,lin);
    if(typeof lin == 'number') return array[lin];
    return lin.map(function(lin){return array[lin];});
}
/**Remove do array a coluna correspondente
 * @param {string|number} Nome ou index da coluna.
 * @param {number} Linha onde o nome da coluna se encontra (padrão = 0).
 * @returns Array com a coluna removida.
*/
Array.prototype.excluirColuna = function(nome,lin){
    nome = typeof nome == 'string' ? this.getIndexColuna(nome,lin):nome;
    this.map(function(element){element.splice(nome,1)});
}