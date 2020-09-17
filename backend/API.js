const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  "C9UPNJREQC",
  `${process.env.REACT_APP_ADMIN_API_KEY}`
);

const index = client.initIndex("movies");
const moviesJSON = require("../public/movies/records.json");

index
  .saveObjects(moviesJSON, {
    autoGenerateObjectIDIfNotExist: true,
  })
  .then(({ objectsIDs }) => {
    console.log(objectsIDs);
  });

index.setSettings({
  searchableAttributes: [
    "title",
    "alternative_titles",
    "year",
    "actors",
    "genre",
  ],
});

const indexTwo = client.initIndex("actors");
const actors = require("../public/movies/actors.json");

indexTwo
  .saveObjects(actors, {
    autoGenerateObjectIDIfNotExist: true,
  })
  .then(({ objectsIDs }) => {
    console.log(objectsIDs);
  });
