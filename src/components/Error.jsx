
import { Link } from 'react-router-dom';
import '../styles/ErrorPage.css'

function ErrorPage() {
    return (
        <div>
            <h2>Une erreur est survenue</h2>
            <p>Il semble qu'une erreur soit survenue. Veuillez réessayer ultérieurement.</p>
            <Link to="/" className="btn btn-primary">Retourner à la page principale</Link>
        </div>
    );
}

export default ErrorPage;
