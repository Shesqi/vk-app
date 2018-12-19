// корневой редьюсер - это и есть представление всего нашего состояния приложения (то есть, всего нашего store).

export const initialState = {
  user: 'Unknown User',
};

export function rootReducer(state = initialState) {
  return state
}
