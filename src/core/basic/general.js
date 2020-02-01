/**
 * Envia a mensagem necessária por todos os logs
 * @param {any} dado 
 */
var depurar = function(dado){
    Logger.log(dado);
    console.log(dado);
    return(dado);
}