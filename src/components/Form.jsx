import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            type="text"
            id="nome"
            placeholder="Placeholder"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            type="textarea"
            id="descricao"
          />
        </label>
        <label htmlFor="attr1input">
          Attr01
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            id="attr1input"
          />
        </label>
        <label htmlFor="attr2input">
          Attr02
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            id="attr2input"
          />
        </label>
        <label htmlFor="attr3input">
          Attr03
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            id="attr3input"
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            type="text"
            id="imagem"
          />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            name="cardTrunfo"
            checked={ cardTrunfo }
            onClick={ onInputChange }
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo"
          />
        </label>
        <button
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
