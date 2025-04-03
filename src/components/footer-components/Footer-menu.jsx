import digitalComics from "../../assets/img/buy-comics-digital-comics.png"
import dcMerchandise from "../../assets/img/buy-comics-merchandise.png"
import subscriptions from "../../assets/img/buy-comics-subscriptions.png"
import shopLocator from "../../assets/img/buy-comics-shop-locator.png"
import dcPowerVisa from "../../assets/img/buy-dc-power-visa.svg"


// funzione Footer Menù
export default function FooterMenu() {
    return (<nav className="footer-menu">
        <ul>
            <li>
                <img src={digitalComics} alt="digital-comics" />
                Digital Comics
            </li>
            <li>
                <img src={dcMerchandise} alt="dc-merchandise" />
                DC Merchandise</li>
            <li>
                <img src={subscriptions} alt="subscriptions" />
                Subscription</li>
            <li>
                <img src={shopLocator} alt="shop-locator" />
                Comic Shop Locator</li>
            <li>
                <img src={dcPowerVisa} alt="dc-power-visa" />
                DC Power Visa</li>
        </ul>
    </nav>);
}