/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import appReducer from '.';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';

const logMessage = store => next => action => {
   let result;
   console.groupCollapsed(`dispatching action => ${action.type}`);
   result = next(action);
   let data = store.getState();
   console.log(`
                ${JSON.stringify(data, null, 2)}
                `);
   console.groupEnd();
   return result;
};
const skipDispatch = store => next => action => {
   let result;
   if (action.payload !== undefined) {
      result = next(action);
   }
   return result;
};

const makeStore = initialState => {
   return createStore(
      appReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk, skipDispatch)),
   );
};
export default makeStore;
