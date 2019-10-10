import {connect} from "react-redux"
import {CITYDATA_ASYNC_ACTION} from "@actions/cityData.js";

const mapStateToProps=(state)=>({
    city:state.city.city
})

const mapDispatchToProps=(dispatch)=>({
    handlerAsyncCityData(){
        dispatch(CITYDATA_ASYNC_ACTION())
    },
    handlerBack(){
        this.props.history.goBack()
    }
})

export default connect(mapStateToProps,mapDispatchToProps)