import { handleActions } from "redux-actions";

const defaultState = {
    city:{}
}
export default handleActions({
    cityData_action: (state, action) => {
        let newCityData = Object.assign({}, state);
        newCityData.city = action.payload;
        return newCityData;

    },
   
}, defaultState)