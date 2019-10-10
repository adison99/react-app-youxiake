import React, { Component } from 'react'
import { MIndexLine } from "./styled";
import IndexInland from "@components/indexInland";
import connect from "./connect";
@connect
class IndexLine extends Component {
    constructor(){
        super()
        this.state={
          class_region_id:2,
          className:0
        }
    }
    render() {
        let {tags}=this.props;
        return (
            <MIndexLine>
                <div className="mIndexLine">
                    <div className="mIndexLine__header">
                        <i></i>
                        <span>热门目的地推荐</span>
                        <i></i>
                    </div>
                    <div className="mIndexLine__blank" style={{height: "0px"}}>
                    </div>
                    <div className="mIndexLine__nav mIndexLine__nav--fixed" style={{top: "0px"}}>
                        <div className="nav__header">
                            {
                                tags.map((item,index)=>(
                                    <div 
                                    ref="qq"
                                    className={this.state.className===index?"active":""}
                                    key={item.class_region_id} onClick={this.handleClickGetId.bind(this,item.class_region_id,index)}>{item.name}</div>
                                ))
                            }
                        </div>
                   </div>
                   <IndexInland class_region_id={this.state.class_region_id}/>
                  
                </div>
            </MIndexLine>
        )
    }
    handleClickGetId(id,index){
        this.setState({
            class_region_id:id,
            className:index
        },()=>{
            this.props.handleAsyncHomeDataList(this.state.class_region_id)

        })

    }

}
export default IndexLine;
