/*
 * ES6
 */
// export const ping = store => next => action => {
//   console.log(
//     `Тип события: ${action.type}, дополнительные данные события: ${
//       action.payload
//       }`
//   );
//   return next(action)
// };

/*
 * ES5
 */
export const ping = function ping(store) {
  debugger
  return function (next) {
    return function (action) {
      console.log(
        `Тип события: ${action.type}, дополнительные данные события: ${
        action.payload
        }`
      );
      return next(action);
    };
  };
};
