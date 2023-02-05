import LOGO from './logo.png'
// import { Link } from 'react-router-dom'
import Styles from './navBar.module.css'
import { Link } from  'react-router-dom'

const NavBar = () => {
    return(
        <div className= {Styles.divHead}>
            <Link to={'/'}><img className={Styles.logo} height='50px' src={LOGO} alt="logo" /></Link>
            <ul className={Styles.menu}>
                <li><Link className={Styles.routeLink} to={'/characters'}>Personajes</Link></li>
                <li><Link className={Styles.routeLink} to={'/worlds'}>Mundos</Link></li>
                <li><Link className={Styles.routeLink} to={'/about'}>About</Link></li>
            </ul>
        </div>
    )
}

export default NavBar