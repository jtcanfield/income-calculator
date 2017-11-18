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

  submitform(event){
    event.preventDefault();
    console.log("stuff will be here");
  }

  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1>
            Welcome to a Calculator
          </h1>
          <p>
            Accounts for pre-tax income, tax-free costs, and taxes to calculate
            monthly, weekly, and yearly income.
          </p>
        </header>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>
              Before:
            </label>
            <input type="username" class="form-control"
            onChange={this.updateFromField('username')}
            value={this.state.username}
            placeholder="user@gmail.org"/>
          </div>
          <div className="form-group">
            <label>
              Password:
            </label>
            <input type="password" class="form-control"
            onChange={this.updateFromField('password')}
            value={this.state.password}
            placeholder="********"/>
          </div>
          <br/>
          <div className="form-group pull-right">
            <button className="btn btn-primary btn-md"
            type="submit" onClick={event => this.submitform(event)}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
