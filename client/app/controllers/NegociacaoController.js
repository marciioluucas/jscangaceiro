class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(ev) {
    ev.preventDefault();
    let converter = DateConverter;
    let data = converter.toDate(this._inputData.value);
    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    let diaMesAno = converter.toText(negociacao.data);
    console.log(negociacao);
    console.log(diaMesAno);
  }
}