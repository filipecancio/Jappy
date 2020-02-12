const main = ()=>{
    let id = '1P_32uymyfiMlTIg2EIJMYoMid2sraLq2x1DBOmdA4KU';
    var form = formulario(id);
    return form.aaa;
}

//1P_32uymyfiMlTIg2EIJMYoMid2sraLq2x1DBOmdA4KU
function aaa() {
  var plan = planilha('1AMwWCGbRUGUFCo73lGp-FgyyjIq7Wyljvyjjd0jLw0w');
  var intervalo1 = plan.getIntervalo('pagina02','A:D');
  var intervalo2 = plan.getIntervalo('pagina03','A2:D4');
  //var lin = intervalo1.getColuna('Código').join(intervalo2.getColuna('Código'));
  //plan.insertValor('pagina02',intervalo2,'A11');
  intervalo1.excluirColuna('Nome');
  return intervalo1;
}
