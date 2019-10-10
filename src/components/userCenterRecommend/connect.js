import {connect} from "react-redux";
import {USERDATA_ASYNC_ACTION} from "@actions/userData"

const mapStateToProps=(state)=>({
    list:state.mine.list,
})

const mapDispatchToProps=(dispatch)=>({
    handleAsyncUserData(){
        dispatch(USERDATA_ASYNC_ACTION())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)


