import { useState, useEffect } from "react"
import { CharacterButton } from "../components/CharacterButton"

export const CharactersList = () => {
//should return a search bar and a list of characters
//right now just render all characters

const mock = [
    {
      "id": 1,
      "name": "Luke Skywalker",
      "gender": "male",
      "skin_color": "fair",
      "hair_color": "blond",
      "height": "172",
      "eye_color": "blue",
      "mass": "77",
      "homeworld": 1,
      "birth_year": "19BBY"
    },
    {
      "id": 2,
      "name": "C-3PO",
      "gender": "n/a",
      "skin_color": "gold",
      "hair_color": "n/a",
      "height": "167",
      "eye_color": "yellow",
      "mass": "75",
      "homeworld": 1,
      "birth_year": "112BBY"
    },
    {
      "id": 3,
      "name": "R2-D2",
      "gender": "n/a",
      "skin_color": "white, blue",
      "hair_color": "n/a",
      "height": "96",
      "eye_color": "red",
      "mass": "32",
      "homeworld": 8,
      "birth_year": "33BBY"
    },
]

const [characters, setCharacters] = useState([])
const [errorText, setErrorText] = useState([])

useEffect(() => {
//insert fetch logic here
//fetch all characters
//set characters to the fetch results
setCharacters(mock)
}, [])


//return a list of Character elements
return (
    <div id="charactersList">
    {errorText && <p>{errorText}</p> /*displays error messages only if they exist */}
    {characters?.map((character) => <div key={character.id}><CharacterButton character={character}/></div>)}
    </div>
)
}