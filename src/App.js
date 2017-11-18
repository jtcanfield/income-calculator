import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base_income: 60000,
      pre_tax_percentage_deduct: 10,
      pre_tax_deduct: 500,
      pretax_percent_deduct: "",
      pretax: "",
      tax_percentage: 33,
      taxes_cost: "",
      post_tax_final: "",
      post_tax_final_monthly: "",
      post_tax_final_weekly: "",
      post_tax_final_daily: "",
    };
    this.submitform = this.submitform.bind(this)
  }

  componentDidMount(){
    this.submitform();
  }

  updateFromField(stateKey) {
      return (event) => {
      this.setState({[stateKey]: Number(event.target.value)},()=>{
        this.submitform();
      });
    }
  }

  submitform(){
    var pre_tax_percentage_deductCalc = this.state.pre_tax_percentage_deduct / 100;
    var pretax_percent_deduct = (this.state.base_income * pre_tax_percentage_deductCalc).toFixed(2);
    var pretax = (this.state.base_income - this.state.pre_tax_deduct - pretax_percent_deduct).toFixed(2);
    var taxpercentCalc = this.state.tax_percentage / 100;
    var taxes_cost = (pretax * taxpercentCalc).toFixed(2);
    var post_tax_final = (pretax - taxes_cost).toFixed(2);
    var post_tax_final_monthly = (post_tax_final / 12).toFixed(2);
    var post_tax_final_weekly = (post_tax_final / 52).toFixed(2);
    var post_tax_final_daily = (post_tax_final_weekly / 5).toFixed(2);
    this.setState({pretax_percent_deduct, pretax, taxes_cost, post_tax_final,
      post_tax_final_monthly, post_tax_final_weekly, post_tax_final_daily})
  }

  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1>
            Income Calculator
          </h1>
          <p>
            Accounts for pre-tax income, tax-free costs, and taxes to calculate
            monthly, weekly, and yearly income.
          </p>
        </header>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>
              Base Yearly Salary:
            </label>
            <input type="number" className="form-control"
            onChange={this.updateFromField('base_income')}
            value={this.state.base_income}/>
          </div>
          <div className="form-group">
            <label>
              Percentage of Salary Pre-tax deductions (Yearly: 401k etc.):
            </label>
            <input type="number" className="form-control"
            onChange={this.updateFromField('pre_tax_percentage_deduct')}
            value={this.state.pre_tax_percentage_deduct}/>
          </div>
          <div className="form-group">
            <label>
              Non-Percentage Pre-tax deductions (Yearly: 401k extra, health insurance, donations, etc.):
            </label>
            <input type="number" className="form-control"
            onChange={this.updateFromField('pre_tax_deduct')}
            value={this.state.pre_tax_deduct}/>
          </div>
          <div className="form-group">
            <label>
              Tax Percentage:
            </label>
            <input type="number" className="form-control"
            onChange={this.updateFromField('tax_percentage')}
            value={this.state.tax_percentage}/>
          </div>
        </form>
        <div>
          <p>Amount taken off by percentage deduction: ${this.state.pretax_percent_deduct}</p>
          <p>Pre-Tax Final: ${this.state.pretax}</p>
          <p>Amount taken off by taxes: ${this.state.taxes_cost}</p>
          <p>Post-Tax Final: ${this.state.post_tax_final}</p>
          <p>Post-Tax Monthly: ${this.state.post_tax_final_monthly}</p>
          <p>Post-Tax Weekly: ${this.state.post_tax_final_weekly}</p>
          <p>Post-Tax Daily(assuming 5-day workweek): ${this.state.post_tax_final_daily}</p>
        </div>
      </div>
    );
  }
}

export default App;
