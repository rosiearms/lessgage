import React, { Component } from 'react';
import LoanCalcUI from './LoanCalcUI';
import '../css/Intro.css'


class IntroUI extends Component {
  render() {
    return (
      <div className="Intro">
        <div className='double'>
          <h1>There is another way...</h1>
          <p>When you buy a house, you tend to pay for it twice.
Once in the sale price and once in the interest accrued throughout the mortgage.
Buy two, only get one.
Surely there is another way? We think there is....</p>
        </div>
        <div className='second'>
          <section className="hero is-large">
            <div className='hero-head'>

            </div>
            <div className="hero-body">
              <div className="container">
                <h1>Introducing Lessgage</h1>
                <p>By circumventing the banks, both the seller and buyer can share in the benefit from the money saved. This can be done by simply selling your house directly.</p>
              </div>
            </div>
            <div className='hero-foot'>

            </div>
          </section>
        </div>
        <div className='lessgage'>
          <h1>No need to borrow</h1>
          <p>The seller just receives a monthly payment until the sale is complete. The contract is secured against the property and the monthly payments are insured, lessgage doesn’t take a percentage but a fixed fee and is there to step in if anything goes wrong.</p>
        </div>
        <div className='third'>
          <section className="hero is-large">
            <div className='hero-head'>

            </div>
            <div className="hero-body">
              <div className="container">
                <p>The first years profit would for example be enough for you to buy a solar panel for your roof or make a down payment on a new car. Together we can cast off all the shackles of mortgages and divert thousands of pounds back into ordinary people’s pockets.</p>
              </div>
            </div>
            <div className='hero-foot'>

            </div>
          </section>
        </div>
        <div className='columns'>
          <div className='column is-half'>
            <LoanCalcUI />
          </div>
          <div className='column is-half'>
            <img src='https://www.creditdonkey.com/image/1/550w/growing-money-1200x628.jpg' alt='growing money' />
          </div>

        </div>
      </div>
    );
  }
}


export default IntroUI;