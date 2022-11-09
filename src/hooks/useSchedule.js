import React, { useState } from "react";
import { dataFormater } from "../helpers/dataFormater";
import { fetchData } from "../helpers/fetchData"; 
 
export const useSchedule = (initialState = {}) => {
  const [schedule, setSchedule] = useState({ data: null });

  const handleGetRandSchedule = async () => {
    
    const url = "http://localhost:3001/schedulator";

    const response = await fetchData(url);


    setSchedule({
      ...schedule,
      data: response,
    });
  };

  const handleMySchedule = async (tasks) => {

    const url = 'http://localhost:3001/custom-tasks-schedulator';

    const data = dataFormater(tasks);
  
    const response = await fetchData( url, "POST", data);

    
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
