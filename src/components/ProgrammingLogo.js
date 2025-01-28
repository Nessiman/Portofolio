import React from "react";

const ProgrammingLogo = ({ name, logo }) => {
  return (
    <div className="text-center">
      <img src={logo} alt={name} width="50" height="50" className="mx-2"/>
      <p>{name}</p>
    </div>
  );
};

export default ProgrammingLogo;
