// importare le varie funzioni dei footer
import FooterList from "./footer-components/Footer-list";
import FooterMenu from "./footer-components/Footer-menu";
import FooterSocials from "./footer-components/Footer-socials"

// creazione array di link footer
const dcComics = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'];
const shop = ['Shop DC', 'Shop DC Collectibles'];
const dc = ['Terms Of Use', 'Privacy Policy (New)', 'Ad Choices', 'Advertising Jobs Subscriptions', 'Talent Workshops', 'CPSP Certificates', 'Ratings', 'Shop Help', 'Contact US'];
const sites = ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']




// funzione Footer
export default function Footer() {
    return (<footer>
        <FooterMenu />
        <FooterList dcComics={dcComics} shop={shop} dc={dc} sites={sites} />
        <FooterSocials />
    </footer>);
}
