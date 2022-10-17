import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

const App = () => {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
//     {
//         id: 1,
//         text: 'Doctors Appt',
//         day: 'Feb 5th at 2:30',
//         reminder: true

// },
// {
//     id: 2,
//     text: 'Meeting at School',
//     day: 'Feb 6th at 1:30pm',
//     reminder: true
// },
// {
//     id: 3,
//     text: 'Food Shopping',
//     day: 'Feb 5th at 2:30 pm',
//     reminder: true
// }
])

//Delete Taks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? {...task, reminder: !task.reminder} : task
    )
  )
}

const addTask = (task) => {
  const id = tasks.length + 1
  const newTask = {id, ...task}
  setTasks([newTask, ...tasks])
  setShowAddTask(!showAddTask)
}



  return (
      <div className='container' style={{width:"45vw"}}>
      <Header showAddTask={showAddTask} onAdd={() => {setShowAddTask(!showAddTask)}}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to Show')}
    </div>    
  );
}

export default App;
