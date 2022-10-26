import React from "react";
import { WordTable } from "./WordTable";
import '../../styles/wordCounter/rankingResults.css'

export const RankingResults = ({ result }) => {
  const { id, title, ranking } = result;

  ranking && console.log(ranking.map((i) => i.position));
  return (
    <div>
      <hr />
      <h3 className="rankingTitle">Ranking de Palabras</h3>
      <div className="cardDiv">
        <h4>Titulo: </h4>
        <p>{title}</p>
        <p>ID: {id}</p>
        <h4>Resultados</h4>
        <table border="1">
          <tr>
            <th>Posición</th>
            <th>Palabra</th>
            <th>Ocurrencia</th>
            <th>Texto completo</th>
            <th>Editar</th>
          </tr>
          <tbody>
            {ranking && ranking.map((i) => <WordTable element={i} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
