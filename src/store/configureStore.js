import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from "../reducers";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

/*
 * первый аргумент - функция-обработчик изменений (редьюсер)
 * второй аргумент - начальное состояние
 */


/*
 * redux-logger
 * на каждый клик логгер пишет что было (prev state), что случилось (action), что стало (next state)
 */

// TODO: need to fix this
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);
