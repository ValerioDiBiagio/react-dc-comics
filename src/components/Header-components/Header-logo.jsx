// importare il logo
import logo from "../../assets/img/dc-logo.png";

// funzione logo
export default function Logo() {
    return (
        <div><img className="dclogo" src={logo} alt="logo-dc" /></div>
    )
}