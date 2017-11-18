import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base_income: 63000,
      pre_tax_deduct: 7000,
      pretax: "",
      tax_percentage: 35,
      taxes_cost: "",
      post_tax_final: "",
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
    var taxpercentCalc = this.state.tax_percentage / 100;
    var taxes_cost = pretax * taxpercentCalc;
    var post_tax_final = pretax - taxes_cost;
    this.setState({pretax, taxes_cost, post_tax_final})
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
          <div className="form-group">
            <label>
              Tax Percentage:
            </label>
            <input type="text" className="form-control"
            onChange={this.updateFromField('tax_percentage')}
            value={this.state.tax_percentage}/>
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
          <p>Amount taken off by taxes: {this.state.taxes_cost}</p>
          <p>Post-Tax Final: {this.state.post_tax_final}</p>
        </div>
      </div>
    );
  }
}

export default App;
