import React, { Component } from 'react';
import './App.css';

const API = 'http://localhost:8000/json';

class App extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      results: [],
    };
  }
 
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ results: data }));
    }

  render() {
    const results  = this.state.results;
    
    return (
      
      <div className="App">
        <div className="container">
          <br />
          <h1>Chris Cole's site</h1>
          <br />
          <p className="App-intro">
            
          </p>
          <div class="row">
            {results.map((result) =>
              <div className="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2" key={result.id}>
                  <a href={result.url}>
                    <img alt={result.title} src={result.src} />
                    {result.title}
                  </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
