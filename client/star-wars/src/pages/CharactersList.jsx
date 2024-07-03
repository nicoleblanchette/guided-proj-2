import { useState, useEffect } from "react";
import { CharacterButton } from "../components/CharacterButton";
import { fetchHandler } from "../utils";

export const CharactersList = () => {
  //should return a search bar and a list of characters
  //right now just render all characters

  const [characters, setCharacters] = useState([]);
  const [errorText, setErrorText] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/characters/"; //change later
    const doFetch = async () => {
      const [chars, error] = await fetchHandler(url);
      if (chars) setCharacters(chars);
      if (error) setErrorText(error.message);
    };
    doFetch();
  }, []);

  //return a list of Character elements
  return (
    <div id="charactersList">
      {
        errorText && (
          <p>{errorText}</p>
        ) /*displays error messages only if they exist */
      }
      {characters?.map((character) => (
        <div key={character.id}>
          <CharacterButton character={character} />
        </div>
      ))}
    </div>
  );
};
