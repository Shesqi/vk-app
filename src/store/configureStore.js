import { createStore } from 'redux';
import { rootReducer, initialState } from "../reducers";

// первый аргумент - функция-обработчик изменений (редьюсер)
// второй аргумент - начальное состояние
export const store = createStore(rootReducer, initialState);
