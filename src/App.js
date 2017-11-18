import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base_income: 63000,
      pre_tax_deduct: 7000,
      pretax: "",
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
    var pretax = this.state.base_income - this.state.pre_tax_deduct;
    this.setState({pretax})
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
              Base Salary:
            </label>
            <input type="text" className="form-control"
            onChange={this.updateFromField('base_income')}
            value={this.state.base_income}/>
          </div>
          <div className="form-group">
            <label>
              Pre-tax deductions (401k, health insurance, donations, etc.):
            </label>
            <input type="text" className="form-control"
            onChange={this.updateFromField('pre_tax_deduct')}
            value={this.state.pre_tax_deduct}/>
          </div>
          <br/>
          <div className="form-group pull-right">
            <button className="btn btn-primary btn-md"
            type="submit" onClick={event => this.submitform(event)}>
              Submit
            </button>
          </div>
        </form>
        <div>
          <p>Pre-Tax Final: {this.state.pretax}</p>
        </div>
      </div>
    );
  }
}

export default App;
