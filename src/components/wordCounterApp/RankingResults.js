import React from "react";
import { WordTable } from "./WordTable";
import "../../styles/wordCounter/rankingResults.css";
import { TextInfo } from "./TextInfo";

export const RankingResults = ({ result }) => {
  const { id, title, ranking, text } = result;


  return (
    <>
      {id ? (
        <div>
          <hr />
          <h3 className="rankingTitle">Ranking de Palabras</h3>
          <div className="cardDiv">
          <TextInfo title={title} id={id} text={text} />
            <h4>Resultados: </h4>
            <table border="1">
              <thead>
              <tr>
                <th>Posición</th>
                <th>Palabra</th>
                <th>Ocurrencia</th>
              </tr>
              </thead>
                 <tbody>
                  {ranking.map((i) => <WordTable element={i} key={i.word} />)}
                 </tbody>      
            </table>
          </div>
        </div>
      ) : 
       <div>
          <h3 data-testid='notFoundMessage' >Lo sentimos, el numero no coincide con ningún ID !!</h3>
       </div>
      }
    </>
  );
};
