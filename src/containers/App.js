import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if(this.state.robots.length === 0){
      return <h1>Loangding</h1>
    }else {
      return (
        <div className="container text-center">
          <h1>Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
          <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
    
  }
}
export default App;