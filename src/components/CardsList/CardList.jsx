import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { operations } from "redux/operations";
import { Card } from "components/Card/Card";
import css from "./CardList.module.css"

export const CardList = () => {
    const [cats, setCats] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const data = await dispatch(operations.getAllCats());
                setCats(data.payload);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCats();
    }, [dispatch])

    return (
        <section className={css.main}>
            <ul className={css.list}>
                {
                    cats.map(cat =>
                        <Card 
                            key={cat.breed}
                            data={cat}
                        />
                    )
                }
            </ul>
        </section>
    )
}