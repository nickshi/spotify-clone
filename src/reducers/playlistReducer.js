
const initialState = {
    playlists:[],
    fetchPlaylistPending: false,
    fetchPlaylistError: false,
}
export const playlistReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PLAYLISTS_PENDING":
            return {
                ...state,
                fetchPlaylistPending: true,
                
            };

        case "FETCH_PLAYLISTS_SUCCESS":
            return {
                ...state,
                playlists: action.playlists,
                fetchPlaylistError: false,
                fetchPlaylistPending: false,
                
            };

        case "ADD_PLAYLIST_ITEM":
            return {
                ...state,
                playlists: [
                    ...state.playlists,
                    action.playlist
                ]
            };

        case "FETCH_PLAYLISTS_ERROR":
            return {
                ...state,
                fetchPlaylistError: true,
                fetchPlaylistPending: false,
                
            };

        default:
            return state;
    }
}

export default playlistReducer;