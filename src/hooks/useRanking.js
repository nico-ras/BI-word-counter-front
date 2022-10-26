import React from "react";

export const useRanking = ({ text }) => {
  console.log(text);

  const replaced = text.replaceAll(".", "").replaceAll(",", "");

  console.log(replaced);

  return {};
};
