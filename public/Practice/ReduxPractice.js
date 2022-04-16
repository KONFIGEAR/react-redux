const redux = require("redux");

function changeCount(payload) {
  return {
    type: "CHANGE_COUNT",
    payload
  };
}
function addFavoriteThings(thing, payload) {
  return {
    type: "ADD_FAVOURITE_THING",
    payload: thing
  };
}

const initialState = {
  count: 0,
  favouriteThings: []
};

function reducer(state = initialState, action) {
  //return new state based on incoming action
  switch (action.type) {
    case "CHANGE_COUNT":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "ADD_FAVOURITE_THING":
      return {
        ...state,
        favouriteThings: [...state.favouriteThings, action.payload]
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
