

import '../styles/Reseaux.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


function Reseaux(){
    return(

        <section className="resau">
            <div className='OnReseau'>
                <div className='reseaux'>
                    <h1>LYCEE PRIVE PROMOTION</h1>
                </div>
                <div className='svg'>
                        <div className='divS'>
                            <img src={require('../assets/atrium.png')} alt=''/>
                            <span>ENT_ATRIUM</span>
                        </div>
                        <div className='divS'>
                            <img src={require('../assets/pronote.png')} alt=''/>
                            <span>PROMOTE</span>
                        </div>
                        <div className='divS'>
                            <img src={require('../assets/turboself.png')} alt=''/>
                            <span>TURBOSELF</span>
                        </div>
                        <div className='divS'>
                            <img src={require('../assets/educonnect.png')} alt=''/>
                            <span>EDUCONNECT</span>
                        </div>
                        <div className='divS'>
                            <img src={require('../assets/parcoursup.png')} alt=''/>
                            <span>PARCOURSUP</span>
                        </div>
                        <div className='divS'>
                            <img src={require('../assets/onisep.png')} alt=''/>
                            <span>ONISEP</span>
                        </div>
                    </div>
                </div>
        </section>

    )
}

export default Reseaux