// importare le immagini
import digitalComics from "../../assets/img/buy-comics-digital-comics.png"
import dcMerchandise from "../../assets/img/buy-comics-merchandise.png"
import subscriptions from "../../assets/img/buy-comics-subscriptions.png"
import shopLocator from "../../assets/img/buy-comics-shop-locator.png"
import dcPowerVisa from "../../assets/img/buy-dc-power-visa.svg"


// funzione Footer Menù
export default function FooterMenu() {
    return (<nav>
        <ul className="footer-menu">
            <li>
                <img className="footermenuimg" src={digitalComics} alt="digital-comics" />
                <div className="footer-nav-text">Digital Comics</div>
            </li>
            <li>
                <img className="footermenuimg" src={dcMerchandise} alt="dc-merchandise" />
                <div className="footer-nav-text">DC Merchandise</div>
            </li>
            <li>
                <img className="footermenuimg" src={subscriptions} alt="subscriptions" />
                <div className="footer-nav-text">Subscription</div>
            </li>
            <li>
                <img className="footermenuimg" src={shopLocator} alt="shop-locator" />
                <div className="footer-nav-text">Comic Shop Locator</div>
            </li>
            <li>
                <img className="footermenuimgsvg" src={dcPowerVisa} alt="dc-power-visa" />
                <div className="footer-nav-text">DC Power Visa</div>
            </li>
        </ul>
    </nav>);
}