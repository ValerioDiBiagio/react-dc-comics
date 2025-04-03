// importare le immagini
import facebook from "../../assets/img/footer-facebook.png"
import twitter from "../../assets/img/footer-twitter.png"
import youtube from "../../assets/img/footer-youtube.png"
import pinterest from "../../assets/img/footer-pinterest.png"
import position from "../../assets/img/footer-periscope.png"

// funzione Footer Socials
export default function FooterSocials() {
    return (<div className="footerbtn">
        <button>Sign Up Now!</button>
        <div className="socials">
            <span>Follow Us</span>
            <img src={facebook} alt="facebook logo" />
            <img src={twitter} alt="twitter-logo" />
            <img src={youtube} alt="youtube logo" />
            <img src={pinterest} alt="pinterest logo" />
            <img src={position} alt="position logo" />
        </div>
    </div>);
}