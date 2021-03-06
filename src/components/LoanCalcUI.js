import React, { Component } from 'react';
import ReactModal from 'react-modal';
import '../css/LoanCalc.css'

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.4)'
  },
  content : {
    position: 'absolute',
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2
});

class LoanCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      deposit: 0,
      years: 0,
      fee: 2000,
      submitted: false
    }
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('i am submitting');
    this.setState({
      submitted: true
    })
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      price: 0,
      deposit: 0,
      years: 0,
      borrowed: 0,
      fee: 2000,
      monthly_rate: 0,
      submitted: false
    })
  }

  handleTermChange(e) {
    this.setState({
      years: e.target.value
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
        <h1>What you can save?</h1>
        <p>Enter the details of your mortgage below and we'll show you the difference if you bought with Lessgage</p>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <div className='field'>
            <label className='label'>
                mortgage term:
        </label>
              <div className="control">
                <input type="text" value={this.state.years} onChange={this.handleTermChange} />
              </div>
              <label className='label'>
                property price:
        </label>
              <div className="control">
                <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
              </div>
              <label className='label'>
                deposit:
        </label>
              <div className="control">
                <input type="text" placeholder='£' value={this.state.deposit} onChange={this.handleDepositChange} />
              </div>
              <div className='field'>
                <div className="control">
                  <button className='button is-primary' type="submit" value="Submit">Submit</button>
                </div>
              </div>
            </div>
          </form>    
        </div>
        <ReactModal
  isOpen={this.state.submitted}
  contentLabel="Modal"
  ariaHideApp={false}
  style={modalStyles}
>
  <h1>RESULTS</h1>
  <p>Average mortgage cost</p>
  <p>Cost with Lessgage</p>
  <p>Total cost: {formatter.format(`${this.state.price - this.state.deposit + this.state.fee}`)}</p>
  <p>Monthly Payment: {formatter.format(`${(this.state.price - this.state.deposit) / (this.state.years * 12)}`)}</p>
  <p>&nbsp;</p>
  <p>Cost with Mortgage</p>
  <p>Total cost: {formatter.format(`${ Math.round((((this.state.price - this.state.deposit) *(0.00327374+(0.00327374/(Math.pow((0.00327374+1), this.state.years*12)-1)))) * this.state.years*12)) }`)}</p>
  <p>Monthly Payment: {formatter.format(`${Math.round((((this.state.price - this.state.deposit) *(0.00327374+(0.00327374/(Math.pow((0.00327374+1), this.state.years*12)-1)))))) }`)}</p> 

  <button onClick={this.closeModal} >calculate again</button>
</ReactModal>
      </div>
    )
  }
}
  
export default LoanCalc;