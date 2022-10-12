import React from "react";

import { useParams } from "react-router-dom";

import MainForm from "../candidateForm/MainForm";
import MainWrapper from "../layout/MainWrapper";
import TopBar from "../layout/TopBar";

const CandidateForm = () => {
  let params = useParams();

  return (
    <>
      <TopBar />
      <MainWrapper>
        <MainForm id={params?.id} />
      </MainWrapper>
    </>
  );
};

export default CandidateForm;
