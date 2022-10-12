import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { candidate, Context } from "../../store/contexts/context";
import { REMOVE_CANDIDATE } from "../../store/reducers/reducer";

interface TableRowProps {
  candidate: candidate;
  index: number;
}

const TableRow = ({ candidate, index }: TableRowProps) => {
  const { dispatch } = useContext(Context);

  const handleRemoveCandidate = (candidateId: string) => {
    dispatch({ type: REMOVE_CANDIDATE, payload: { values: candidateId } });
  };

  return (
    <tr>
      <th scope="row">{++index}</th>
      <td>{candidate.name}</td>
      <td>{candidate.age}</td>
      <td>{candidate.email}</td>
      <td>{candidate.adress}</td>
      <td>{candidate?.activeStep ? candidate?.activeStep?.label : ""}</td>
      <td>
        <div className="d-flex">
          <Link
            title="Ända kandidat"
            className="btn btn-info btn-sm mr-1"
            to={`/candidate/${candidate.id}`}
          >
            Ändra
          </Link>
          <button
            title="Ta bort kandidat"
            className="btn btn-danger btn-sm"
            onClick={() => handleRemoveCandidate(candidate.id)}
          >
            Ta bort
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
