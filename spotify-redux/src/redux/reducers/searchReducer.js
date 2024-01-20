// redux/reducers/searchReducer.js
const initialState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: null,
      };
    case "SEARCH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CLEAR_SEARCH_RESULTS":
      console.log("CLEAR_SEARCH_RESULTS action dispatched");
      return {
        ...state,
        results: [],
      };
    case "SELECT_RESULT":
      return {
        ...state,
        selectedResult: action.payload,
      };
    case "SET_SELECTED_TRACK_ID":
      return {
        ...state,
        selectedTrackId: action.payload,
      };
    default:
      return state;
  }
}
