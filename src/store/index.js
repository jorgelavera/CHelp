import { legacy_createStore as createStore} from 'redux';
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import TipoReducer from "../reducers/Tipo.reducer";

const RootReducer = combineReducers({
  tipos: TipoReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
