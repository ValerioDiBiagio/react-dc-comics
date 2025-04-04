// importare funzione per i link della nav
import ArrayNav from "./Nav-props";

// funzione nav
export default function HeaderNav(props) {
    return (
        <ul>
            <ArrayNav title={props.linkNav[0]} />
            <ArrayNav title={props.linkNav[1]} />
            <ArrayNav title={props.linkNav[2]} />
            <ArrayNav title={props.linkNav[3]} />
            <ArrayNav title={props.linkNav[4]} />
            <ArrayNav title={props.linkNav[5]} />
            <ArrayNav title={props.linkNav[6]} />
            <ArrayNav title={props.linkNav[7]} />
            <ArrayNav title={props.linkNav[8]} />
            <ArrayNav title={props.linkNav[9]} />
        </ul>
    )
}