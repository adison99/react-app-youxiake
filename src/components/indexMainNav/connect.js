import {connect} from "react-redux";

const  mapStateToProps=(state)=>({
    navs:state.home.navs,
 })
const mapDispatchToProps=(dispatch)=>({
})
export default connect(mapStateToProps,mapDispatchToProps);