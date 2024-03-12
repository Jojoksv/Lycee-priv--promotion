import React from 'react';
import '../styles/Examens.css'; // Assurez-vous de créer ce fichier CSS

const Examens = () => {

    const carou1 = require('../assets/promotion4.jpg')
    const carou2 = require('../assets/promotion3.jpg')

  return (
    <div className="directeur-tab">
      <div className="directeur-info">
        <img src={carou1} alt="Image du Directeur" className="directeur-image" />
        <img src={carou2} alt="Image du Directeur" className="directeur-image2" />
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
