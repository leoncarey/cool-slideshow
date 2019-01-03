import React from 'react';
import {combineReducers} from 'redux';

import playlist from './playlist';
import bible from './bible';
import warns from './warns';
import projectorScreen from './projectorScreen';

const rootReducer = combineReducers({
	playlist: playlist,
	bible: bible,
	warns: warns,
	projectorScreen: projectorScreen
});

export default rootReducer;