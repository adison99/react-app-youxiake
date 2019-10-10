import {connect} from "react-redux"
import {INCOUNTRY_BANNER_ACTION} from "@actions/inCountryData"

const mapStateToProps=(state)=>({
    banner:state.inCountry.slide_show,
})

const mapDispatchToProps=(dispatch)=>({
    getInCountryBanner(){
        dispatch(INCOUNTRY_BANNER_ACTION())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)