import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/validationComponent';
import CharComponent from './CharComponent/charcomponent';

class App extends Component {
  state = {
    label: 'bale to text',
    length: '',
    colors: [
      'red', 'blue', 'pink', 'orange', 'yellow'
    ]
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
  deleteHandler = (id) => {
    const letters = [...this.state.label];
    letters.splice(id, 1)
    this.setState({
      label: letters
    })
  }





  render() {


    // let chars = this.state.label.slice();
    let chars = [...this.state.label];
    // let splitChars = chars.split('');
    // console.log(splitChars);
    let colors = this.state.colors[(Math.floor(Math.random() * (5 - 0) + 0))]
    console.log(Math.floor(Math.random() * (5 - 0) + 0));
    let charStyle = {
      color: 'black',
      backgroundColor: colors
    }

    let CharElement = chars.map((char, id) => {
      if (char !== ' ') {
      return <CharComponent
              letter={char}
              key={id}
              deleted={() => this.deleteHandler(id)}
              style={charStyle}/>
      }
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
      </div>
    );
  }
}

export default App;
