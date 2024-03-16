

// import { Link } from 'react-router-dom'
import menu from '../assets/menu-btn.png'
import handlelick from './BtnRegul'
import { NavBarList } from '../datas/NavbarList'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav className='lmj-banner'>
            <Link to='/' className='logo fold'>LYCEE PRIVEE PROMOTION</Link>
            <div className='nav-links'>
                <ul>
                    {NavBarList.map((list, index) => (
                        <li key={`${list}-${index}`} ><Link className='menu' to={`${list.link}`} >{list.name.toUpperCase()}</Link></li>
                    ))}
                </ul>
            </div>
            <img src={menu} alt='menu' className='menu-hamburger' onClick={handlelick}/>
        </nav>
    )
}

export default Navbar