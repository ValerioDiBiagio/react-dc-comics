// funzione card
export default function ComicCard({ comic }) {
    return (
        <article>
            <img src={comic.thumb} alt="" />
            <h4>{comic.series}</h4>
        </article>
    )
}