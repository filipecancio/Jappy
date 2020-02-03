/**Objeto Intervalo
* @param {string} id da planilha
**/
var Intervalo = function (ini,fim) {
    this.inicio = ini;
    this.fim = fim == undefined?ini:fim;
    this.notacao = this.setNotacao()
};

/**Insere a notação no objeto intervalo.
* @return {string} notação.
**/
Intervalo.prototype.setNotacao= function(){
    return this.inicio.a1notation() == this.fim.a1notation()? this.inicio.a1notation(): this.inicio.a1notation()+':'+this.fim.a1notation();
};
/**Retorna valor em notação A1
 * @return {string} notação A1.
 **/
Intervalo.prototype.a1notation = function () {
    return this.notacao;
};
/**Retorna valor em notação A1 no formato de array
 * @return {Array} notação A1.
 **/
Intervalo.prototype.a1notationToArray = function () {
    return this.notacao.a1notationToArray();
};
/**Realiza a translação de um intervalo
 * @return {Intervalo} Intervalo.
 **/
Intervalo.prototype.translar = function (inter) {
    var notacao = this.a1notationToArray();
    inter = inter.a1notationToArray();
    if (inter.length < 4) inter = [inter[0],inter[1],inter[0],inter[1]];
    inter = [notacao[0],notacao[1],Math.abs(inter[0]-inter[2])+notacao[0],Math.abs(inter[1]-inter[3])+notacao[1]];
    return intervalo(inter);
};
/**Instancia um novo objeto intervalo
 * @return {Intervalo} notação.
 **/
function intervalo() {
    var value = (arguments.length ==1 && typeof arguments[0] == 'object')?arguments[0]:arguments;
    switch (value.length) {
        case 1:
            var notacao = value[0].split(':');
            if(notacao.length == 1){
                notacao = new Notacao(value[0]);
                return new Intervalo(notacao,notacao);
            }else{
                var inicio = new Notacao(notacao[0]);
                var fim = new Notacao(notacao[1]);
                return new Intervalo(inicio,fim);
            }
            break;
        case 2:
            if (isString(value[0])){
                var inicio = new Notacao(value[0]);
                var fim = new Notacao(value[1]);
                return new Intervalo(inicio,fim);
            }else {
                var notacao = new Notacao(value[0],value[1]);
                return new Intervalo(notacao,notacao);
            }
            break;
        case 3:
            if (isString(value[0])){
                var inicio = new Notacao(value[0]);
                var fim = new Notacao(value[1],value[2]);
                return new Intervalo(inicio,fim);
            }else {
                var inicio = new Notacao(value[0],value[1]);
                var fim = new Notacao(value[2]);
                return new Intervalo(inicio,fim);
            }
            break;
        case 4:
            var inicio = new Notacao(value[0],value[1]);
            var fim = new Notacao(value[2],value[3]);
            return new Intervalo(inicio,fim);
            break;
    }
}
