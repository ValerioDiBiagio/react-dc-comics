// importare la card
import ComicCard from "./Product-card"

export default function ComicsList({ comics }) {
    return (
        comics.map(comic => <ComicCard key={comic.id} comic={comic} />)
    )
}