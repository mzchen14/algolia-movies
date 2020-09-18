import React from "react";
import algoliasearch from "algoliasearch";
import "instantsearch.css/themes/algolia.css";
import { createStar } from "./helperFuncs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  RefinementList,
  ClearRefinements,
  Pagination,
  RatingMenu,
  Panel,
} from "react-instantsearch-dom";
import "./App.css";

const searchClient = algoliasearch(
  "C9UPNJREQC",
  `${process.env.REACT_APP_API_KEY}`
);
const App = () => (
  <div className="app">
    <header>
      <span>Algolia</span> Movies
    </header>
    <InstantSearch indexName="movies" searchClient={searchClient}>
      <div className="left-panel">
        <ClearRefinements />
        <Panel className="panel" header="Genres">
          <RefinementList attribute="genre" />
        </Panel>
        <Panel className="panel" header="Ratings">
          <RatingMenu
            attribute="rating"
            translations={{
              ratingLabel: "& Up",
            }}
          />
        </Panel>
      </div>

      <div className="right-panel">
        <SearchBox autoFocus={true} />
        <div className="hits">
          <Hits hitComponent={Hit} />
        </div>
        <Pagination />
      </div>
    </InstantSearch>
  </div>
);

const Hit = ({ hit }) => {
  return (
    <div className="hit" key={hit.objectID}>
      <object className="poster" data={hit.image} type="image/png">
        <img
          src={process.env.PUBLIC_URL + "/default.jpg"}
          alt="poster"
          width="150"
        />
      </object>
      <div className="title">
        <Highlight hit={hit} attribute="title" />
        <span className="year"> {hit.year}</span>
      </div>
      <div>
        <span className="subtitles">Rating: </span>
        {createStar(hit.rating).map((rating) => {
          if (rating === 1) {
            return <FontAwesomeIcon icon={faStar} className="filled" />;
          } else {
            return <FontAwesomeIcon icon={faStar} />;
          }
        })}
      </div>
      <div className="genre">
        <span className="subtitles">Genre:</span>{" "}
        {hit.genre.map((genre) => {
          return (
            <span key={hit.ObjectId} className="badge">
              {genre}
            </span>
          );
        })}
      </div>
      <div className="actors">
        <span className="subtitles">Actors: </span>
        <Highlight hit={hit} attribute="actors" />
      </div>
    </div>
  );
};
export default App;
