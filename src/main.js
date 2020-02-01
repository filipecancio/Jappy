function main() {
  var plan = planilha('1AMwWCGbRUGUFCo73lGp-FgyyjIq7Wyljvyjjd0jLw0w');
  var intervalo = plan.getIntervalo('pagina02','A:D');
  var lin = intervalo.getIndexColuna('Profissão');
  return intervalo.getIndexLinha('Professora',lin);
}
