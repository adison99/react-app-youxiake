import {connect} from "react-redux";
import { HOMEDATALIST_ASYNC_ACTION } from "@actions/homeData.js";

const mapStateToProps=(state)=>({
    tags:state.home.tags,

})
const mapDispatchToProps=(dispatch)=>({
    async handleAsyncHomeDataList(class_region_id) {
        let data =await dispatch(HOMEDATALIST_ASYNC_ACTION(0,class_region_id,1))
        return data
    }

})

export default connect(mapStateToProps,mapDispatchToProps);