import React from "react";
import { Box, Typography } from "@material-ui/core";
import { apiEndpoint } from "./xivdb_search_constants";
import PropTypes from "prop-types";

export const ResultCard = (props) => (
  <Box>
    <Typography>{props.Name}</Typography>
    <a href={`${apiEndpoint}${props.Url}`}>
      <img alt={props.Name} src={`${apiEndpoint}${props.Icon}`} />
    </a>
  </Box>
);

ResultCard.propTypes = {
  ID: PropTypes.number,
  Icon: PropTypes.string,
  Name: PropTypes.string,
  Url: PropTypes.string,
  UrlType: PropTypes.string,
  _Score: PropTypes.number,
};
