import { connect } from "react-redux";
import { HOMEDATALIST_ASYNC_ACTION } from "@actions/homeData.js";

const mapStateToProps = (state) => ({
    tags: state.home.tags,
    page: state.home.page,
    products:state.home.products,
    className:state.home.className,
})
const mapDispatchToProps = (dispatch) => ({
    async handleAsyncHomeDataList(tag_id, class_region_id, page,type,ind) {
        let data =await dispatch(HOMEDATALIST_ASYNC_ACTION(tag_id, class_region_id, page,type,ind))
        return data
    }
})

export default connect(mapStateToProps, mapDispatchToProps);