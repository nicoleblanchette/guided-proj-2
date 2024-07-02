import { useNavigate } from "react-router-dom"

export const FilmButton = ({film}) => {
    const navigate = useNavigate();

    return <p onClick={() => navigate(`/film/${film.id}`)}>{film.title}</p>
}