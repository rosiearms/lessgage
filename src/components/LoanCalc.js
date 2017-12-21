import React, { Component } from 'react';
import '../css/LoanCalc.css'


class LoanCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      deposit: 0,
      normCost: 0,
      lessCost: 0
    }
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('i am submitting');
    this.setState({
      price: 0,
      deposit: 0,
      normCost: 'A large amount',
      lessCost: 'Alot less than the normal amount'
    })
  }

  handleDepositChange(e) {
    this.setState({
      deposit: e.target.value
    })
  }

  handlePriceChange(e) {
    this.setState({
      price: e.target.value
    })
  }

  render() {
    return (
      <div className='calculator'>
        <h1>Calculate your costs</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <div className='field'>
              <label>
                property price:
        </label>
              <div class="control">
                <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
              </div>
              <label>
                deposit:
        </label>
              <div class="control">
                <input type="text" placeholder='£' value={this.state.deposit} onChange={this.handleDepositChange} />
              </div>
              <div className='field is-grouped'>
                <div class="control">
                  <button className='button is-primary' type="submit" value="Submit">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Clear</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
  
export default LoanCalc;