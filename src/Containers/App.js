import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      hello:[
        'state1', 'state2'
      ]
    }
  }

  componentDidMount(){
    this.setState(
        {hello:['setState1','setState2']}
        )
  }

  componentDidUpdate(){
    const json = JSON.stringify(this.state.hello)
    localStorage.setItem('hello', json);
  }

  render(){
  return (
    <div className="App">
        <h1>{this.state.hello}</h1>
     </div>
  );
}
}

export default App;
