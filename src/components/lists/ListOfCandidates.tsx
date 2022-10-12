import React, { useContext, useCallback } from "react";
import { Link } from "react-router-dom";

import { candidate, Context } from "../../store/contexts/context";

import SearchInList from "./SearchInList";
import TableRow from "./TableRow";

const ListOfCandidates = () => {
  const { state } = useContext(Context);

  const columns = [
    "#",
    "Namn",
    "Ålder",
    "Email",
    "Adress",
    "Aktuellt rekryteringssteg",
    "action",
  ];
  const { candidates, filteredCandidates } = state.state;

  const renderTableRow = useCallback(
    (candidate: candidate, index: number) => {
      return (
        <TableRow key={candidate.id} index={index} candidate={candidate} />
      );
    },
    // eslint-disable-next-line
    [candidates, filteredCandidates]
  );

  if (!candidates?.length) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p>Inga kanditar skapade..</p>
        <Link to="/new-candidate">Skapa kandidat?</Link>
      </div>
    );
  }
  return (
    <>
      <SearchInList candidates={candidates} />
      <table className="table border-left border-right border-bottom">
        <tbody>
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col">
                {column}
              </th>
            ))}
          </tr>
          {filteredCandidates
            ? filteredCandidates.map((candidate, index) =>
                renderTableRow(candidate, index)
              )
            : candidates?.map((candidate, index) =>
                renderTableRow(candidate, index)
              )}
        </tbody>
      </table>
    </>
  );
};

export default ListOfCandidates;
