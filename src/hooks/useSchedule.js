import React, { useState } from "react";
import { postFetch } from "../helpers/postFetch"; 
 
export const useSchedule = (initialState = {}) => {
  const [schedule, setSchedule] = useState({ data: null });

  const handleGetRandSchedule = async () => {
    const url = "http://localhost:3001/schedulator";

    const resp = await fetch(url);
    const { response } = await resp.json();

    setSchedule({
      ...schedule,
      data: response,
    });
  };

  const handleMySchedule = async (tasks) => {
    const url = 'http://localhost:3001/custom-tasks-schedulator';

    const response = await postFetch(url, tasks);
    
    setSchedule({
      ...schedule,
      data: response,
    });


  }

  return {
    schedule,
    handleGetRandSchedule,
    handleMySchedule,
  };
};
