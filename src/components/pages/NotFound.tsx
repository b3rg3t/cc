import React from "react";
import { Link } from "react-router-dom";
import MainWrapper from "../layout/MainWrapper";

const NotFound = () => {
  return (
    <MainWrapper>
      <div className="d-flex flex-column bg-light border p-4 rounded align-items-center">
        <p>404 sidan kunde ej hittas.</p>
        <Link to={"/"}>Till startsida</Link>
      </div>
    </MainWrapper>
  );
};

export default NotFound;
