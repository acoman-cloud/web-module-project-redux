import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';

const rootReducer = combineReducers({
	selected: movieReducer,
	favorite: favoriteReducer,
});

export default rootReducer;