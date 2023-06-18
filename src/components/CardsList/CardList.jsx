import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "components/Card/Card";
import css from "./CardList.module.css"

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://catfact.ninja/',
});

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': JSON.stringify(process.env.REACT_APP_API_KEY),
    },
    contentType: 'application/json',
};

export const CardList = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetchCats();
    }, [])

    const fetchCats = async () => {
        try {
            const { data } = await instance.get('/breeds', options);;
            console.log(data.data);
            setCats(data.data);
        } catch (error) {
            console.error(error);
        }
    }

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