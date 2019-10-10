import {handleActions} from "redux-actions";

const defaultState={
    data:[],
}
export default handleActions({
    userData_action:(state,action)=>{
        let newInCountryData=Object.assign({},state);
        newInCountryData.data=action.payload;
        return newInCountryData;

    }
},defaultState)