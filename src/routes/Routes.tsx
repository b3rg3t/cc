import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../components/pages/Home";
import CandidateForm from "../components/pages/CandidateForm";
import NotFound from "../components/pages/NotFound"

import { Provider } from "../store/contexts/context";
import { links } from "./MainLinks";

const AllRoutes = () => {
  return (
    <Provider>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={links[0].to} element={<CandidateForm />} />
          <Route path="/candidate/:id" element={<CandidateForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </>
    </Provider>
  );
};

export default AllRoutes;
