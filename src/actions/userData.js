import {createAction} from "redux-actions"
import {user_data} from "@api/userData"


const USERDATA_ACTION=createAction("userData_action",data=>data);
export const USERDATA_ASYNC_ACTION=()=>{
    return async(dispatch)=>{
        let data=await user_data();
        data=data.data;
        dispatch(USERDATA_ACTION(data));
    }
}

