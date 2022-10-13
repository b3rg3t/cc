import React, { useState, useContext, useEffect } from "react";
import { candidate, Context } from "../../store/contexts/context";
import {
  REMOVE_FILTERED_CANDIDATE_LIST,
  SET_FILTERED_CANDIDATE_LIST,
} from "../../store/reducers/reducer";

interface SearchInListProps {
  candidates: candidate[] | null;
}

const SearchInList = ({ candidates }: SearchInListProps) => {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch } = useContext(Context);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (candidates && searchValue) {
      dispatch({
        type: SET_FILTERED_CANDIDATE_LIST,
        payload: { values: { searchText: searchValue } },
      });
    } else {
      dispatch({
        type: REMOVE_FILTERED_CANDIDATE_LIST,
      });
    }
  };

  const handleClearSearchValue = () => {
    setSearchValue("");
    dispatch({
      type: REMOVE_FILTERED_CANDIDATE_LIST,
    });
  };

  useEffect(() => {
    if (searchValue === "") {
      handleClearSearchValue();
    }
    // eslint-disable-next-line
  }, [searchValue, dispatch]);

  return (
    <form
      autoComplete="off"
      className="d-flex mb-2"
      onSubmit={handleSearchSubmit}
    >
      <div className="search-input mr-2">
        <input
          id="searchInput"
          name="searchInput"
          className="form-control"
          placeholder="Sök i lista.."
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          aria-label="Sök i lista"
        />
      </div>
      <button
        title="Sök i lista"
        type="submit"
        className="btn btn-primary mr-1"
      >
        Sök
      </button>
      <button
        title="Ta bort sökning"
        type="button"
        className="btn btn-secondary"
        disabled={!searchValue ? true : false}
        onClick={() => handleClearSearchValue()}
      >
        Rensa
      </button>
    </form>
  );
};

export default SearchInList;
