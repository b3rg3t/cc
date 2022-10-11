import React from "react";
import { Link } from "react-router-dom";

import { links } from "../../routes/MainLinks";

interface TopBarProps {
  displayLinks?: boolean;
}

const TopBar = ({ displayLinks }: TopBarProps) => {
  return (
    <header className="border-bottom bg-light p-2 d-flex justify-content-between">
      <h5 className="my-1">Rekryteringskandidater</h5>
      {displayLinks && (
        <ul className="list-unstyled mb-0">
          {links.map(({ to, label }, index) => (
            <li key={index}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default TopBar;
