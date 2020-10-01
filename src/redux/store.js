import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../components/Location/appReducer';

const reducers = combineReducers({
  app: appReducer
});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
