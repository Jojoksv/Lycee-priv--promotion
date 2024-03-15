

import '../styles/Presentation.css'
import { Link } from 'react-router-dom'
// import Footer from './Footer'


function Presentation(){
    return(
        <div className="AllOne">
            <section className="essenciel">
                <span>Découvrez</span>
                <h1>L'Essenciel</h1>
            </section>
        <div className="ForAll">
            <div className="first">
                <div className="second">
                    <img src={require('../assets/racc3.jpg')} className="third"/>
                    <div className="third1">
                        <h5 className="fourth">
                            <Link to=''>Présentation</Link>
                        </h5>
                        <div className="sixth"></div>
                    </div>
                </div>
            </div>

            <div className="first">
                <div className="second">
                    <img src={require('../assets/racc5.jpg')} className="third"/>
                    <div className="third1">
                        <h5 className="fourth">
                            <Link to=''>Résultats</Link>
                        </h5>
                        <div className="sixth"></div>
                    </div>
                </div>
            </div>

            <div className="first">
                <div className="second">
                    <img src={require('../assets/racc6.jpg')} className="third"/>
                    <div className="third1">
                        <h5 className="fourth">
                            <Link to=''>Inscription</Link>
                        </h5>
                        <div className="sixth"></div>
                    </div>
                </div>
            </div>

            <div className="first">
                <div className="second">
                    <img src={require('../assets/racc2.jpg')} className="third"/>
                    <div className="third1">
                        <h5 className="fourth">
                            <Link to=''>Notre Blog</Link>
                        </h5>
                        <div className="sixth"></div>
                    </div>
                </div>
            </div>

            <div className="first">
                <div className="second">
                    <img src={require('../assets/racc8.jpg')} className="third"/>
                    <div className="third1">
                        <h5 className="fourth">
                            <Link to=''>Ecole Directe</Link>
                        </h5>
                        <div className="sixth"></div>
                    </div>
                </div>
            </div>

            <div className="first">
                <div className="second">
                    <img src={require('../assets/racc9.jpg')} className="third"/>
                    <div className="third1">
                        <h5 className="fourth">
                            <Link to=''>Portail du CDI</Link>
                        </h5>
                        <div className="sixth"></div>
                    </div>
                </div>
            </div>
            
        
        </div>
        {/* <div className="division"></div>
        <Footer /> */}
        </div>
    )
}
export default Presentation