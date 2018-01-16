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
    top                   : '50%',
    right                 : 'auto',
    bottom                : 'auto'
  }
}

class LoanCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      deposit: 0,
      years: 0,
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
        <h1>Calculate your costs</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <div className='field'>
            <label>
                mortgage term:
        </label>
              <div className="control">
                <input type="text" value={this.state.years} onChange={this.handleTermChange} />
              </div>
              <label>
                property price:
        </label>
              <div className="control">
                <input type="text" value={this.state.price} onChange={this.handlePriceChange} />
              </div>
              <label>
                deposit:
        </label>
              <div className="control">
                <input type="text" placeholder='£' value={this.state.deposit} onChange={this.handleDepositChange} />
              </div>
              <div className='field is-grouped'>
                <div className="control">
                  <button className='button is-primary' type="submit" value="Submit">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Clear</button>
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
  <p>Total cost: {`${this.state.price - this.state.deposit} plus the fixed fee`}</p>
  <p>Monthly Payment: {`${Math.floor((this.state.price - this.state.deposit) / (this.state.years * 12))}`}</p>
  <button onClick={this.closeModal} >calculate again</button>
</ReactModal>
      </div>
    )
  }
}
  
export default LoanCalc;