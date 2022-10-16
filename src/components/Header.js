import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = () => {
    console.log('Click')
  }
  return (
        <div style={headingStyle}>
            <h1>{props.title}</h1>
            <Button text='Add' onClick={onClick}/>
        </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//CSS in JS
const headingStyle = {width:'30vw',textAlign:'center'}

export default Header