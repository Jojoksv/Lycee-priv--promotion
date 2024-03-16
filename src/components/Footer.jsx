
import '../styles/Footer.css'
import racc2 from '../assets/racc2.jpg'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
    import '@fortawesome/fontawesome-svg-core/styles.css'
    config.autoAddCss = false

    library.add(fas)



library.add(fab, faCheckSquare, faCoffee)



function Footer(){
    return(
      <div className="division">
        <div className='footer'>
          <div className="row">
            <div className="col">
              <img src={racc2} className="loogo" alt="logo"/>
              <p>jh vjcu bsvhkicbqkUZFcsQVfuzevhb  vevibs vesbvuirsz vberbrs vdbiuidkrs
                nkseb vf sebiurfiub tesbe rebuivebf sosz uotr zbfuoekue gjuibg&apos;e
                ui eirbfki etg
              </p>
            </div>
            <div className="col">
              <h3>Office <div className='underLine'><span className='spaan'></span></div> </h3>
              <p>ITPL Road</p>
              <p>Whitefield, Bangalore</p>
              <p>KARANATAKA, Pin 5652514, India</p>
              <p className="email-id">jkossouvi@gmail.com</p>
              <h4>+226 - 56146917</h4>
            </div>
            <div className="col">
              <h3>Links <div className='underLine'><span></span></div> </h3>
              <ul>
                <li><Link to='#'>Home</Link></li>
                <li><Link to='#'>Services</Link></li>
                <li><Link to='#'>About Us</Link></li>
                <li><Link to='#'>Features</Link></li>
                <li><Link to='#'>Contacts</Link></li>
              </ul>
            </div>
            <div className="col">
              <h3>Newsletter <div className='underLine'><span></span></div> </h3>
              <form>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                <input type='email' placeholder='ENter your email id' required/>
                <button type='submit'><FontAwesomeIcon icon="fa-solid fa-arrow-right" className='fas' /></button>
              </form>
              <div className='social-icons'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" className='fab'/>
                <FontAwesomeIcon icon="fa-brands fa-twitter" className='fab'/>
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" className='fab'/>
                <FontAwesomeIcon icon="fa-brands fa-pinterest" className='fab'/>
                <FontAwesomeIcon icon="fa-brands fa-github" className='fab'/>
                <FontAwesomeIcon icon="fa-brands fa-instagram" className='fab'/>
              </div>
            </div>
          </div>
          <hr/>
          <p className='copyright'>Joseph Kossouvi  2024 - All Rights Reserved</p>
        </div>
        </div>
    )
}
export default Footer