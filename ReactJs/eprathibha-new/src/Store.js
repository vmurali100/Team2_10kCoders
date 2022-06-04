import { createStore, legacy_createStore } from "redux";
import rootReducer from "./redux/reducer";
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
const persistConfig={
  key:'persist-key',
  storage,
  blacklist:["logindata","verifydata","registerdata","finishexamdata"],
  whitelist:["examlist","startexamdata"]
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
const store=legacy_createStore(persistedReducer,applyMiddleware(thunk))
const persistor=persistStore(store)

export default store;
export {persistor}