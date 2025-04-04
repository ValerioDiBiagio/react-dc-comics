// importare funzione per i link della nav
import ArrayNav from "./Nav-props";

// funzione nav
export default function HeaderNav() {

    const arrayNav = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop'];

    return (
        <ul>
            <ArrayNav title={arrayNav[0]} />
            <ArrayNav title={arrayNav[1]} />
            <ArrayNav title={arrayNav[2]} />
            <ArrayNav title={arrayNav[3]} />
            <ArrayNav title={arrayNav[4]} />
            <ArrayNav title={arrayNav[5]} />
            <ArrayNav title={arrayNav[6]} />
            <ArrayNav title={arrayNav[7]} />
            <ArrayNav title={arrayNav[8]} />
            <ArrayNav title={arrayNav[9]} />
        </ul>
    )
}