import React, { Component } from 'react';
import '../css/App.css';
import Intro from './Intro.js';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <section class="hero first is-large">
          <div className='hero-head'>

          </div>
          <div class="hero-body">
            <div class="container header">
              <h1 class="title">
                Lessgage
      </h1>
              <h2 class="subtitle">
                when less means more
      </h2>
            </div>
          </div>
          <div className='hero-foot'>

          </div>
        </section>
        <Intro />
      </div>
    );
  }
}

export default App;
