

const Tasks = ({ tasks }) => {

 
  return (

        tasks.map(element => <h3 key={element.id}>{element.text}</h3>)
  )
}

export default Tasks