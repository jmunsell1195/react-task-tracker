import PropTypes from 'prop-types'

function Button({color,text,onClick}) {
  return (
    <button style={{width: '98%',backgroundColor:color}}
    color={color}
    className="btn" 
    onClick = {onClick}>{text}
    </button>
  )
}

Button.defaultProps = {color:'black',text:'button'}

Button.propTypes = {
    color:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func
}

export default Button