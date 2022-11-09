import React, { useState } from "react";
import { RankingResults } from "./RankingResults";
import { TextForm } from "./TextForm";
import { useFetch } from "../../hooks/useFetch";
import '../../styles/wordCounter/wordCounterApp.css';

export const WordCounterApp = () => {
  const [formState, setFormState] = useState({ textId: "" });

  const { textId } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { data, isLoading, hasError, getFetch, } = useFetch( textId );


  return (
    <div className="app">
      <h1 className="wcaTitle">WordCounterApp</h1>

      <TextForm
        textId={textId}
        onInputChange={onInputChange}
        getFetch={getFetch}
      />
      { data && <RankingResults result={data} />}
      
    </div>
  );
};
