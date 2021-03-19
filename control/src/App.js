import Title from './components/title';
import Footer from './components/footer';
import Header from './components/header';
import Card from './components/card';
import Tasks from './components/tasks';
import { Component } from 'react';

class App extends Component {
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
        <Tasks tasks={this.state.tasks} />
        <Footer />
      </div>
    )
  }
}
export default App;
