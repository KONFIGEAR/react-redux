export default function ReduxPracticeII() {
  const redux = require("redux");

  function setYoutubeVideo(title, link, payload) {
    return {
      type: "ADD_YOUTUBE_DETAILS",
      payload: { title, link }
    };
  }
  function addFavoriteThings(thing, payload) {
    return {
      type: "ADD_FAVOURITE_THING",
      payload: thing
    };
  }
  function removeFavoriteThing(thing, payload) {
    return {
      type: "REMOVE_FAVOURITE_THING",
      payload: thing
    };
  }

  const initialState = {
    count: 0,
    favouriteThings: [],
    youtubeVideo: {
      title: "",
      link: ""
    }
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
      case "REMOVE_FAVOURITE_THING":
        const updatedArray = state.favouriteThings.filter(
          (thing) => thing !== action.payload
        );
        return {
          ...state,
          favouriteThings: [updatedArray]
        };
      case "ADD_YOUTUBE_DETAILS":
        return {
          ...state,
          youtubeVideo: action.payload
        };
      default:
        return state;
    }
  }

  const store = redux.createStore(reducer);

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(addFavoriteThings("monaim"));
  store.dispatch(addFavoriteThings("yassine"));
  store.dispatch(addFavoriteThings("sammy"));
  store.dispatch(removeFavoriteThing("yassine"));
  store.dispatch(setYoutubeVideo("OrelSan - Basique [CLIP OFFICIEL]"));
}
