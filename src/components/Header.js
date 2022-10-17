import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAddTask, onAdd }) => {
  const onClick = () => {
    onAdd()
  }


  return (
        <header style={headingStyle}>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close': 'Add'} onClick={onClick}/>
        </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
const headingStyle = {textAlign:'center'}

export default Header