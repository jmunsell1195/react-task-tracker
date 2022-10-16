import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = () => {
    console.log('Click')
  }
  return (
        <div style={{width:'30vw',textAlign:'center'}}>
            <h1>{props.title}</h1>
            <Button onClick={onClick}/>
            <br/>
            <Button color="steelblue" text="Hello" onClick={onClick}/>
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
const headingStyle = {color: 'red',backgroundColor: 'black'}

export default Header