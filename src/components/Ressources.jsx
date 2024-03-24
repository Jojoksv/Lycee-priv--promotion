
import '../styles/Ressources.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    align-itens: center;
    padding: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
`


function Ressources(){
    return(
        <div>
            <div className='justifie-Content'>
                <h1>Ressources Scolaires Éducatives</h1>
                <div className='ressources'>
                    <StyledLink to='/'>Revenir à l'accueil</StyledLink>
                </div>
            </div>
    <ul className="resource-list">
        <li>
            <h2><Link to="https://www.example1.com">Plateforme d'apprentissage 1</Link></h2>
            <p>Description : Une plateforme en ligne offrant des cours interactifs et des devoirs pour les élèves.</p>
        </li>
        <li>
            <h2><Link to="https://www.example2.com">Devoirs en ligne</Link></h2>
            <p>Description : Accédez à des devoirs en ligne pour pratiquer et améliorer vos compétences académiques.</p>
        </li>
        <li>
            <h2><Link to="https://www.example3.com">Plateforme de formation 2</Link></h2>
            <p>Description : Une plateforme de formation en ligne avec des ressources pédagogiques variées pour tous les niveaux.</p>
        </li>
        <li>
            <h2><Link to="https://www.example4.com">Cours de mathématiques en ligne</Link></h2>
            <p>Description : Accédez à des cours de mathématiques en ligne avec des vidéos explicatives et des exercices pratiques.</p>
        </li>
        <li>
            <h2><Link to="https://www.example5.com">Bibliothèque numérique</Link></h2>
            <p>Description : Explorez une vaste collection de livres électroniques et de ressources documentaires pour vos études.</p>
        </li>
        <li>
            <h2><Link to="https://www.example6.com">Plateforme de langues étrangères</Link></h2>
            <p>Description : Apprenez une nouvelle langue avec des leçons interactives, des quiz et des sessions de pratique en ligne.</p>
        </li>
        <li>
            <h2><Link to="https://www.example7.com">Cours de sciences sociales</Link></h2>
            <p>Description : Des cours en ligne sur l'histoire, la géographie, la sociologie et d'autres disciplines des sciences sociales.</p>
        </li>
        <li>
            <h2><Link to="https://www.example8.com">Exercices de chimie</Link></h2>
            <p>Description : Pratiquez vos compétences en chimie avec une variété d'exercices et de simulations interactives.</p>
        </li>
        <li>
            <h2><Link to="https://www.example9.com">Cours d'informatique</Link></h2>
            <p>Description : Initiez-vous à la programmation et à l'informatique grâce à des cours en ligne et des projets pratiques.</p>
        </li>
        <li>
            <h2><Link to="https://www.example10.com">Plateforme de révision des examens</Link></h2>
            <p>Description : Préparez-vous aux examens avec des ressources de révision, des tests pratiques et des questionnaires en ligne.</p>
        </li>

    </ul>
</div>
    )
}
export default Ressources