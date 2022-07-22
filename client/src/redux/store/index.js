import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk)),
);


// CONECTARSE SIN composeWithDevTools (importar compose de redux)
// const composeEnhancers =
//    (typeof window !== 'undefined' &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//    compose;

// export const store = createStore(
//    rootReducer,
//    composeEnhancers(applyMiddleware(thunk)),
// );
