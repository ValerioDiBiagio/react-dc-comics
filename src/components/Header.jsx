
// importare il logo
import logo from "../assets/img/dc-logo.png";

// funzione Header
export default function Header() {
    return (<header>
        <img className="dclogo" src={logo} alt="logo-dc" />
        <nav>
            <ul>
                <li className="hovereffect">Characters</li>
                <li className="hovereffect">Comics</li>
                <li className="hovereffect">Movies</li>
                <li className="hovereffect">TV</li>
                <li className="hovereffect">Games</li>
                <li className="hovereffect">Collectibles</li>
                <li className="hovereffect">Videos</li>
                <li className="hovereffect">Fans</li>
                <li className="hovereffect">News</li>
                <li className="hovereffect">Shop</li>
            </ul>
        </nav>
    </header>);
}


