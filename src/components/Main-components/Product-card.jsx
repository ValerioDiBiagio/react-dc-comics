// funzione card
export default function ComicCard({ comic }) {
    return (

        <article className="card">
            <div className="img-card"><img src={comic.thumb} alt="{comic.series}" /></div>
            <h4 className="title-card">{comic.series}</h4>
        </article>

    )
}