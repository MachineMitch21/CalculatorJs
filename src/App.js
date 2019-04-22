import React, { Component } from 'react';
import CalculatorContainer from './Main/CalculatorContainer';
import opResolver from './Main/Operations/OperationResolver';
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      result: '0'
    }
  }

  onCalculatorButtonClicked = (event) => {
    if (event.target.innerText === 'C') {
      opResolver.flushInput();
      this.setState({
        input: '',
        result: ''
      });
    } else if (event.target.innerText === '=') {
      let result = opResolver.getResult();
      opResolver.flushInput();
      this.setState({
        input: '',
        result: result
      });
    } else {
      if (opResolver.isOperator(event.target.innerText) && this.state.input === '') {
        opResolver.addInput(this.state.result);
        this.setState({
          result: 0
        })
      }
      opResolver.addInput(event.target.innerText);
      this.setState({
        input: `${opResolver.getInput().join(' ')}`,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CalculatorContainer 
          input={this.state.input}
          result={this.state.result}
          onCalculatorButtonClicked={this.onCalculatorButtonClicked}
        />
      </div>
    );
  }
}

export default App;
