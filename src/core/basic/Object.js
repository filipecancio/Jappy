/**Retorna true se for objeto e false se não for
* @param {any} valor
* @return {boolean} resultado
**/
var isObject = function(obj) {return typeof obj ==='object'};
/**Retorna se o valor é nulo* @param {any} variavel a ser avaliada.
* @return {boolean} condição
**/
var isNull = function(i){
    return ((i == null || false || i == '') && i !== 0);
};
/**Retorna se o valor não é nulo
 * @param {any} variavel a ser avaliada.
 * @return {boolean} condição
**/
var isntNull = function(i){
    return (!((i == null || false || i == '') && i !== 0));
};