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
  Stats,
  HitsPerPage,
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
        <Stats />

        <div className="per-page">
          <span>Display</span>
          <HitsPerPage
            defaultRefinement={15}
            items={[{ value: 10 }, { value: 15 }, { value: 20 }]}
          />
          <span>movies per page</span>
        </div>

        <Panel className="panel" header="Genres">
          <RefinementList attribute="genre" operator="and" />
        </Panel>
        <Panel className="panel" header="Ratings">
          <RatingMenu attribute="rating" />
        </Panel>
        <Panel className="panel" header="Year">
          <RefinementList attribute="year" operator="or" />
        </Panel>
      </div>

      <div className="right-panel">
        <SearchBox autoFocus={true} />

        <div className="hits">
          <Hits hitComponent={Hit} />
        </div>

        <Pagination showLast={true} />
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
        {createStar(hit.rating).map((rating, idx) => {
          if (rating === 1) {
            return (
              <FontAwesomeIcon key={idx} icon={faStar} className="filled" />
            );
          } else {
            return <FontAwesomeIcon key={idx} icon={faStar} />;
          }
        })}
      </div>

      <div className="genre">
        <span className="subtitles">Genre:</span>{" "}
        {hit.genre.map((genre, idx) => {
          return (
            <span key={idx} className="badge">
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
