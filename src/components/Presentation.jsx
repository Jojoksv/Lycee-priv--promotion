

import '../styles/Presentation.css'
import { Link } from 'react-router-dom'
import racc3 from '../assets/racc3.jpg'
import racc5 from '../assets/racc5.jpg'
import racc6 from '../assets/racc6.jpg'
import racc2 from '../assets/racc2.jpg'
import racc8 from '../assets/racc8.jpg'
import racc9 from '../assets/racc9.jpg'


function Presentation(){
    return(
        <div className="AllOne">
            <section className="essenciel">
                <span>Découvrez</span>
                <h1>L&apos;Essenciel</h1>
            </section>
        <div className="ForAll">
            <div className="first">
                <div className="second">
                    <img src={racc3} className="third"/>
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
                    <img src={racc5} className="third"/>
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
                    <img src={racc6} className="third"/>
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
                    <img src={racc2} className="third"/>
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
                    <img src={racc8} className="third"/>
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
                    <img src={racc9} className="third"/>
                    <div className="third1">
                        <h5 className="fourth">
                            <Link to=''>Portail du CDI</Link>
                        </h5>
                        <div className="sixth"></div>
                    </div>
                </div>
            </div>
            
        
        </div></div>
    )
}
export default Presentation