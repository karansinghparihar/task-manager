import PropTypes from 'prop-types'

const Header = (props) => {
    const {title} = props
    return (
        <header>
            <h1>Task Tracker</h1>
            <h3>Title: {title}</h3>
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