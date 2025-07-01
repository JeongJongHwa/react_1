import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {

    const [ loading, setLoading ] = useState(true);
        const [ movie, setMovie ] = useState([]);
        const getMoives = async() => {
            const response = await fetch(
                `https://yts.mx/api/v2/list_movies.json`
            );
            const json = await response.json();
            setMovie( json.data.movies );
            setLoading( false );
        }

    useEffect( () => {
        getMoives();
    }, [] )

    return (
        <div>
        { movie.map( (moive) => <Movie key={moive.id} id={moive.id} medium_cover_image={moive.medium_cover_image} title_long = {moive.title_long} genres = {moive.genres} /> ) } 
        </div>
    );

}

export default Home;