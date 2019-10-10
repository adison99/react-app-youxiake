import {connect} from "react-redux";
const mapStateToProps=(state)=>({
    products:state.home.products,
})
const mapDispatchToProps=(dispatch)=>({
})

export default connect(mapStateToProps,mapDispatchToProps);