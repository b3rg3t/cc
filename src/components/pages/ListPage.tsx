import React from "react";

import MainWrapper from "../layout/MainWrapper";
import TopBar from "../layout/TopBar";
import ListOfCandidates from "../lists/ListOfCandidates";

const ListPage = () => {
  return (
    <>
      <TopBar displayLinks />
      <MainWrapper>
        <ListOfCandidates />
      </MainWrapper>
    </>
  );
};

export default ListPage;
