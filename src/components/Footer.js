import {Link, useLocation} from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
    console.log(location)
    return (
        <footer>
            <p>Copyrights &copy; Karan Singh Parihar | All rights reserved</p>
            { location.pathname!=='/about' ? <Link to='/about' >About</Link> : <Link to='/'>Back to App</Link> }
        </ footer>
    )
}
export default Footer;