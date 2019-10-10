import {connect} from "react-redux";
const mapStateToProps=(state)=>({
    news:state.home.news,
})
const mapDispatchToProps=(dispatch)=>({

}
)
export default connect(mapStateToProps,mapDispatchToProps);