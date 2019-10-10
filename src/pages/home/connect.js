import {connect} from "react-redux";
import {HOMEDATA_ASYNC_ACTION} from "@actions/homeData.js";

const  mapStateToProps=(state)=>({
 })
const mapDispatchToProps=(dispatch)=>({
    handleAsyncHomeData(){
        dispatch(HOMEDATA_ASYNC_ACTION())
    }
})
export default connect(mapStateToProps,mapDispatchToProps);