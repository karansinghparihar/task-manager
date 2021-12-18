import PropTypes from 'prop-types'

const Button = ({ btnColor, btnText, addBtnHandler }) => {
    const buttonStyle = {
        background: btnColor
    }
    return (
        <button className="btn" style={buttonStyle} onClick={addBtnHandler}>{btnText}</button>
    )
}

Button.defaultProps = {
    btnColor: 'steelblue',
    btnText: 'Add'
}

Button.propTypes = {
    btnColor: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnHandler: PropTypes.func
}

export default Button;