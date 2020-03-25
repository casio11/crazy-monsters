import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchMonster: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const { monsters, searchMonster } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchMonster.toLowerCase())  
    );
    return(
      <div className="App">
        <h1>Crazy Monsters</h1>
          <SearchBox 
            placeholder = 'Search'
            handleChange = {e => this.setState({searchMonster: e.target.value})}
          />
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
