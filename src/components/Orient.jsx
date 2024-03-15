
import '../styles/Orientation.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components';



const StyledLink = styled(Link)`
    align-itens: center;
    padding: 20px;
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
`


function Orientation(){
    return(
    <div class="thecontainer">
        <div className='EnteteContente'>
        <div className='reevenir'><StyledLink to='/'>Revenir à l'accueil</StyledLink></div>
        <h1>Conseiller d'Orientation Psychologique</h1>
        <div class="profile">
            <div class="profile-img">
                <img src={require("../assets/homme.png")} alt="Nom du conseiller" />
            </div>
            <div class="profile-info">
                <div class="profile-name">KOSSOUVI KOFFI</div>
                <div class="profile-contact">
                    <p>Numéro de téléphone : <Link href='sms:76626404?body=thank you'>+226 76 62 64 04</Link></p>
                    <p>Email : <Link href="mailto:kossouvikoffi@gmail.com">kossouvikoffi@gmail.com</Link></p>
                </div>
            </div>
        </div>
        </div>

        <h2>Méthodes d'Orientation Psychologique</h2>
        <div className='method-list'>
        <ul class="methods">
            <li>Évaluation des aptitudes et des intérêts : Aider les élèves à découvrir leurs aptitudes et leurs intérêts pour les orienter vers des carrières qui leur conviennent.</li>
            <li>Conseil en matière de choix de matières : Fournir des conseils sur les matières à choisir pour atteindre les objectifs académiques et professionnels des élèves.</li>
            <li>Orientation professionnelle : Aider les élèves à explorer différentes carrières, secteurs d'activité et options de formation postsecondaire.</li>
            <li>Préparation à l'université : Fournir des informations sur les admissions universitaires, les tests standardisés (comme le SAT ou l'ACT) et les bourses d'études.</li>
            <li>Gestion du stress et de l'anxiété : Offrir un soutien émotionnel pour aider les élèves à faire face au stress lié aux études et aux décisions futures.</li>
            <li>Développement des compétences en recherche d'emploi : Aider les élèves à rédiger des CV, à se préparer à des entretiens d'embauche et à rechercher des opportunités de stage ou d'emploi.</li>
            <li>Conseils sur les formations alternatives : Explorer des options telles que les écoles professionnelles, les programmes de formation technique ou les programmes en ligne.</li>
            <li>Planification de carrière à long terme : Travailler avec les élèves pour élaborer des plans de carrière à long terme, y compris la formation continue et le perfectionnement professionnel.</li>
            <li>Développement de compétences en leadership : Encourager la participation des élèves à des activités parascolaires et les aider à développer des compétences en leadership.</li>
            <li>Intervention en cas de problèmes scolaires ou de comportement : Fournir un soutien aux élèves qui rencontrent des difficultés académiques ou des problèmes de comportement en collaborant avec les enseignants et les parents.</li>
        </ul>
        </div>
    </div>
    )
}
export default Orientation