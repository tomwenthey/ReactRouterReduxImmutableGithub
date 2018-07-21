import { combineReducers } from 'redux-immutable';

import github from './data/githubReducers';
import ui from './ui/uiReducers';

const rootReducer = combineReducers({ github, ui });

export default rootReducer;
