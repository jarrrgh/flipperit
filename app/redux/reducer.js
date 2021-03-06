import {Map} from 'immutable';
import {combineReducers} from 'redux-loop';
import AppStateReducer from '../reducers/AppState';
import MapStateReducer from '../reducers/MapState';
import PinballStateReducer from '../reducers/PinballState';
//import NavigationStateReducer from '../modules/navigation/NavigationState';

const reducers = {
  app: AppStateReducer,
  map: MapStateReducer,
  pinball: PinballStateReducer,

  // @NOTE: By convention, the navigation state must live in a subtree called
  //`navigationState`
  //navigationState: NavigationStateReducer
};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  return namespacedReducer(state || void 0, action);
}
