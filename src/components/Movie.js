import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie( { id , medium_cover_image , title_long , genres } ){

    return (
        <div>
            <div key={id}>
            <img src={medium_cover_image} alt="empty" />
            <li ><h2><Link to={`/movie/${id}`}>{title_long}</Link></h2>
                <ul>{genres.map( (gener, index) => <li key={index}>{gener}</li> )}</ul>
            </li>
            </div>
            
        </div>        
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title_long : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;