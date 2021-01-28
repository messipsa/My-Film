import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
     
   <div className='container-fluid'>
     <h1>MovieList</h1>
     <nav className="navbar sticky-top navbar-light bg-dark">
        <h1 className="navbar-brand text-light">
           MovieList
        </h1>
     </nav>
      <List />
      </div>
    );
  }
}

export default App;
