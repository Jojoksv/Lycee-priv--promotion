


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
        <div class="container">
            <div className='rerevenir'>
                <h1>Règlement Intérieur du Lycée</h1>
                <div>
                    <StyledLink to='/'>Revenir à l'accueil</StyledLink>
                </div>
            </div>
        <ol class="rounded">
            <li><a href="#"><strong>Règle 1:</strong> Respecter les horaires des cours.</a></li>
                <p>Application: Arriver en classe à l'heure, ne pas sécher les cours.</p>
            <li><a href="#"><strong>Règle 2:</strong> Éteindre les téléphones portables en classe.</a></li>
                <p>Application: Les téléphones doivent être éteints pendant les cours.</p>
            <li><a href="#"><strong>Règle 3:</strong> Porter l'uniforme scolaire en tout temps.</a></li>
                <p>Application: Les élèves doivent être en uniforme tous les jours.</p>
            <li><a href="#"><strong>Règle 4:</strong> Respecter le personnel enseignant.</a></li>
                <p>Application: Parler et agir avec respect envers les enseignants.</p>
            <li><a href="#"><strong>Règle 5:</strong> Ne pas mâcher de chewing-gum en classe.</a></li>
                <p>Application: Les chewing-gums ne sont pas autorisés en classe.</p>
            <li><a href="#"><strong>Règle 6:</strong> Utiliser le langage approprié en classe.</a></li>
                <p>Application: Éviter les jurons et le langage inapproprié.</p>
            <li><a href="#"><strong>Règle 7:</strong> Ne pas tricher pendant les examens.</a></li>
                <p>Application: Aucune tricherie ou plagiat n'est toléré.</p>
            <li><a href="#"><strong>Règle 8:</strong> Respecter les installations scolaires.</a></li>
                <p>Application: Ne pas endommager les biens de l'école.</p>
            <li><a href="#"><strong>Règle 9:</strong> Participer aux activités parascolaires.</a></li>
                <p>Application: S'engager dans des clubs et activités extrascolaires.</p>
            <li><a href="#"><strong>Règle 10:</strong> Respecter les règles de sécurité.</a></li>
                <p>Application: Suivre les procédures de sécurité en cas d'urgence.</p>
            {/* <!-- Ajoutez 10 règles supplémentaires avec leurs applications ici --> */}
        </ol>
    </div>
    )
}

export default Regle