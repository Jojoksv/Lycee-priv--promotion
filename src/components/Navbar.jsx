

// import { Link } from 'react-router-dom'
import menu from '../assets/menu-btn.png'
import handlelick from './BtnRegul'
import { NavBarList } from '../datas/NavbarList'
import '../styles/Navbar.css'

function Navbar(){
    return(
        <nav className='lmj-banner'>
            <a href='/' className='logo fold'>Lycée Privé Promotion</a>
            <div className='nav-links'>
                <ul>
                    {NavBarList.map((list, index) => (
                        <li key={`${list}-${index}`} ><a className='menu' href={`${list.link}`} >{list.name.toUpperCase()}</a></li>
                    ))}
                </ul>
            </div>
            <img src={menu} alt='menu' className='menu-hamburger' onClick={handlelick}/>
        </nav>
    )
}

export default Navbar