import React from "react";
import { ResultCard } from "./result_card";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

export const ResultList = (props) => (
  <Grid>
    {props.results.map((result) => (
      <ResultCard key={result.ID} {...result} />
    ))}
  </Grid>
);

ResultList.propTypes = {
  results: PropTypes.array,
};

ResultList.defaultProps = {
  results: [],
};
