import {connect} from "react-redux";
const mapStateToProps=(state)=>({
    post:state.home.post,
})
const mapDispatchToProps=(dispatch)=>({

})

export default connect(mapStateToProps,mapDispatchToProps);