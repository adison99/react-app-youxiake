import {createAction} from "redux-actions"
import {inCountry_data} from "@api/inCountryData"


const INCOUNTRYDATA_ACTION=createAction("userData_action",data=>data);
export const INCOUNTRY_BANNER_ACTION=()=>{
    return async(dispatch)=>{
        let data=await inCountry_data();
        data=data.data;
        dispatch(INCOUNTRYDATA_ACTION(data));
    }
}