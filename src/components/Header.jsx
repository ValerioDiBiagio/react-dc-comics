// importare componente logo
import Logo from "./Header-components/Header-logo";

// imnportare componente nav
import HeaderNav from "./Header-components/Header-nav";

// creazione dell'array di link
const arrayNav = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop'];

export default function Header() {
    return (<header>
        <nav>
            <Logo />
            <HeaderNav linkNav={arrayNav} />
        </nav>
    </header>);
}


