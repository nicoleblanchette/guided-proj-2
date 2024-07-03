import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CharacterButton } from "../components/CharacterButton";

export const Film = () => {
  const mock = [
    {
      id: 1,
      producer: "Gary Kurtz, Rick McCallum",
      title: "A New Hope",
      episode_id: 4,
      director: "George Lucas",
      release_date: "1977-05-25",
      opening_crawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    },
    {
      id: 2,
      producer: "Gary Kurtz, Rick McCallum",
      title: "The Empire Strikes Back",
      episode_id: 5,
      director: "Irvin Kershner",
      release_date: "1980-05-17",
      opening_crawl:
        "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
    },
  ];

  const navigate = useNavigate();
  const { id } = useParams();

  const [film, setFilm] = useState({});
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [errorText, setErrorText] = useState([]);

  useEffect(() => {
    //replace with fetch calls
    setFilm(mock[1]);
    setCharacters([
      { id: 1, name: "char1" },
      { id: 2, name: "char2" },
    ]);
    setPlanets([
      { id: 1, name: "planet1" },
      { id: 2, name: "planet2" },
    ]);
  }, []);

  return (
    <>
      <h1>{film?.title}</h1>
      {errorText && <p>{errorText}</p>}
      <div>
        <div>{film?.opening_crawl}</div>
        <div>Director: {film?.director}</div>
        <div>Release Date: {film?.release_date}</div>
      </div>
      <h2>Characters</h2>
        {characters?.map((char) => <div key={char.id}><CharacterButton character={char} /></div>)}
      <h2>Planets</h2>
        {planets?.map((planet) => <div key={planet.id} onClick={() => navigate(`/planet/${planet.id}`)}>{planet.name}</div>)}
    </>
  );
};
