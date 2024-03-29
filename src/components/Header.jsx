
import { Link } from 'react-router-dom';
import {AnnonceList} from '../datas/AnnonceList';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../styles/Header.css';
import carou1 from '../assets/promotion4.jpg'
import carou2 from '../assets/promotion5.jpg'
import carou3 from '../assets/promotion3.jpg'

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function Header() {

    return (
        <header id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner c-item">
                <div className="carousel-item active">
                    <img src={carou1} className="d-block w-100 c-imj img-carou-one" alt="Promotion 1" />
                </div>
                <div className="carousel-item c-item">
                    <img src={carou2} className="d-block w-100 c-imj img-carou-one" alt="Promotion 2" />
                </div>
                <div className="carousel-item c-item">
                    <img src={carou3} className="d-block w-100 c-imj img-carou-one" alt="Promotion 3" />
                </div>
            </div>
            <div className='princip'>
                {AnnonceList.map((annonce) =>
                    <StyledLink to={`/${annonce.linkrel}`} key={annonce.id}>
                        <div className='bander'>
                            <div className='imgContent'>
                                <img src={annonce.imgSrc} alt={annonce.alt} className='imgSrc' />
                            </div>
                            <div className='paragraphe'>
                                <p className='p1'>{annonce.pContent}</p>
                                <p className='p2'>{annonce.describe}</p>
                            </div>
                        </div>
                    </StyledLink>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className='complete'>
                <h6 className='h6'>
                    <span style={{ color: "orange", fontSize: "7rem" }}>‘‘</span> Votre Lycée Privé Promotion vous souhaite une agréable visite.
                </h6>
                <div className='divP'>
                    <div className='divP1'>
                        <h3>📞NOUS CONTACTER</h3>
                        <div className='divP2'>
                            <Link to='tel:+22676626404'>Tél: 76 62 64 04</Link><br />
                            <Link to='mailto:kossouvikoffi@gmail.com'>kossouvikoffi@gmail.com</Link>
                        </div>
                    </div>
                    <div className='divP1'>
                        <h3>📌NOUS TROUVER</h3>
                        <div className='divP2'>
                            <Link to='#plan'>BOBO-Dsso, Sarfalao</Link><br />
                            <Link to='mailto:kossouvikoffi@gmail.com'>LycéePromotion@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
