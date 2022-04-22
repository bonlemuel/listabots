import {createStore, combineReducers} from 'redux';
import botsReducer from './reducers/botsReducer';

const rootReducer = combineReducers({bots: botsReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
