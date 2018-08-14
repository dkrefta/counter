import React, { Component } from 'react';


export default class Counter extends Component {

 state = {
   count: 0,
 }
 
onClickInc (value) {
  const {count} = this.state
      this.setState({
        count: count +1
      })
  }
onClickDec (value) {
  const {count} = this.state
      this.setState({
        count: count -1
      })
  }
onClickReset (value) {
  const {count} = this.state
      this.setState({
        count: 0
      })
  }

 
  render() {

    const {count} = this.state
    return (
      <section className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={(e) => this.onClickInc(this, 'add')} value="add"className="full-width">Increment</button>
        <button onClick={(e) => this.onClickDec(this, 'sub')} className="full-width">Decrement</button>
        <button onClick={(e) => this.onClickReset(this, 'reset')} className="full-width">Reset</button>
      </section>
    );
  }
}
