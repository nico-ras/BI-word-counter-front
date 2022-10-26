import React, { useState } from "react";
import "../../styles/wordCounter/textInfo.css";
import { Text } from "./Text";

export const TextInfo = ({ title, id, text }) => {
  const [textInfo, setTextInfo] = useState({ totalText: false });

  const onShowText = () => {
    setTextInfo({
      totalText: !textInfo.totalText,
    });
  };

  return (
    <>
      <div className="textInfoDiv">
        <h4>Titulo: </h4>
        <p>{title}</p>
        <h4 className="infoId">ID: </h4>
        <p>{id}</p>
        {textInfo.totalText && (
          <Text text={text} />
        )}
      </div>
      <button onClick={() => onShowText()}>{textInfo.totalText ?  'Ocultar texto' : 'Ver texto completo' }</button>
    </>
  );
};
