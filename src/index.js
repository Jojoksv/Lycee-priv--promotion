import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Guide from './components/Guide';
import Orientation from './components/Orient';
import ErrorPage from './components/Error';
import Regle from './components/Regle';
import Ressources from './components/Ressources';
import Calendrier from './components/Calendrier';
import Etablissement from './components/Etablissement';
import Orientater from './components/Orientater';
import Examens from './components/Examens';
import { AnnonceList } from './datas/AnnonceList';
import { NavBarList } from './datas/NavbarList';



const mesVariable ={Guide, Orientation, Regle, Ressources, Calendrier, Etablissement, Orientater, Examens}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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

        {NavBarList.map((list) => {
          const ComponentName = mesVariable[list.link];
          return(
          <Route key={list.link} path={`/${list.link}`} element={<ComponentName />} />);
        })}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);