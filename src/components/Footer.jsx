// importare le varie funzioni dei footer
import FooterList from "./footer-components/Footer-list";
import FooterMenu from "./footer-components/Footer-menu";
import FooterSocials from "./footer-components/Footer-socials"



// funzione Footer
export default function Footer() {
    return (<footer>
        <FooterMenu />
        <FooterList />
        <FooterSocials />
    </footer>);
}
