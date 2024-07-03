import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Planet = () => {
    const mock = [
        {
          "id": 1,
          "climate": "arid",
          "surface_water": "1",
          "name": "Tatooine",
          "diameter": "10465",
          "rotation_period": "23",
          "terrain": "desert",
          "gravity": "1 standard",
          "orbital_period": "304",
          "population": "200000"
        },
        {
          "id": 2,
          "climate": "temperate",
          "surface_water": "40",
          "name": "Alderaan",
          "diameter": "12500",
          "rotation_period": "24",
          "terrain": "grasslands, mountains",
          "gravity": "1 standard",
          "orbital_period": "364",
          "population": "2000000000"
        },
        {
          "id": 3,
          "climate": "temperate, tropical",
          "surface_water": "8",
          "name": "Yavin IV",
          "diameter": "10200",
          "rotation_period": "24",
          "terrain": "jungle, rainforests",
          "gravity": "1 standard",
          "orbital_period": "4818",
          "population": "1000"
        },
    ]


  const navigate = useNavigate();
  const { id } = useParams();

  const [planet, setPlanet] = useState({})
  const [characters, setCharacters] = useState([])
  const [films, setFilms] = useState([])

  useEffect(() => {
// replace with actual fetch call for all 3
  setPlanet(mock[0])
  setCharacters([{id: 1, name: 'char1'}, {id: 2, name: 'char2'}])
  setFilms([{id: 1, title: 'mov1'}, {id: 2, title: 'mov2'}])
  }, [])

 return (
    <>
    </>
 )
};