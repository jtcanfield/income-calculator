import React, { Component } from 'react';

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
    var pretax_percent_deduct = (this.state.base_income * pre_tax_percentage_deductCalc);
    var pretax = (this.state.base_income - this.state.pre_tax_deduct - pretax_percent_deduct);
    var taxpercentCalc = this.state.tax_percentage / 100;
    var taxes_cost = (pretax * taxpercentCalc);
    var post_tax_final = (pretax - taxes_cost);
    var post_tax_final_monthly = (post_tax_final / 12);
    var post_tax_final_weekly = (post_tax_final / 52);
    var post_tax_final_daily = (post_tax_final_weekly / 5);
    this.setState({pretax_percent_deduct, pretax, taxes_cost, post_tax_final,
      post_tax_final_monthly, post_tax_final_weekly, post_tax_final_daily})
  }

  render() {
    return (
      <div className="container">

        <div className="card my-3">
          <div className="card-header text-white bg-success">
            <header className="text-center">
              <h1>
                Income Calculator
              </h1>
              <p className="font-weight-bold">
                Accounts for pre-tax income, tax-free costs, and taxes to calculate
                yearly, monthly, weekly, and daily income.
              </p>
            </header>
          </div>
          <div className="card-body table-success pb-0">
            <form className="" onSubmit={this.handleFormSubmit}>
              <div className="form-group row">
                <label className="col-sm-10 col-form-label">
                  Base Yearly Salary:
                </label>
                <div className="col-sm-2">
                  <input type="number" className="form-control"
                  onChange={this.updateFromField('base_income')}
                  value={this.state.base_income}/>
                </div>
              </div>
              <div className="form-group row">
              <label className="col-sm-10 col-form-label">
                  Percentage of Salary Pre-tax deductions (Yearly: 401k etc.):
                </label>
                <div className="col-sm-2">
                  <input type="number" className="form-control"
                  onChange={this.updateFromField('pre_tax_percentage_deduct')}
                  value={this.state.pre_tax_percentage_deduct}/>
                </div>
              </div>
              <div className="form-group row">
              <label className="col-sm-10 col-form-label">
                  Non-Percentage Pre-tax deductions (Yearly: 401k extra, health insurance, donations, etc.):
                </label>
                <div className="col-sm-2">
                  <input type="number" className="form-control"
                  onChange={this.updateFromField('pre_tax_deduct')}
                  value={this.state.pre_tax_deduct}/>
                </div>
              </div>
              <div className="form-group row">
              <label className="col-sm-10 col-form-label">
                  Tax Percentage:
                </label>
                <div className="col-sm-2">
                  <input type="number" className="form-control"
                  onChange={this.updateFromField('tax_percentage')}
                  value={this.state.tax_percentage}/>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="table-style">
          <table className="table table-lg table-dark text-center">
            <thead className="bg-white text-dark">
              <tr className="row">
                <div className="col-3 px-0 py-2 m-0">
                  Base Salary
                </div>
                <div className="col-3 px-0 py-2 m-0 bg-light rounded">
                  Percentage Deductions
                </div>
                <div className="col-3 px-0 py-2 m-0">
                  Pre-Tax Net Income
                </div>
                <div className="col-3 px-0 py-2 m-0 bg-light rounded">
                  Tax Deductions
                </div>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <div className="bg-primary font-weight-bold col-3 px-0 py-2 m-0">
                  {this.state.base_income.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
                <div className="bg-danger col-3 px-0 py-2 m-0">
                  {this.state.pretax_percent_deduct.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
                <div className="bg-primary col-3 px-0 py-2 m-0">
                  {this.state.pretax.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
                <div className="bg-danger col-3 px-0 py-2 m-0">
                  {this.state.taxes_cost.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
              </tr>
            </tbody>
          </table>

          <table className="table table-lg table-dark text-center">
            <thead className="bg-white text-dark">
              <tr className="row">
                <div className="col-3 px-0 py-2 m-0">
                  Post-Tax Yearly Net Income
                </div>
                <div className="col-3 px-0 py-2 m-0 bg-light rounded">
                  Post-Tax Monthly Net Income
                </div>
                <div className="col-3 px-0 py-2 m-0">
                  Post-Tax Weekly Net Income
                </div>
                <div className="col-3 px-0 py-2 m-0 bg-light rounded">
                  Post-Tax Daily Net Income
                </div>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <div className="bg-success font-weight-bold col-3 px-0 py-2 m-0">
                  {this.state.post_tax_final.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
                <div className="table-success text-dark col-3 px-0 py-2 m-0">
                  {this.state.post_tax_final_monthly.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
                <div className="bg-success col-3 px-0 py-2 m-0">
                  {this.state.post_tax_final_weekly.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
                <div className="table-success text-dark col-3 px-0 py-2 m-0">
                  {this.state.post_tax_final_daily.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </div>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default App;
