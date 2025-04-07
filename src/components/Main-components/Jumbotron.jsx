// importare immagine jumbotron
import jumbotronImg from '../../assets/img/jumbotron.jpg'

export default function Jumbotron() {
    return (
        <div>
            <img className='jumbotron' src={jumbotronImg} alt="immagine jumbotron" />
        </div>
    )

}