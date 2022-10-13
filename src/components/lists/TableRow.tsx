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

  const listStyle = {
    number: { width: "50px" },
    name: { width: "200px" },
    age: { width: "50px" },
    email: { width: "250px" },
    adress: { width: "300px" },
    activeStep: { width: "230px" },
    action: { width: "150px" },
  };

  return (
    <tr>
      <th scope="row" style={listStyle.number}>
        {++index}
      </th>
      <td style={listStyle.name}>{candidate.name}</td>
      <td style={listStyle.age}>{candidate.age}</td>
      <td style={listStyle.email}>{candidate.email}</td>
      <td style={listStyle.adress}>{candidate.adress}</td>
      <td className="text-truncate" style={listStyle.activeStep}>
        {candidate?.activeStep ? candidate?.activeStep?.label : ""}
      </td>
      <td style={listStyle.action}>
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
