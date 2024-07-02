import { CharactersList } from "./CharactersList"

export const Home = () => {
    return (
        <>
        <h1>Star Wars Guide</h1>
        <div>
            <label htmlFor="searchbar">Search</label>
            <input id="searchbar" placeholder="Search... " />
            <button>Search</button>
        </div>
        <CharactersList />
        </>
    )
}