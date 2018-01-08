import React, { Component } from 'react';
import '../css/App.css';
import IntroUI from './IntroUI.js';

class AppUI extends Component {
  render() {
    return (  
      <div className="App">
        <section className="hero first is-large">
          <div className='hero-head'>

          </div>
          <div className="hero-body">
            <div className="container header">
              <h1 className="title">
                Lessgage
      </h1>
              <h2 className="subtitle">
                when less means more
      </h2>
            </div>
          </div>
          <div className='hero-foot'>

          </div>
        </section>
        <IntroUI />
      </div>
    );
  }
}

export default AppUI;
