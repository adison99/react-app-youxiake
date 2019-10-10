import { createAction } from "redux-actions";
import { main_nav, main_list } from "@api/homeData";

const HOMEDATA_ACTION = createAction("homeData_action", data => data);
const HOMEDATALIST_ACTION = createAction("homeDataList_action",(data,type,ind) =>({data,type,ind}))

export const HOMEDATA_ASYNC_ACTION = () => {
    return async (dispatch) => {
        let data = await main_nav();
        data = data.data;
        dispatch(HOMEDATA_ACTION(data));
    }
}
export const HOMEDATALIST_ASYNC_ACTION = (tag_id, class_region_id, page,type,ind=0) => {
    return async (dispatch) => {
        let data = await main_list(tag_id, class_region_id, page,type);
        data = data.data; 
        dispatch(HOMEDATALIST_ACTION(data,type,ind));
        if (data) return true;
    }
}
