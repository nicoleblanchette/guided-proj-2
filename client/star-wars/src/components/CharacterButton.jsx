import { useNavigate } from "react-router-dom";

export const CharacterButton = ({ character }) => {
  const navigate = useNavigate();

  return <p onClick={() => navigate(`/character/${character.id}`)}>{character.name}</p>;
};
