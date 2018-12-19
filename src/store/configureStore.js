import { createStore } from 'redux';
import { rootReducer } from "../reducers";

// первый аргумент - функция-обработчик изменений (редьюсер)
// второй аргумент - начальное состояние
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
