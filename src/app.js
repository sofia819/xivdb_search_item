import React, { useState } from "react";
import { fetchSearchResult } from "./xivdb_search_service";
import { ResultList } from "./result_list";
import { SearchForm } from "./search_form";

export const App = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onSearch = () => {
    if (keyword) {
      fetchSearchResult(keyword)
        .then((response) => setSearchResult(response?.Results))
        .then(() => setKeyword(""));
    }
  };

  const onUpdateKeyword = (e) => setKeyword(e.target.value);

  return (
    <>
      <SearchForm
        keyword={keyword}
        handleUpdateKeyword={onUpdateKeyword}
        handleSearch={onSearch}
      />
      <ResultList results={searchResult} />
    </>
  );
};
