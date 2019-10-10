import {connect} from "react-redux";

const  mapStateToProps=(state)=>({
    theme:state.home.theme,

 })
const mapDispatchToProps=(dispatch)=>({
})
export default connect(mapStateToProps,mapDispatchToProps);