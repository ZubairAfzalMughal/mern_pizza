import React from "react";

const LoadingSpin = () => {
  return (
    <div className="d-flex justify-content-center">
      <span
        className="spinner-border spinner-border-lg"
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  );
};

export default LoadingSpin;
