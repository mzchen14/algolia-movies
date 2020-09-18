# Algolia - Movies

> Solutions Engineering Assignment
>
> Technologies Used: Javascript, React, Algolia

Deployed At: [https://mzchen14.github.io/algolia-movies/](https://mzchen14.github.io/algolia-movies/)

## Outline:

### Backend/Pushing Data

On the backend of my application, after creating an Algolia account, I used the given APP ID and Admin API key to import the movies public ‘records’ dataset provided in the dataset repo. For good measure, I also used environment variables in order to hide my API keys. For this step, I used the API client in order to set the settings for the search attributes. For movie records, I set the searchable attributes to: title, alternative titles, year, actors, and genre. I also created a second index just to get a better understanding of using the Algolia dashboard so for this second “actors” dataset I mainly used the dashboard exclusively to customize relevance and attributes. While I pushed two datasets at this step, the rest of my application will be built upon the movie records dataset.

### Frontend

#### Widgets

Having worked mainly with React, I decided to utilize the React-InstantSearch Library on the frontend. Here, I played around with many widgets, adding and removing ones that I found would provide suitable user experience given this particular dataset. The widgets I ended up using were: Hits, HitsPerPage, Highlight, RefinementList, ClearRefinement, Pagination, RatingMenu, Panels, and Stats.

I ended up using the refinement lists for the following attributes: genre, rating, and year.

For genre, I set the boolean operator to “and”. From a user perspective, users tend to select multiple genres in order to narrow down their search rather than expand so I felt that the “and” operator would be the most intuitive in this case. The opposite was true for the “year” facet. I set the “year” refinement list’s operator to “or” since movies are associated with their year of release. Highlight was also applied to match either title or actor as they would be the most searched query types.

#### Display

For the view, based on the attributes of the dataset, I decided to display a poster for the movie, title, year, rating, genres, and list of actors. Because some of the poster images were returning 404 from the server, I decided to set a default “No Image Available” image for the posters that were unavailable. This was to ensure a more coherent overall display. I also used a simple helper function to help me create the star ratings based on the numerical rating from the data for a more appealing visual. Genres were edited to be bubble badges to separate them from the list of actors underneath.

Keeping most of the facets/filters and clickable features to the left panel and the search/hit results on the right felt like the most clean and intuitive layout for this simple application.

Lastly, I also applied some basic css media queries to help with the responsive design so the application is usable on mobile. (Though I did not get to create an open-close sidebar for the filters/facets so it is not as functional as the desktop view.)

### Intentions

My intention for this assignment was to use the opportunity to explore and become acquainted with Algolia’s product. I wanted to experience the ease of use and development firsthand just like a regular customer of the product. From this assignment, I wanted to use a basic dataset and use Algolia in order to create an intuitive basic search application by taking advantage of the plethora of customization options provided by Algolia’s library. While building out this application, one of my main objectives was to explore the different widgets, the built in props and take a glimpse into how one would be able to manipulate the product to suit specific needs.

### Feedback/Takeaways

It was a really fun and eye opening experience using Algolia to implement search. Search is such a fundamental integration for almost every website online and one that people take for granted. Yet, in the bigger scope of things, search is very complex and Algolia took much of the guesswork out of the process. While using Algolia widgets, I couldn’t help but think about how complicated and how much longer it would have taken me to build out each of the widgets from scratch, and despite the extra time and effort, it still would not have been as efficient of a tool as those provided by Algolia. Overall, I found the documentation easy to follow; the code snippets and examples were very useful while building my own application. Although I've only scraped the surface of what Algolia is capable of, I really enjoyed this assignment. Thank you for the opportunity!
