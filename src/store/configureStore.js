import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from '@reduxjs/toolkit';
  import logger from './middleware/logger.js'
  import login from './login.js'
  import results from './searchResults'
  import curProperty from './curProperty'
  import resultsByLocation from './ResultsByLocation.js'

  //import logger from './middleware/logger.js'
  
  const middleware = [...getDefaultMiddleware(), logger];
  const reducer = combineReducers({login, results, curProperty, resultsByLocation})
  const store = configureStore({ reducer, middleware});
  
  export default store;
  