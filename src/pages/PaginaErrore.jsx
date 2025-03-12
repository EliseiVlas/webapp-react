import { Link } from "react-router-dom";

export default function PaginaErrore() {
    return (
        <>
        <main className="home1">
        <h1>Pagina non trovata</h1>
            <p>
                404 la pagine che cerchi non è stata trovata
            </p>
            <Link to={"/movie"}>Torna alla pagina Home</Link>
        </main>
            
        </>
    );
}