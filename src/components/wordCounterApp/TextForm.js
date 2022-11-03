import React from "react";
import '../../styles/wordCounter/textForm.css'

export const TextForm = ({ textId, onInputChange, getFetch }) => {
  return (
    <div>
      <h2 className="formTitle">Ranking de palabras por texto</h2>

      <h3 className="fromSubtitle">Selecciona el ID del texto que deseas encontrar: </h3>
      <form>
        <input
          className="idInput"
          data-testid="inputId"
          type="number"
          name="textId"
          placeholder="ID"
          value={textId}
          onChange={onInputChange}
        />
        <input className="rankingBtn" type="button" value="Ver ranking" onClick={getFetch}></input>
      </form>
    </div>
  );
};
