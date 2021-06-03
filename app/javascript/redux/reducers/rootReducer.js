import { combineReducers } from 'redux';
import AuthReducer from "./authReducer"
import CategoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  category: CategoryReducer,
});

export default rootReducer;