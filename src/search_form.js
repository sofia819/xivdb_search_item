import React from "react";
import { Input, Button, Box } from "@material-ui/core";
import PropTypes from "prop-types";

export const SearchForm = (props) => (
  <>
    <Box m={1} display="inline">
      <Input
        placeholder="Search for an item..."
        value={props.keyword}
        onChange={props.onUpdateKeyword}
      />
    </Box>
    <Box m={1} display="inline">
      <Button variant="outlined" color="primary" onClick={props.onSearch}>
        Search
      </Button>
    </Box>
    {props.canLoadMore && (
      <Box m={1} display="inline">
        <Button variant="outlined" color="secondary" onClick={props.onLoadMore}>
          Load more
        </Button>
      </Box>
    )}
  </>
);

SearchForm.propTypes = {
  onUpdateKeyword: PropTypes.func,
  onSearch: PropTypes.func,
  canLoadMore: PropTypes.bool,
  onLoadMore: PropTypes.func,
};

SearchForm.defaultProps = {
  onUpdateKeyword: () => {},
  onSearch: () => {},
  canLoadMore: false,
  onLoadMore: () => {},
};
