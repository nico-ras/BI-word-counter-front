import React, { useState } from "react";


export const useFetch = (url, id) => {
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

    
    const resp = await fetch(url, { method: 'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})});

    const { response } = await resp.json();
    const data = await response
    
    console.log()
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
