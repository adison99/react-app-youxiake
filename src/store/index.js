import {createStore,combineReducers,applyMiddleware} from "redux";
import user from "./reducers/user";
import home from "./reducers/home";
import mine from "./reducers/mine";
import inCountry from "./reducers/inCountry";
import city from "./reducers/city";
import reduxThunk from "redux-thunk";
const reducer=combineReducers({
    user,
    home,
    mine,
    inCountry,
    city
})

const store =createStore(reducer,applyMiddleware(reduxThunk));

export default store;