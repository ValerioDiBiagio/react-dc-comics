
// importare componente logo
import Logo from "./Header-components/Header-logo";

// imnportare componente nav
import HeaderNav from "./Header-components/Header-nav";

// funzione Header
export default function Header() {
    return (<header>
        <nav>
            <Logo />
            <HeaderNav />
        </nav>
    </header>);
}


