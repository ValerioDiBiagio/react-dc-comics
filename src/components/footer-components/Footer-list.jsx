// importare listlink
import ListLink from "./Footer-link";

// importare logo
import FooterLogo from './Footer-logo.jsx'

// funzione Footer List
export default function FooterList(props) {
    return (<div className="footerlist">
        <div className="row">
            <div className="column">
                <ul>
                    <h3>DC Comics</h3>
                    <ListLink link={props.dcComics[0]} />
                    <ListLink link={props.dcComics[1]} />
                    <ListLink link={props.dcComics[2]} />
                    <ListLink link={props.dcComics[3]} />
                    <ListLink link={props.dcComics[4]} />
                    <ListLink link={props.dcComics[5]} />
                    <ListLink link={props.dcComics[6]} />
                    <ListLink link={props.dcComics[7]} />
                </ul>

                <ul>
                    <h3>Shop</h3>
                    <ListLink link={props.shop[0]} />
                    <ListLink link={props.shop[1]} />
                </ul>
            </div>
            <div className="column">
                <ul>
                    <h3>DC</h3>
                    <ListLink link={props.dc[0]} />
                    <ListLink link={props.dc[1]} />
                    <ListLink link={props.dc[2]} />
                    <ListLink link={props.dc[3]} />
                    <ListLink link={props.dc[4]} />
                    <ListLink link={props.dc[5]} />
                    <ListLink link={props.dc[6]} />
                    <ListLink link={props.dc[7]} />
                    <ListLink link={props.dc[8]} />
                    <ListLink link={props.dc[9]} />
                    <ListLink link={props.dc[10]} />
                </ul>
            </div>
            <div className="column">
                <ul>
                    <h3>Sites</h3>
                    <ListLink link={props.sites[0]} />
                    <ListLink link={props.sites[1]} />
                    <ListLink link={props.sites[2]} />
                    <ListLink link={props.sites[3]} />
                    <ListLink link={props.sites[4]} />
                </ul>
            </div>
            <div className="footer-logo-container">
                <FooterLogo />
            </div>

        </div>
    </div>);
}