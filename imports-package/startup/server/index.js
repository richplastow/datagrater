//// Server startup through a single entry point. 

//// Global configuration object. 
config = {};

//// Provide the DataGrater single point of entry. 
export const DataGrater = (c) => {
  config = c;
}

//// Define all methods and publications. 
import './register-api.js';
