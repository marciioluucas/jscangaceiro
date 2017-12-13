class DateConverter {

  constructor() {
    throw new Error('Esta classe não pode ser instanciada, use a sintaxe estática.')
  }

  static toText(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  static toDate(texto) {
    if(!new RegExp('^\d{4}-\d{2}-\d{2}$/').test(texto))
      throw new Error('O parâmetro deve estar no formato aaaa-mm-dd');

    return new Date(...texto.split(',')
      .map((item, index) => index === 1 ? item - 1 : item));
  }
}