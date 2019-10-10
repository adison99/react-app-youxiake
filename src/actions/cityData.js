import { createAction } from "redux-actions";
import { city_data } from "@api/cityData";

const CITYDATA_ACTION = createAction("cityData_action", data => data);

export const CITYDATA_ASYNC_ACTION = () => {
    return async (dispatch) => {
        let data = await city_data();
        dispatch(CITYDATA_ACTION(data));
    }
}
