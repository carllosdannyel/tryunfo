import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: null,
    cardAttr2: null,
    cardAttr3: null,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardList: [],
  }

  isEnabled = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;

    const isDifferentFromEmpty = () => (
      !cardName || !cardDescription || !cardImage || !cardRare
    );

    const lessThan0OrGreaterThan90 = () => {
      const maxNumber = 90;
      const minNumber = 0;
      const inputOne = Number(cardAttr1);
      const inputTwo = Number(cardAttr2);
      const inputThree = Number(cardAttr3);

      return inputOne < minNumber || inputOne > maxNumber
        || inputTwo < minNumber || inputTwo > maxNumber
        || inputThree < minNumber || inputThree > maxNumber;
    };

    const isGreaterThan210 = () => {
      const totalNumber = 210;
      const inputOne = Number(cardAttr1);
      const inputTwo = Number(cardAttr2);
      const inputThree = Number(cardAttr3);
      return inputOne + inputTwo + inputThree > totalNumber;
    };

    if (isDifferentFromEmpty()) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (lessThan0OrGreaterThan90()) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (isGreaterThan210()) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.name === 'cardTrunfo'
          ? event.target.checked
          : event.target.value,
    }, this.isEnabled);
  };

  hasTrunfo = () => {

  }

  resetForm = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardList: [...prev.cardList, prev],
    }));
  }

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <div className="general-container">
          <div className="form-container">
            <Form
              { ...this.state }
              onSaveButtonClick={ this.resetForm }
              onInputChange={ this.handleChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
          </div>
          <div className="card-container">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
