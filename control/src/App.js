import Footer from './components/footer';
import Header from './components/header';
import Tasks from './components/tasks';
import { NavigationBar } from './components/NavigationBar';
import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Card } from './components/card';


export default class App extends Component{
  render() {
    return <BrowserRouter>
    <Header>
      <Switch>
        <Route exact path="/card" component={Card} />

        <Route exact path="/utilisateurs" component={Header}/>
      </Switch>
      </Header>
    </BrowserRouter>
  }
}
	 