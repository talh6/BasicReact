import React ,{ Component } from 'react';
import Person  from './Person/Person';

class Persons extends Component{

  /*static getDerivedStateFromProps(props,state){
    console.log('[Persons.js] getDerivedStateFromProps',props);
    return state;
  }*/

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons ){
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render(){
    console.log('[Persons.js] rendering..');
    return this.props.persons.map((person,index)=>{
      return <Person
          click={()=> this.props.clicked(index)}
          changed={(event)=>this.props.changed(event,person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
      />
    });
  }
}


export default Persons;
