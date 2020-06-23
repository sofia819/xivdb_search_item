import React from "react";
import { Input, Button } from "@material-ui/core";
import PropTypes from "prop-types";

export const SearchForm = (props) => (
  <>
    <Input
      placeholder="Search for an item..."
      value={props.keyword}
      onChange={props.handleUpdateKeyword}
    />
    <Button color="primary" onClick={props.handleSearch}>
      Search
    </Button>
  </>
);

SearchForm.propTypes = {
  handleUpdateKeyword: PropTypes.func,
  handleSearch: PropTypes.func,
};

SearchForm.defaultProps = {
  handleUpdateKeyword: () => {},
  handleSearch: () => {},
};
