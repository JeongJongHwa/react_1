import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    { /* https://yts.mx/api/v2/movie_details.json?movie_id=10 */ }
    const {id} = useParams();
    const [detail, setDetail] = useState([]);



    const getDetail = async() => {        
        
        const response = await fetch( `https://yts.mx/api/v2/movie_details.json?movie_id=${id}` );    
        const json = await response.json();
        console.log( json )
        setDetail( json.data.movie );
        console.log( detail );
        
    }

    useEffect( () => {
        getDetail();
    } , []);

    console.log( id );

    return <h1>Detail </h1>;
}

export default Detail;