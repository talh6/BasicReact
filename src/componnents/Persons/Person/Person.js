import React ,{ Component } from 'react'
import styles from './Person.module.css'

class Person extends Component{
    render() {
      return (
          <div className={styles.Person}>
            <p>My name is {this.props.name} my age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.name}/>
            <button onClick={this.props.click} >Delete Person</button>
          </div>
      )
    }
}


export default Person;