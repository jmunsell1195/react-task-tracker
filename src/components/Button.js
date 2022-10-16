import PropTypes from 'prop-types'

function Button({color,text,onClick}) {

  return (
    <button 
    className="btn" 
    onClick = {onClick}
    style={{backgroundColor:color,position:'absolute',right:'15%'}}>{text}
    </button>
  )
}

Button.defaultProps = {color:'red',text:'button'}

Button.propTypes = {
    color:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func
}

export default Button