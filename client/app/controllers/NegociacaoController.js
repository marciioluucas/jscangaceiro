class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoes = new Negociacoes();
    this._negociacoesView = new NegociacoesView('#negociacoes');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(ev) {
    ev.preventDefault();
    this._negociacoes.adiciona(this._addNegotiation());
    this._negociacoesView.update(this._negociacoes);
    this._clearForm();
  }

  _clearForm() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  _addNegotiation() {
    let converter = DateConverter;
    let data = converter.toDate(this._inputData.value);
    return new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }
}