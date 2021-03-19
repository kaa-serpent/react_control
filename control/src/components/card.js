import Footer from './footer';
import Header from './header';
import Tasks from './tasks';
import { Component } from 'react';

function Cards (){
  state = {
    tasks: []
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ tasks: data })
    })
    .catch(console.log)
  };
  render() {
    return (
      <div>
        <Header />
        <Tasks tasks={this.state.tasks} />
        <Footer />
      </div>
    )
  }
}
export default Cards;
