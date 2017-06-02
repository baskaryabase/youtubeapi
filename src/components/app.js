import React, { Component } from 'react';
import NavHead from './NavHead';
import Filter from './filter';
import CarList from './CarList';

export default class App extends Component {
  render() {
    return (
      <div className="app-container" style={{width:"100%"}}>
          <NavHead />
          <Filter />
          <CarList />
      </div>
    );
  }
}
