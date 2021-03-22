import Footer from './components/footer';
import Header from './components/header';
import Tasks from './components/tasks';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/NavigationBar';
import React, {Component} from 'react';


class Card extends Component {
  state = {
    tasks: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ tasks: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div>
        <Header />
        <NavigationBar />
        <Tasks tasks={this.state.tasks} />
        <Footer />
      </div>
    )
  }
}

export default Card;