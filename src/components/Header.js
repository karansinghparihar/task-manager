import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, addBtnHandler, addButton}) => {
    return (
        <header>
            <h1>{title}</h1>
            { <Button btnColor={`${ addButton ? 'green' : 'red' }`} btnText={`${ addButton ? 'Add' : 'Close'}`} addBtnHandler={addBtnHandler} /> }
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;