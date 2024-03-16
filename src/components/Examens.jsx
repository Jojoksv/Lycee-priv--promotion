
import '../styles/Examens.css';

import carou1 from '../assets/promotion4.jpg'
import carou3 from '../assets/promotion3.jpg'

const Examens = () => {

  return (
    <div className="directeur-tab">
      <div className="directeur-info">
        <img src={carou1} alt="Directeur lycee prive promotion" className="directeur1" />
        <img src={carou3} alt="Directeur lycee prive promotion" className="directeur2" />
        <h2>KOSSOUVI KOFFI</h2>
      </div>
      <div className="mot-du-directeur">
        <h6>Mot du Directeur</h6>
        <p>
          Texte du mot du directeur. Vous pouvez ajouter ici tout message ou
          information supplémentaire du directeur.
        </p>
      </div>
    </div>
  );
};

export default Examens;
