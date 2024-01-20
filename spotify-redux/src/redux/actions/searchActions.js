// redux/actions/searchActions.js
export const searchTracks = (query) => (dispatch) => {
  console.log("ricerca:", query);
  dispatch({ type: "SEARCH_START", payload: query });

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("dati ricevuti:", data);
      dispatch({ type: "SEARCH_SUCCESS", payload: data.data });
    })
    .catch((error) => {
      console.error("errore:", error);
      dispatch({ type: "SEARCH_FAIL", payload: error.message });
    });
};

export const clearSearchResults = () => {
  console.log("Risultati della ricerca cancellati");
  return {
    type: "CLEAR_SEARCH_RESULTS",
  };
};

export const selectResult = (result) => {
  return {
    type: "SELECT_RESULT",
    payload: result,
  };
};

export const setSelectedTrackId = (trackId) => {
  return {
    type: "SET_SELECTED_TRACK_ID",
    payload: trackId,
  };
};
