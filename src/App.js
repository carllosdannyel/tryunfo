import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
  }

  // isGreaterOrLessThan = () => (
  //   if (cardAttr1 > maxNumber || cardAttr1 < 0) return false;
  //   if (cardAttr2 > maxNumber || cardAttr2 < 0)
  // )

  isEnabled = () => {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage /* cardRare */ } = this.state;

    const isDifferentFromEmpty = () => (
      cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      // || cardRare !== ''
      // || cardAttr1 !== null
      // || cardAttr2 !== null
      // || cardAttr3 !== null
    );
    console.log(isDifferentFromEmpty());

    const isGreaterThan210 = () => {
      const totalNumber = 210;
      const inputOne = Number(cardAttr1);
      const inputTwo = Number(cardAttr2);
      const inputThree = Number(cardAttr3);
      return inputOne + inputTwo + inputThree > totalNumber;
    };
    // console.log(isGreaterThan210());

    const greaterOrLessThan = () => {
      const maxNumber = 90;
      const minNumber = 0;
      const inputOne = Number(cardAttr1);
      const inputTwo = Number(cardAttr2);
      const inputThree = Number(cardAttr3);

      return inputOne > maxNumber || inputOne < minNumber
        || inputTwo > maxNumber || inputTwo < minNumber
        || inputThree > maxNumber || inputThree < minNumber;
    };

    // console.log(greaterOrLessThan()); isDifferentFromEmpty()
    if (isDifferentFromEmpty()) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (greaterOrLessThan()) {
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
        <h1>Adicionar nova carta</h1>
        <Form
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
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
    );
  }
}

export default App;
