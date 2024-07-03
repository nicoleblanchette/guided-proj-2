import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FilmButton } from "../components/FilmButton";
import { fetchHandler } from "../utils";

export const Character = () => {
  const mock = [
    {
      id: 1,
      name: "Luke Skywalker",
      gender: "male",
      skin_color: "fair",
      hair_color: "blond",
      height: "172",
      eye_color: "blue",
      mass: "77",
      homeworld: 1,
      birth_year: "19BBY",
    },
    {
      id: 2,
      name: "C-3PO",
      gender: "n/a",
      skin_color: "gold",
      hair_color: "n/a",
      height: "167",
      eye_color: "yellow",
      mass: "75",
      homeworld: 1,
      birth_year: "112BBY",
    },
    {
      id: 3,
      name: "R2-D2",
      gender: "n/a",
      skin_color: "white, blue",
      hair_color: "n/a",
      height: "96",
      eye_color: "red",
      mass: "32",
      homeworld: 8,
      birth_year: "33BBY",
    },
  ];

  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [homeworld, setHomeworld] = useState("");
  const [films, setFilms] = useState([]);
  const [errorText, setErrorText] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //replace this with a fetch later
    //setCharacter(mock.find((char) => char.id == id))
    // setHomeworld(character.homeworld || 'mars') // replace with a fetch for that planet
    //setFilms([{id: 1, title: 'movie1'}, {id: 2, title: 'movie2'}]) //replace with fetch later
    const baseUrl = "http://localhost:3000/api"; //change later
    const doFetch = async () => {
      const [char, error] = await fetchHandler(`${baseUrl}/characters/${id}`);
      if (char) setCharacter(char[0]);
      if (error) setErrorText(error.message);

      const [fetchedHomeworld, homeworldErr] = await fetchHandler(
        `${baseUrl}/planets/${character.homeworld}/`
      );
      if (fetchedHomeworld) setHomeworld(fetchedHomeworld);
      if (homeworldErr) setErrorText(homeworldErr.message);

      const [fetchedFilms, filmErr] = await fetchHandler(`${baseUrl}/characters/${id}/films`)
      if (fetchedFilms) setFilms(fetchedFilms)
      if (filmErr) setErrorText(filmErr.message)
    };
    doFetch();
  }, []);

  return (
    <>
      <h1>{character?.name}</h1>
      {errorText && <p>{errorText}</p>}
      <div>
        <div>
          <div>Height: {character?.height} cm</div>
          <div>Mass: {character?.mass} kg</div>
          <div>Born: {character?.birth_year}</div>
        </div>
        <h2>Homeworld</h2>
        <div onClick={() => navigate(`/planet/${character.homeworld}`)}>
          {homeworld}
        </div>
        <h2>Films appeared in</h2>
        {films?.map((film) => (
          <div key={film.id}>
            <FilmButton film={film} />
          </div>
        ))}
      </div>
    </>
  );
};
