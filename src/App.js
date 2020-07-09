import React from 'react';

class App extends React.Component {
  state = {
    counter: 0
  };
  add = () =>{
    console.log("Add");
    this.setState(current => ({ counter : current.counter + 1}))
  };
  minus = () =>{
    console.log("Minus");
    //this.setState({counter:this.state.counter - 1 })
    this.setState(current => ({ counter : current.counter - 1}))
  };
  render(){
    return(
    <div>
      <h1>i am class {this.state.counter} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}
export default App;
