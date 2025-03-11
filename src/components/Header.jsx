import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to={"/movie"}><h1>Movie WebApp</h1></Link>
        </header>
    );
}