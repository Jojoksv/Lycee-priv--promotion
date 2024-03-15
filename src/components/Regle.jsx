


import { Link } from 'react-router-dom';
import '../styles/Regle.css'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    align-itens: center;
    padding: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
`


function Regle(){
    return(
        <div className="container">
            <div className='rerevenir'>
                <h1>Règlement Intérieur du Lycée</h1>
                <div>
                    <StyledLink to='/'>Revenir à l'accueil</StyledLink>
                </div>
            </div>
        <ol class="rounded">
            <li><Link href="#"><strong>Règle 1:</strong> Respecter les horaires des cours.</Link></li>
                <p>Application: Arriver en classe à l'heure, ne pas sécher les cours.</p>
            <li><Link href="#"><strong>Règle 2:</strong> Éteindre les téléphones portables en classe.</Link></li>
                <p>Application: Les téléphones doivent être éteints pendant les cours.</p>
            <li><Link href="#"><strong>Règle 3:</strong> Porter l'uniforme scolaire en tout temps.</Link></li>
                <p>Application: Les élèves doivent être en uniforme tous les jours.</p>
            <li><Link href="#"><strong>Règle 4:</strong> Respecter le personnel enseignant.</Link></li>
                <p>Application: Parler et agir avec respect envers les enseignants.</p>
            <li><Link href="#"><strong>Règle 5:</strong> Ne pas mâcher de chewing-gum en classe.</Link></li>
                <p>Application: Les chewing-gums ne sont pas autorisés en classe.</p>
            <li><Link href="#"><strong>Règle 6:</strong> Utiliser le langage approprié en classe.</Link></li>
                <p>Application: Éviter les jurons et le langage inapproprié.</p>
            <li><Link href="#"><strong>Règle 7:</strong> Ne pas tricher pendant les examens.</Link></li>
                <p>Application: Aucune tricherie ou plagiat n'est toléré.</p>
            <li><Link href="#"><strong>Règle 8:</strong> Respecter les installations scolaires.</Link></li>
                <p>Application: Ne pas endommager les biens de l'école.</p>
            <li><Link href="#"><strong>Règle 9:</strong> Participer aux activités parascolaires.</Link></li>
                <p>Application: S'engager dans des clubs et activités extrascolaires.</p>
            <li><Link href="#"><strong>Règle 10:</strong> Respecter les règles de sécurité.</Link></li>
                <p>Application: Suivre les procédures de sécurité en cas d'urgence.</p>
        </ol>
    </div>
    )
}

export default Regle