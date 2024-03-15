

import { Link } from 'react-router-dom';
import '../styles/Guide.css';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    align-itens: center;
    padding: 20px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`


function Guide(){
    return(
        <div className='GuideClass'>
            <h1>Guide Méthodologique pour les Élèves du Lycée</h1>
            <div className='revenir'><StyledLink to='/'>Revenir à l'accueil</StyledLink></div>
            <div className='mainContent'>
                <nav>
                    <ul>
                        <li><Link to="#section1">Section 1 - Méthode de l'étude</Link></li>
                        <li><Link to="#section2">Section 2 - Préparation aux examens</Link></li>
                        <li><Link to="#section3">Section 3 - Gestion du temps</Link></li>
                        <li><Link to="#section4">Section 4 - Prise de notes efficace</Link></li>
                        <li><Link to="#section5">Section 5 - Travailler en groupe</Link></li>
                        <li><Link to="#section6">Section 6 - Utilisation des ressources en ligne</Link></li>
                        <li><Link to="#section7">Section 7 - Équilibrer études et loisirs</Link></li>
                        <li><Link to="#section8">Section 8 - Résolution de problèmes</Link></li>
                        <li><Link to="#section9">Section 9 - Préparation mentale</Link></li>
                        <li><Link to="#section10">Section 10 - Conseils finaux</Link></li>
                        <li><Link to="#section11">Section 11 - Techniques de mémorisation</Link></li>
                        <li><Link to="#section12">Section 12 - Utilisation des bibliothèques</Link></li>
                        <li><Link to="#section13">Section 13 - Écriture de rapports et de devoirs</Link></li>
                        <li><Link to="#section14">Section 14 - Établissement d'objectifs</Link></li>
                        <li><Link to="#section15">Section 15 - Préparation aux présentations</Link></li>
                        <li><Link to="#section16">Section 16 - Apprentissage en ligne</Link></li>
                        <li><Link to="#section17">Section 17 - La résolution de conflits</Link></li>
                        <li><Link to="#section18">Section 18 - L'organisation des notes</Link></li>
                        <li><Link to="#section19">Section 19 - La gestion du stress</Link></li>
                        <li><Link to="#section20">Section 20 - L'orientation académique</Link></li>
                    </ul>
                </nav>

            <div className='scrollpart'>
                <main>
                    <section id="section1">
                        <h2>Section 1 - Méthode de l'étude</h2>
                        <p>Révisez régulièrement : Évitez la mémorisation de dernière minute en révisant régulièrement les matériaux du cours au fil du temps.</p>
                        <p>S'entraîner avec des examens pratiques : Utilisez des examens pratiques ou des questions de révision pour vous familiariser avec le format des examens.</p>
                    </section>

                    <section id="section2">
                        <h2>Section 2 - Préparation aux examens</h2>
                        <p>Révisez régulièrement : Évitez la mémorisation de dernière minute en révisant régulièrement les matériaux du cours au fil du temps.</p>
                        <p>S'entraîner avec des examens pratiques : Utilisez des examens pratiques ou des questions de révision pour vous familiariser avec le format des examens.</p>
                    </section>

                    <section id="section3">
                        <h2>Section 3 - Gestion du temps</h2>
                        <p>Priorisation des tâches : Identifiez les tâches les plus importantes et urgentes, puis attribuez-leur la priorité dans votre emploi du temps.</p>
                        <p>Techniques de gestion du temps : Apprenez des techniques telles que la méthode Pomodoro (travail intense suivi de courtes pauses) pour optimiser votre productivité.</p>
                    </section>

                    <section id="section4">
                        <h2>Section 4 - Prise de notes efficace</h2>
                        <p>Utilisez des abréviations : Développez un ensemble d'abréviations personnelles pour prendre des notes plus rapidement lors des cours.</p>
                        <p>Organisez vos notes : Utilisez une structure hiérarchique, des titres et des sous-titres pour organiser vos notes et faciliter la recherche d'informations.</p>
                    </section>

                    <section id="section5">
                        <h2>Section 5 - Travailler en groupe</h2>
                        <p>Communication ouverte : Faites en sorte que la communication au sein du groupe soit ouverte et respectueuse, afin de résoudre efficacement les problèmes.</p>
                        <p>Répartissez les tâches équitablement : Assignez des responsabilités équitables pour éviter les conflits et maximiser l'efficacité du groupe.</p>
                    </section>

                    <section id="section6">
                        <h2>Section 6 - Utilisation des ressources en ligne</h2>
                        <p>Vérifiez la crédibilité des sources : Évaluez la fiabilité des informations en ligne en vérifiant les sources et les références.</p>
                        <p>Utilisez des forums de discussion : Engagez-vous dans des discussions en ligne pertinentes pour obtenir des perspectives différentes et des conseils d'autres étudiants.</p>
                    </section>

                    <section id="section7">
                        <h2>Section 7 - Équilibrer études et loisirs</h2>
                        <p>Planifiez du temps pour les loisirs : Intégrez délibérément du temps pour les activités de loisirs dans votre emploi du temps pour éviter la surcharge de travail.</p>
                        <p>Soyez conscient de votre bien-être : Écoutez votre corps et votre esprit, et prenez des pauses quand cela est nécessaire pour éviter le burn-out</p>
                    </section>

                    <section id="section8">
                        <h2>Section 8 - Résolution de problèmes</h2>
                        <p>Décomposez les problèmes : Abordez les problèmes complexes en les divisant en sous-problèmes plus gérables.</p>
                        <p>Utilisez une approche systématique : Suivez une méthode logique pour résoudre les problèmes, en identifiant les options possibles et en évaluant leurs conséquences.</p>
                    </section>

                    <section id="section9">
                        <h2>Section 9 - Préparation mentale</h2>
                        <p>Pratiquez la pleine conscience : La méditation de pleine conscience peut vous aider à rester concentré, calme et confiant pendant les études.</p>
                        <p>Visualisation positive : Visualisez-vous réussissant dans vos études et imaginez les étapes nécessaires pour y parvenir</p>
                    </section>

                    <section id="section10">
                        <h2>Section 10 - Conseils finaux</h2>
                        <p>Soyez organisé : Maintenez un système d'organisation efficace pour vos notes, vos devoirs et vos échéances.</p>
                        <p>Apprenez de vos erreurs : Ne craignez pas l'échec, utilisez-le comme une opportunité d'apprentissage pour vous améliorer continuellement.</p>
                    </section>

                    <section id="section11">
                        <h2>Section 11 - Techniques de mémorisation</h2>
                        <p>La méthode des cartes mémoire : Créez des cartes mémoire avec des questions d'un côté et les réponses de l'autre. Utilisez-les pour réviser régulièrement les informations à mémoriser.</p>
                        <p>L'association visuelle : Associez des images ou des schémas mentaux aux concepts que vous devez mémoriser. Les images peuvent aider à renforcer la rétention.</p>
                    </section>

                    <section id="section12">
                        <h2>Section 12 - Utilisation des bibliothèques</h2>
                        <p>Utilisez les bibliothécaires comme ressource : Demandez de l'aide aux bibliothécaires pour trouver des ressources spécifiques à votre sujet de recherche. Ils sont souvent experts en recherche documentaire.</p>
                        <p>Découvrez les bases de données en ligne : Explorez les bases de données en ligne accessibles depuis la bibliothèque pour trouver des articles académiques et des informations fiables</p>
                    </section>

                    <section id="section13">
                        <h2>Section 13 - Écriture de rapports et de devoirs</h2>
                        <p>Planification structurée : Commencez par établir un plan détaillé pour votre rapport ou devoir. Identifiez les sections clés et les points à aborder avant de commencer à écrire.</p>
                        <p>Révision approfondie : Ne négligez pas la phase de révision. Relisez votre travail attentivement, vérifiez la grammaire, l'orthographe et la cohérence, et apportez les corrections nécessaires.</p>
                    </section>

                    <section id="section14">
                        <h2>Section 14 - Établissement d'objectifs</h2>
                        <p>S.M.A.R.T. : Définissez des objectifs spécifiques, mesurables, atteignables, pertinents et temporels (S.M.A.R.T.) pour avoir des directives claires pour vos études.</p>
                        <p>Suivi et ajustement : Révisez régulièrement vos objectifs. Si nécessaire, ajustez-les pour refléter vos progrès et vos aspirations actuelles</p>
                    </section>

                    <section id="section15">
                        <h2>Section 15 - Préparation aux présentations</h2>
                        <p>Pratiquez votre discours : Répétez votre présentation plusieurs fois avant le jour J pour améliorer votre confiance et votre fluidité.</p>
                        <p>Créez des diapositives efficaces : Utilisez des diapositives visuellement attrayantes, mais évitez la surcharge d'informations. Privilégiez des images et des points clés.</p>
                    </section>

                    <section id="section16">
                        <h2>Section 16 - Apprentissage en ligne</h2>
                        <p>Établissez un emploi du temps : Créez un emploi du temps pour vos cours en ligne, en incluant des plages horaires pour les devoirs et la participation aux discussions.</p>
                        <p>Restez connecté avec les enseignants : Communiquez régulièrement avec vos enseignants en ligne, posez des questions et demandez de l'aide en cas de besoin</p>
                    </section>

                    <section id="section17">
                        <h2>Section 17 - La résolution de conflits</h2>
                        <p>Écoute active : Lorsque vous êtes en conflit avec quelqu'un, écoutez attentivement son point de vue avant de répondre. Cela favorise la compréhension mutuelle.</p>
                        <p>Négociation constructive : Essayez de trouver des solutions gagnant-gagnant où les deux parties sont satisfaites. Soyez ouvert à la compromission</p>
                    </section>

                    <section id="section18">
                        <h2>Section 18 - L'organisation des notes</h2>
                        <p>Utilisation de codes et de symboles : Développez un système de codes ou de symboles pour annoter vos notes, ce qui facilite la recherche d'informations clés.</p>
                        <p>Numérisez vos notes : Pour une organisation numérique, numérisez vos notes manuscrites et stockez-les dans des dossiers informatiques pour un accès facile.</p>
                    </section>

                    <section id="section19">
                        <h2>Section 19 - La gestion du stress</h2>
                        <p>Techniques de relaxation : Apprenez des techniques de relaxation telles que la respiration profonde ou la méditation pour gérer le stress avant les examens.</p>
                        <p>Équilibre vie étudiante/vie personnelle : Assurez-vous de consacrer du temps à des activités de loisirs et sociales pour éviter le burn-out</p>
                    </section>

                    <section id="section20">
                        <h2>Section 20 - L'orientation académique</h2>
                        <p>Rencontrez un conseiller d'orientation : Planifiez une réunion avec un conseiller d'orientation de l'école pour discuter de vos objectifs académiques et professionnels.</p>
                        <p>Explorez les stages ou les expériences pratiques : Obtenez une expérience du monde réel dans des domaines qui vous intéressent pour affiner votre orientation académique.</p>
                    </section>

                </main>
                <footer>
                    <p>Copyright © 2023. Guide Méthodologique pour les Élèves du Lycée Promotion.</p>
                </footer>
            </div>
        </div>
    </div>
    )
}
export default Guide