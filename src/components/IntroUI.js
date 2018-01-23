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
          <section className="hero is-medium">
            <div className='hero-head'>
            </div>
            <div className="hero-body">
              <div className='tile is-ancestor'>
                <div className='tile is-vertical is-6'>
                  <div className="mid-text">
                    <h1>Introducing Lessgage</h1>
                    <p>By circumventing the banks, both the seller and buyer can share in the benefit from the money saved. This can be done by simply selling your house directly. The seller just receives a monthly payment until the sale is complete. The contract is secured against the property and the monthly payments are insured, lessgage doesn’t take a percentage but a fixed fee and is there to step in if anything goes wrong.</p>
                  </div>
                </div>
                <div className='tile is-vertical'>
                </div>
                <div className='tile'>
                </div>
              </div>
              <div className='tile is-ancestor'>
                <div className='tile is-vertical'>
                </div>
                <div className='tile is-6 is-vertical'>
                  <div className="mid-text">
                    <h1>Save money</h1>
                    <p>The first years profit would for example be enough for you to buy a solar panel for your roof or make a down payment on a new car. Together we can cast off all the shackles of mortgages and divert thousands of pounds back into ordinary people’s pockets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='hero-foot'>

            </div>
          </section>
        </div>
        <div className='columns is-marginless'>
          <div className='column img-one'>
          </div>
          <div className='column img-two'>
          </div>
          <div className='column calc-form'>
            <LoanCalcUI />
          </div>

        </div>
      </div>
    );
  }
}


export default IntroUI;