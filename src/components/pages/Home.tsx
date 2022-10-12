import React from "react";

import MainWrapper from "../layout/MainWrapper";
import TopBar from "../layout/TopBar";
import ListOfCandidates from "../lists/ListOfCandidates";

const Home = () => {
  return (
    <>
      <TopBar displayLinks />
      <MainWrapper>
        <ListOfCandidates />
      </MainWrapper>
    </>
  );
};

export default Home;
