//// Client startup through a single entry point. 

//// Global configuration object. 
config = {};

//// Provide the DataGrater single point of entry. 
export const DataGrater = (c) => {
  config = c;
}

//// Set up all routes. 
import './routes.js';
