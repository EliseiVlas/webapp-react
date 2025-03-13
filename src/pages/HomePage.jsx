import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home">
            <h1>Home page della nostra webapp dei film</h1>

            <Link to={"/movie"}>Entra nella pagina dei Film</Link>
        </div>
    );
}