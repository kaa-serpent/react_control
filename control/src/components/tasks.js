import React from 'react'
import { Component } from 'react';


const Tasks = ({ tasks }) => {
  
  return (
    <div>
      <center><h1>task List</h1></center>
      {tasks.map((task) => (
        /*
        
        Essaie d'appel d'api pour récupérer le nom de l'utilisateurs par rapport à la tache
        Non fonctionel

        componentDidMount() {
          url = "https://jsonplaceholder.typicode.com/users?id=" + task.userId,
          fetch(url)
          .then(res => res.json())
          .then((data) => {
            this.setState({ user: data })
          })
          .catch(console.log)
        },
        */
        <div class="card">
          <div class="card-body">
            <h4>{task.userId}</h4>
            <h5 class="card-title">{task.title}</h5>            
          </div>
        </div>
      ))}
    </div>
  )
};

export default Tasks