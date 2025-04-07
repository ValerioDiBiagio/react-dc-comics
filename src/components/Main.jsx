// importare array comics
import comics from '../data/comics'

// importare jumbotron
import Jumbotron from './Main-components/Jumbotron';

// importare la lista 
import ComicsList from './Main-components/Product-list';

// funzione Main
export default function Main() {
    return (
        <main>
            <div><Jumbotron /></div>
            <div className='label'>Current Series</div>

            <div className=' comics-raw'>
                <ComicsList comics={comics} />
            </div>

            <div className='bottone'><button className='main-btn'>Load More</button></div>
        </main>);
}