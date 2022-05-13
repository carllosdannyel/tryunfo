import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input data-testid="name-input" type="text" id="nome" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input data-testid="description-input" type="textarea" id="descricao" />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input data-testid="attr1-input" type="number" id="attr1-input" />
        </label>
        <label htmlFor="attr1-input">
          Attr02
          <input data-testid="attr2-input" type="number" id="attr2-input" />
        </label>
        <label htmlFor="attr1-input">
          Attr03
          <input data-testid="attr3-input" type="number" id="attr3-input" />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input data-testid="image-input" type="text" id="imagem" />
        </label>
        Raridade
        <label htmlFor="raridade">
          Raridade
          <input type="select" id="raridade" />
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" type="checkbox" id="trunfo" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}
