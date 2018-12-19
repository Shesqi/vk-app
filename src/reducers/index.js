// корневой редьюсер - это и есть представление всего нашего состояния приложения (то есть, всего нашего store).

import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
});
