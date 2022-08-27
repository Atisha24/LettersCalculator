// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeInputText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculate-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="input-container">
              <label className="label-text" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                type="text"
                id="phraseText"
                placeholder="Enter the phrase"
                className="input-text"
                onChange={this.onChangeInputText}
                value={inputText}
              />
            </div>
            <p className="letters-count"> No.of letters: {inputText.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
