// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant
import PereNoel from '../asset/pere_noel.svg';
import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <>
    <img src={PereNoel} alt="Père Noël" />
    <div className="space-y-4">
      // Champs de saisie pour ajouter un participant
      <div className="flex space-x-2">
        <input
          type="text"
          className="input flex-grow"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="button" onClick={addParticipant}>
          Ajouter
        </button>
      </div>
      // Liste des participants ajoutés
      <ul className="space-y-2">
        {participants.map((name, index) => (
          <li key={index} className="list-item">
            {name}
            <div className="space-x-2">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
