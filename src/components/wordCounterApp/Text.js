import React from "react";

export const Text = ({ text }) => {
  return (
    <div>
      <h4>Texto analizado: </h4>
      <p data-testid='test-text'>{text}</p>
    </div>
  );
};
