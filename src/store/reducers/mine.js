import {handleActions} from "redux-actions";

const defaultState={
    list:[],
}
export default handleActions({
    userData_action:(state,action)=>{
        let newMineData=Object.assign({},state);
        newMineData.list=action.payload;
        return newMineData;

    }
},defaultState)