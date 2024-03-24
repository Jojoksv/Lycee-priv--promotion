import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App.jsx';
import Guide from './components/Guide.jsx';
import Orientation from './components/Orient.jsx';
import ErrorPage from './components/Error.jsx';
import Regle from './components/Regle.jsx';
import Ressources from './components/Ressources.jsx';
import Calendrier from './components/Calendrier.jsx';
import Etablissement from './components/Etablissement.jsx';
import Orientater from './components/Orientater.jsx';
import Examens from './components/Examens.jsx';
import Scolarite from './components/Scolarite.jsx'
import { AnnonceList } from './datas/AnnonceList.js';



const mesVariable ={Guide, Orientation, Regle, Ressources, Calendrier, Etablissement, Orientater, Examens, Scolarite}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
            {AnnonceList.map((list) => {
        const ComponentName = mesVariable[list.linkrel];
        return (
            <Route key={list.linkrel} path={`/${list.linkrel}`} element={<ComponentName />} />
        );
    })}
    
    <Route path="/Orientater" element={<Orientater />} />
    <Route path="/Scolarite" element={<Scolarite />} />
    <Route path="/Etablissement" element={<Etablissement />} />
    <Route path="/Examens" element={<Examens />} />
    <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
