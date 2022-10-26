import React, { useEffect, useState } from "react";
import { getRanking } from "../helpers/getRanking";
import { useRanking } from "./useRanking";

export const useFetch = (url) => {
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

    //TODO por implementar fetch
    // const resp = await fetch(url);
    // const data = await resp.json();

    //DUMMY--------
    const data = {
      id: "1",
      title: "La llamada de la selva",
      page: 1,
      total_pages: 3,
      text: "Buck no leía los periódicos, de lo contrario habría sabido que una amenaza se cernía no sólo sobre él, sino sobre cualquier otro perro de la costa, entre Puget Sound y San Diego, con fuerte musculatura y largo y abrigado pelaje. Porque a tientas, en la oscuridad del Ártico, unos hombres habían encontrado un metal amarillo y, debido a que las compañías navieras y de transporte propagaron el hallazgo, miles de otros hombres se lanzaban hacia el norte. Estos hombres necesitaban perros, y los querían recios, con una fuerte musculatura que los hiciera resistentes al trabajo duro y un pelo abundante que los protegiera del frío.\nBuck vivía en una extensa propiedad del soleado valle de Santa Clara, conocida como la finca del juez Miller. La casa estaba apartada de la carretera, semioculta entre los árboles a través de los cuales se podía vislumbrar la ancha y fresca galería que la rodeaba por los cuatro costados. Se llegaba a ella por senderos de grava que serpenteaban entre amplios espacios cubiertos de césped y bajo las ramas entrelazadas de altos álamos. En la parte trasera las cosas adquirían proporciones todavía más vastas que en la delantera.",
    };
    
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  state.data != null &&
    setState({
      result: {
        id: state.data.id,
        title: state.data.title,
        ranking: getRanking(state.data)
      },
    });


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    getFetch,
    result: state.result,
  };
};
