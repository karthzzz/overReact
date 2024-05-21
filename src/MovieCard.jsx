import React from "react";
const MovieCard = ({ moviex }) => {
    return (
        <div className="movie">
            <div>
                <p>{moviex.Year}</p>
            </div>

            <div>
                <img src={moviex.Poster !== 'N/A' ? moviex.Poster : 'https://via.placeholder.com/400'} alt={moviex.Title} />
            </div>

            <div>
                <span>
                    {moviex.Type}
                    <h3>{moviex.Title}</h3>
                </span>
            </div>
        </div>
    );
}

export default MovieCard;