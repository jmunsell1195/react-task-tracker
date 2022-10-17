import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
         e.preventDefault()

         if(text){
            onAdd({ text,day,reminder })
            setText('')
            setDay('')
            setReminder(false)
         }
         else{
            alert('Please Add Task')
         }
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control" style={{width: '98%'}}>
            <label>Task</label>
            <input type="text" placeholder="Add Task" 
            value={text} onChange={(e) => {setText(e.target.value)}}></input>
        </div>
        <div className="form-control" style={{width: '98%'}}>
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day"
            value={day} onChange={(e) => {setDay(e.target.value)}}></input>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => {setReminder(e.target.value)}}></input>
        </div>
        <button style={{width:"98%"}} className="btn" value="submit" >Submit</button>
    </form>
  )
}

export default AddTask