import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home">
            <Link to={"/movie"}><h1>Pagina dei Film</h1></Link>
        </div>
    );
}