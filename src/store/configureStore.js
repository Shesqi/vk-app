import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "../reducers";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import { ping } from "../enhancers/ping"; // передать в applyMiddleware() вместо logger


/*
 * первый аргумент - функция-обработчик изменений (редьюсер)
 * второй аргумент - начальное состояние
 */


/*
 * redux-logger
 * на каждый клик логгер пишет что было (prev state), что случилось (action), что стало (next state)
 */


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// export const store = createStore(rootReducer, applyMiddleware(ping), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
