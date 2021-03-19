import React from 'react'

const Tasks = ({ tasks }) => {
  return (
    <div>
      <center><h1>task List</h1></center>
      {tasks.map((task) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{task.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{task.id}</h6>
            <p class="card-text">{task.completed}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

    export default Tasks