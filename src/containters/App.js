import React, { Component } from 'react';
import  styles from './App.module.css';
import Person from './componnents/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Max', age: 28 },
      { id:'2',name: 'Manu', age: 29 },
      { id:'3',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

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
    let persons= null;

    let btnClass= styles.Button;

    if(this.state.showPersons){
      persons= (
          <div>
            {
              this.state.persons.map((person,index)=>{
                return <Person
                    click={()=> this.deletePersonHandler(index)}
                    changed={(event)=>this.nameChangedHandler(event,person.id)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                />
              })
            }
          </div>
      );
      btnClass = btnClass + ' ' +styles.Blue;
    }

    let classes =[];
    if(this.state.persons.length <=2){
      classes.push(styles.red);
    }
    if(this.state.persons.length <=1){
      classes.push(styles.bold);
    }

    return (
        <div className={styles.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
              onClick={() => this.togglePersonsHandler()}
              className={btnClass}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
