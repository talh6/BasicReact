import React ,{ useEffect} from 'react';
import styles from './Cockpit.module.css';

const Cockpit =(props) => {
  useEffect(()=>{
    console.log('[Cocpit.js] useEffect');
  });

  let btnClass= styles.Button;

  let classes =[];
  if(props.persons.length <=2){
    classes.push(styles.red);
  }
  if(props.persons.length <=1){
    classes.push(styles.bold);
  }
  if(props.showPersons){
    btnClass = styles.Button+' '+ styles.Blue;
  }else{
    btnClass = styles.Button;
  }

  return (
      <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
      onClick={props.clicked}
      className={btnClass}>Toggle Persons</button>
      </div>
  );
};

export default Cockpit;