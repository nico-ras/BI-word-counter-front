import React, { useState } from "react";
import { fetchData } from "../helpers/fetchData";



export const useFetch = (id) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    result: {},
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const url = 'http://localhost:3001/word-count-ranking';
    const idObj = {id};
    const data = await fetchData( url, 'POST', idObj);
    
    
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    getFetch,
  };
};
