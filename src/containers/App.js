import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      // searchfield: ''
    }
  }

  // onSearchChange = (event) => {
  //   this.setState({searchfield:event.target.value})
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  render() {
    const { robots } = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return !robots.length ? 
      <h1>Loangding</h1> :
      <div className="container text-center">
        <h1>Robot Friends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}/>
        </ErrorBoundry>
        
        </Scroll>
      </div>;
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);