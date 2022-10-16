import PropTypes from 'prop-types'

function Button({color,text,onClick}) {
  const btn_style = {width: '100px'}
  return (
    <button 
    className="btn" 
    onClick = {onClick}
    style={btn_style}>{text}
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