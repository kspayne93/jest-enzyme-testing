import { createStore } from 'redux';
import rootReducer from './ducks/reducers';

export default createStore(rootReducer);