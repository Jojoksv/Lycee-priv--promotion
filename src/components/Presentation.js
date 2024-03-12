

import '../styles/Presentation.css'
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
                            <a href=''>Présentation</a>
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
                            <a href=''>Résultats</a>
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
                            <a href=''>Inscription</a>
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
                            <a href=''>Notre Blog</a>
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
                            <a href=''>Ecole Directe</a>
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
                            <a href=''>Portail du CDI</a>
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