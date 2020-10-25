import React, { Component } from 'react';


class ErrorBoundry extends Component{
  state={
    hasError: false,
    errorMassage: ''
  };

  componentDidCatch = (error, errorInfo) => {
    this.setState({hasError: true, errorMassage: error})
  };

  render(){
    if(this.state.hasError){
      return <h1>Something went wrong : {this.state.errorMassage}</h1>
    }
    return this.props.children;
  }

}

export default ErrorBoundry;
