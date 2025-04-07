// importare array comics
import comics from '../data/comics'

// importare jumbotron
import Jumbotron from './Main-components/Jumbotron';

// importare la lista 
import ComicsList from './Main-components/Product-list';

// funzione Main
export default function Main() {
    return (<main> <Jumbotron />
        <div>
            <ComicsList comics={comics} />
        </div>
    </main>);
}