import css from "./Card.module.css"

export const Card = ({ data }) => {
    const { breed, country, origin, pattern, coat } = data;
    return(
        <div className={css.card}>
            <h2 className={css.title}>{breed}</h2>
            <p>Country: {country}</p>
            <p>Origin: {origin}</p>
            <p>Pattern: {pattern}</p>
            <p>Coat: {coat}</p>
        </div>
    )
}