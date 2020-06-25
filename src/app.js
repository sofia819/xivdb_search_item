import React, { useState } from "react";
import {
  fetchSearchResult,
  fetchMoreSearchResult,
} from "./xivdb_search_service";
import { ResultList } from "./result_list";
import { SearchForm } from "./search_form";

export const App = () => {
  const [currentPage, setCurrentPage] = useState(-1);
  const [maxPage, setMaxPage] = useState(-1);
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (keyword) {
      fetchSearchResult(keyword).then((response) => {
        setSearchResults(response?.Results);
        setCurrentPage(1);
        setMaxPage(response.Pagination.PageTotal);
      });
    }
  };

  const handleLoadMore = () => {
    const newPageNumber = currentPage + 1;
    fetchMoreSearchResult(keyword, newPageNumber)
      .then((response) => {
        setSearchResults((searchResults) => [
          ...searchResults,
          ...response?.Results,
        ]);
      })
      .then(() => setCurrentPage(newPageNumber));
  };

  const handleUpdateKeyword = (e) => setKeyword(e.target.value);

  return (
    <>
      <SearchForm
        keyword={keyword}
        onUpdateKeyword={handleUpdateKeyword}
        onSearch={handleSearch}
        canLoadMore={currentPage < maxPage}
        onLoadMore={handleLoadMore}
      />
      <ResultList
        results={searchResults}
      />
    </>
  );
};
