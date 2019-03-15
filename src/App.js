import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import PeopleAPI from './core/apis/people.api';
import People from './people/people';

class App extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    this.callPeople();
  }

  callPeople = () => {
    PeopleAPI.search(1, this.onPeopleResponse);
  };

  onPeopleResponse = response => {
    console.log("onPeopleResponse", response);
    this.setState({ people: response });
  };

  render() {
    console.log("Render", this.state);
    const { people } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="page">
          <button onClick={this.callPeople}>Refresh</button>

          <div className="people">
            <People people={people} onFoodClick={this.removeFoodItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
