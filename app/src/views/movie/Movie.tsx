 import React from 'react'
import { useParams } from 'react-router';

interface MovieRouteParams {
    id:string;
}

const Movie = () => {
const { id } = useParams<MovieRouteParams>();

    return (
        <div>
            {`This is movie with id: ${id}`}
        </div>
    )
}

export default Movie;