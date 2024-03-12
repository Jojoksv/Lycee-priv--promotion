
import { Link } from 'react-router-dom'
import { NavBarList } from '../datas/NavbarList'
import '../styles/Onparallax.css'
import orient from '../assets/orienter.jpg'


function FocusOn(){
    return(
        
        <section className="parallax">
        <div className='all'>
            <div className="Onparallax">
                <h1>Focus Sur...</h1>
            </div>
            <div className='img'>
                <a className='menu' href="/Etablissement" >
                    <img src={orient} alt='' className='img2'/>
                </a>
                <div class="adress" id='plan'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.2654345221763!2d-4.273271251350609!3d11.167972157228572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe34fafcf6aaaaab%3A0xdd6bdf76384fe6ed!2sLyc%C3%A9e%20promotion%20II!5e0!3m2!1sfr!2sbf!4v1710244399390!5m2!1sfr!2sbf" width="350" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        </section>
    )
}
export default FocusOn