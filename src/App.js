import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/validationComponent';
import CharComponent from './CharComponent/charcomponent';

class App extends Component {
  state = {
    label: 'bale to text',
    length: ''
  }

  changeHandler = (e) =>
  {
    // console.log(e.target.value);
    let label = e.target.value;
    const length = [...this.state.length];
    length.splice(0, 1, e.target.value.length);


    this.setState({
      label,
      length
    })
  }
  charhandler = () => {

  }





  render() {


    let chars = this.state.label.slice();
    let splitChars = chars.split('');
    console.log(splitChars);

    let CharElement = splitChars.map((char, id) => {
      return <CharComponent letter={char} key={id} />
    })
    // let lettersList = letters.map((letter) => {
    //   return <CharComponent val={letter}/>
    // })

    return (
      <div className="App">
        <input onChange={this.changeHandler}type="text" value={this.state.label}/>
        <button onClick={this.charhandler}>char</button>
        <ValidationComponent length={this.state.length}/>
        <button onClick={this.charhandler}>push to char</button>
        {CharElement}
        <ul>

        </ul>
      </div>
    );
  }
}

export default App;
