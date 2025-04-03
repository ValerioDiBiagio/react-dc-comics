
// importare il logo
import logo from "../assets/img/dc-logo.png";

// funzione Header
export default function Header() {
    return (<header>
        <img className="dclogo" src={logo} alt="logo-dc" />
        <nav>
            <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Collectibles</li>
                <li>Videos</li>
                <li>Fans</li>
                <li>News</li>
                <li>Shop</li>
            </ul>
        </nav>
    </header>);
}


