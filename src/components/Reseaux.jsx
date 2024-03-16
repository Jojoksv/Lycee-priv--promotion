

import '../styles/Reseaux.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import atrium from '../assets/atrium.png'
import pronote from '../assets/pronote.png'
import turboself from '../assets/turboself.png'
import educonnect from '../assets/educonnect.png'
import parcoursup from '../assets/parcoursup.png'
import onisep from '../assets/onisep.png'


function Reseaux(){
    return(

        <section className="resau">
            <div className='OnReseau'>
                <div className='reseaux'>
                    <h1>LYCEE PRIVE PROMOTION</h1>
                </div>
                <div className='svg'>
                        <div className='divS'>
                            <img src={atrium} alt=''/>
                            <span>ENT_ATRIUM</span>
                        </div>
                        <div className='divS'>
                            <img src={pronote} alt=''/>
                            <span>PROMOTE</span>
                        </div>
                        <div className='divS'>
                            <img src={turboself} alt=''/>
                            <span>TURBOSELF</span>
                        </div>
                        <div className='divS'>
                            <img src={educonnect} alt=''/>
                            <span>EDUCONNECT</span>
                        </div>
                        <div className='divS'>
                            <img src={parcoursup} alt=''/>
                            <span>PARCOURSUP</span>
                        </div>
                        <div className='divS'>
                            <img src={onisep} alt=''/>
                            <span>ONISEP</span>
                        </div>
                    </div>
                </div>
        </section>

    )
}

export default Reseaux