import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

function App() {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appt',
        day: 'Feb 5th at 2:30',
        reminder: true

},
{
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true
},
{
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30 pm',
    reminder: true
}
])
  return (
      <div className='container'>
      <Header />
      <Tasks tasks={tasks}/>
    </div>    
  );
}



export default App;
