import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentWillMount() {

  }
  componentDidUpdate(){

  }

  updateFromField(stateKey) {
      return (event) => {
      this.setState({[stateKey]: event.target.value});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to a Calculator</h1>
        </header>
        <form className="enterForm" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <h6>Before :</h6>
            <input type="username" onChange={this.updateFromField('username')} value={this.state.username} placeholder="user@gmail.org"/>
          </div>
          <div className="form-group">
            <h6>Password:</h6>
            <input type="password" onChange={this.updateFromField('password')} value={this.state.password} placeholder="********"/>
          </div>
          <br/>
          <div className="form-group pull-right">
            <button className="btn btn-primary btn-lg" type="submit" onClick={event => this.login(event)}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
