import React from 'react'
import styles from './Person.module.css'

const person = (props) =>{

  return (
      <div className={styles.Person}>
        <p>My name is {props.name} my age is {props.age}</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
        <button onClick={props.click} >Delete Person</button>
      </div>
  )
};

export default person;