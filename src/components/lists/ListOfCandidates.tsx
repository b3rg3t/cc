import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/contexts/context";

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
  const { candidates } = state;

  const handleRemoveCandidate = (candidateId: string) => {
    console.log(candidateId);
  };

  return (
    <table className="table border-left border-right border-bottom">
      <tbody>
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col">
              {column}
            </th>
          ))}
        </tr>
        {candidates?.map((candidate: any, index) => (
          <tr key={candidate.id}>
            <th scope="row">{++index}</th>
            {Object.keys(candidate).map((can, i) => {
              if (i === 0) {
                return <React.Fragment key={i}></React.Fragment>;
              }
              return (
                <td key={i}>
                  {candidate?.[can]?.label
                    ? candidate?.[can]?.label
                    : candidate?.[can]}
                </td>
              );
            })}
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
        ))}
      </tbody>
    </table>
  );
};

export default ListOfCandidates;
