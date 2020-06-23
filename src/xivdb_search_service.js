import wretch from "wretch";
import { searchEndpoint } from "./xivdb_search_constants";

export const fetchSearchResult = (keyword) =>
  wretch(searchEndpoint)
    .query({
      string: keyword,
      limit: 5,
      indexes: "Item"
    })
    .get()
    .json();
