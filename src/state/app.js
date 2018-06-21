const initialState = {
  isDrawerOpen: false,
  spinnerShowing: false
};

const moment = require('moment');
const TOOGLE_DRAWER = 'TOGGLE_DRAWER';
const SHOW_SPINNER = 'SHOW_SPINNER';
const HIDE_SPINNER = 'HIDE_SPINNER';
const SET_SHOWS = 'SET_SHOWS';
const SET_SONGS = 'SET_SONGS';

export const toggleDrawer = open => ({ type: TOOGLE_DRAWER, payload: open });
export const showSpinner = () => ({ type: SHOW_SPINNER, payload: true });
export const hideSpinner = () => ({ type: HIDE_SPINNER, payload: false });
export const setShows = (shows) => ({ type: SET_SHOWS, payload: shows });
export const getShows = (date) => {
  var yesterday = new Date(moment().add('days',-1)).toISOString()
  return fetch(`https://www.googleapis.com/calendar/v3/calendars/0sa8bl67tpn9ibp6fe1ah3gclf7murdt@import.calendar.google.com/events?fields=items(summary,id,location,start)&key=AIzaSyDN1OE5ZvCa-v7AwzfK5bALAYXMXuOrNdU&singleEvents=true&orderBy=startTime&timeMin=${yesterday}`)
  .then(response => response.json())
  .then(response => {
    hideSpinner();
     return response;
   })

}
export const setSongs = (songs) => ({ type: SET_SONGS, payload: songs });
export const getSongs = (song) => {
  return fetch('https://montagekc-b4268.firebaseio.com/.json')
  .then(response => response.json())
  .then(response => {
    hideSpinner();
     return Object.values(response);
   })
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOOGLE_DRAWER:
      return { ...state, isDrawerOpen: payload };
    case SHOW_SPINNER:
      return { ...state, spinnerShowing: true };
    case HIDE_SPINNER:
      return { ...state, spinnerShowing: false };
    case SET_SHOWS:
      return { ...state, shows:payload}
    case SET_SONGS:
      return { ...state, songs:payload}
    default:
      return state;
  }
};
