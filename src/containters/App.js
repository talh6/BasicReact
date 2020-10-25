import React, { Component } from 'react';
import  styles from './App.module.css';
import Persons from '../componnents/Persons/Persons'
import Cockpit from '../componnents/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id:'1', name: 'Max', age: 28 },
        { id:'2',name: 'Manu', age: 29 },
        { id:'3',name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler =(personIndex)=>{
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});
};

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  };

  togglePersonsHandler =()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render () {
    console.log('[App.js] rendering..');
    const cockpit = <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked ={this.togglePersonsHandler}
    />;

    let persons= null;

    if(this.state.showPersons){
      persons= <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
      />;
    }

    return (
        <div className={styles.App}>
          {cockpit}
          {persons}
        </div>
    );
  }
}

export default App;
