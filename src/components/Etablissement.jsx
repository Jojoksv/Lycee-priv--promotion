
import '../styles/Etablissement.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    align-itens: center;
    padding: 20px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`



function Etablissement(){
    return(
<div className='body'>
    <header>
        <h1>Filières au Lycée La Promotion</h1>
        <div className='erevenir'><StyledLink to='/'>Revenir à l'accueil</StyledLink></div>
    </header>
    
    <nav>
        <ul>
            <li><a href="#sixieme">6ème à 3ème</a></li>
            <li><a href="#seconde">Seconde</a></li>
            <li><a href="#premiere">Première</a></li>
            <li><a href="#terminale">Terminale</a></li>
        </ul>
    </nav>
    
    <section id="sixieme">
        <h2>6ème à 3ème</h2>
        <p>Les classes de 6ème à 3ème offrent un programme d'enseignement général pour développer des bases solides dans toutes les matières.</p>
        <p>Enjeux :</p>
        <ul>
            <li>Acquisition des compétences fondamentales en mathématiques, sciences, français, etc.</li>
            <li>Développement des compétences de base en communication et en résolution de problèmes.</li>
        </ul>
        <p>Débouchés :</p>
        <p>Les débouchés varient, mais ces classes préparent généralement les élèves aux programmes de la 2nd.</p>
    </section>
    
    <section id="seconde">
        <h2>Seconde</h2>
        <p>La classe de 2nde est un moment crucial pour choisir une orientation académique.</p>
        <p>Enjeux :</p>
        <ul>
            <li>Détermination de la filière générale (Littéraire, Économique et Sociale, Scientifique) ou technologique (STMG, ST2S, STI2D, STL, etc.).</li>
            <li>Acquisition de compétences spécifiques en fonction de la filière choisie.</li>
        </ul>
        <p>Débouchés :</p>
        <p>Les débouchés dépendent de la filière choisie, allant de l'université à la formation professionnelle.</p>
    </section>
    
    <section id="premiere">
        <h2>Première</h2>
        <p>La classe de Première marque le début d'une spécialisation académique plus poussée.</p>
        <p>Enjeux :</p>
        <ul>
            <li>Poursuite d'études dans la filière choisie (ex. : S, ES, L, STMG, ST2S, etc.).</li>
            <li>Préparation aux examens du baccalauréat.</li>
        </ul>
        <p>Débouchés :</p>
        <p>Le baccalauréat ouvre la voie à l'enseignement supérieur, à l'entrée dans la vie professionnelle ou à la formation technique.</p>
    </section>
    
    <section id="terminale">
        <h2>Terminale</h2>
        <p>La classe de Terminale est la dernière année avant le baccalauréat.</p>
        <p>Enjeux :</p>
        <ul>
            <li>Préparation intense pour les examens du baccalauréat.</li>
            <li>Finalisation du choix de carrière post-bac.</li>
        </ul>
        <p>Débouchés :</p>
        <p>Obtention du baccalauréat, puis poursuite d'études universitaires ou entrée sur le marché du travail.</p>
    </section>
    
    <footer>
        <p>Contactez-nous : <a href="mailto:koffikossouvi@gmail.com">[promotion@gmail.com]</a> | <a href="trel:+22676626404">[76626404]</a></p>
    </footer>
</div>
    )
}
export default Etablissement