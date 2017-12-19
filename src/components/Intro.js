import React, { Component } from 'react';
import '../css/Intro.css'


class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className='container double is-fluid'>
          <h1>Double Trouble</h1>
          <p>   When you buy a house, you tend to pay for it twice.
Once in the sale price and once in the interest accrued throughout the mortgage.
Buy two, only get one.
Surely there is another way? We think there is....</p>
        </div>
        <div className='second'>
        <section class="hero is-large">
          <div className='hero-head'>

          </div>
          <div class="hero-body">
            <div class="container">
            </div>
          </div>
          <div className='hero-foot'>

          </div>
        </section>
        </div>
        <div className='container lessgage is-fluid'>
          <h1>Introducing Lessgage</h1>
          <p>By circumventing the banks, both the seller and buyer can share in the benefit from the money saved. This can be done by simply selling your house directly.  </p>
        </div>
        <div className='third'>
        <section class="hero is-large">
          <div className='hero-head'>

          </div>
          <div class="hero-body">
            <div class="container">
              <p>There is no need to borrow any money, the seller just receives a monthly payment until the sale is complete. The contract is secured against the property and the monthly payments are insured, lessgage doesn’t take a percentage but a fixed fee and is there to step in if anything goes wrong.</p>
            </div>
          </div>
          <div className='hero-foot'>

          </div>
        </section>
        </div>
      </div>
    );
  }
}


export default Intro;