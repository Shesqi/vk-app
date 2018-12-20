/*
 * action - это простой объект, который возвращается функцией его создающей (action creator).
 */

export const SET_YEAR = 'SET_YEAR';
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';

export function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year,
  }
}
