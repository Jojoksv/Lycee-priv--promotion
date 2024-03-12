

import { Link } from 'react-router-dom'
import '../styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {AnnonceList} from '../datas/AnnonceList'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
`

function Header(){

    const carou1 = require('../assets/promotion4.jpg')
    const carou2 = require('../assets/promotion5.jpg')
    const carou3 = require('../assets/promotion3.jpg')

    return(
        <header id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner c-item">
                <div class="carousel-item active">
                    <img src={carou1} class="d-block w-100 c-imj img-carou-one" alt="..."/>
                </div>
                <div class="carousel-item c-item">
                    <img src={carou2} class="d-block w-100 c-imj img-carou-one" alt="..."/>
                </div>
                <div class="carousel-item c-item">
                    <img src={carou3} class="d-block w-100 c-imj img-carou-one" alt="..."/>
                </div>
            </div>
            <div className='princip'>
                {AnnonceList.map((list) =>
                <StyledLink to={`/${list.linkrel}`}>
                    <div className='bander'>
                        <div className='imgContent'>
                            <img src={list.imgSrc} alt='' className='imgSrc' />
                        </div>
                        <div className='paragraphe'>
                            <p className='p1'>{list.pContent}</p>
                            <p className='p2'>{list.describe}</p>
                        </div>
                    </div>
                </StyledLink>
                )}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div className='complete'>
                <h6 className='h6'>
                <font color="orange" size="7">‘‘</font>  Votre Lycée Privé Promotion vous souhaite une agréable visite.
                </h6>
                <div className='divP'>
                    <div className='divP1'>
                        <h3>📞NOUS CONTACTER</h3>
                        <div className='divP2'>
                            <a href='tel:+22676626404'>Tél: 76 62 64 04</a><br/>
                            <a href='mailto:kossouvikoffi@gmail.com'>kossouvikoffi@gmail.com</a>
                        </div>
                    </div>
                    <div className='divP1'>
                        <h3>📌NOUS TROUVER</h3>
                        <div className='divP2'>
                            <a href='#plan'>BOBO-Dsso, Sarfalao</a><br/>
                            <a href='mailto:kossouvikoffi@gmail.com'>LycéePromotion@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header