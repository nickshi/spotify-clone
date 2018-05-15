const defaultState = {
    fetchPlaylistSongsError : false,
    fetchPlaylistSongsPending: false,
    songs:[],
};

export const songsReducer = (state = defaultState, action) => {

	switch (action.type) {

	
	case "FETCH_PLAYLIST_SONGS_PENDING":
		return {
			...state,
			fetchPlaylistSongsPending: true
		};

	case "FETCH_PLAYLIST_SONGS_SUCCESS":
		return {
			...state,
			songs: action.songs,
			fetchPlaylistSongsError: false,
			fetchPlaylistSongsPending: false
		};

	case "FETCH_PLAYLIST_SONGS_ERROR":
		return {
			...state,
			fetchPlaylistSongsError: true,
			fetchPlaylistSongsPending: false
		};

	default:
		return state;
	}

};

export default songsReducer;
