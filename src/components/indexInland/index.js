import React, { Component } from 'react'
import { MIndexInland } from "./styled";
import IndexList from "@components/indexList";
import BScroll from "@common/betterScroll";
import connect from "./connect";
@connect
class IndexInland extends Component {
    constructor() {
        super()
        this.state = {
            tag_id: 0,
            class_region_id: 2,
           
        }
    }
    render() {
        let { tags, class_region_id ,className} = this.props;
        let arr = [];
        if (tags.length) {
            switch (class_region_id) {
                case 2:
                    arr = tags[0].items
                    break;
                case 3:
                    arr = tags[1].items
                    break;
                case 1:
                    arr = tags[2].items
                    break;
                default:
            }

        }

        return (
            <MIndexInland className="qqq">
                <div className="nav__body">
                    {
                        arr.map((it, ind) => (
                            <div
                                className={className===ind?"active":""}
                                key={ind} onClick={this.handlerClick.bind(this, ind, class_region_id, it.tag_id)}>{it.name}</div>
                        ))

                    }

                </div>
                <BScroll ref="bscroll" className="qaq" >
                    <IndexList />
                </BScroll>
            </MIndexInland>
        )
    }
    handlerClick(ind, class_region_id, id) {
        this.setState({
            tag_id: id,
            class_region_id: class_region_id,
        }, () => {
            this.componentDidMount(ind)
        })

    }
    componentDidMount(ind) {
        this.props.handleAsyncHomeDataList(this.state.tag_id, this.state.class_region_id, this.props.page,'',ind)
        //上拉加载更多
        this.refs.bscroll.handlepullingUp(async () => {
            let flag = await this.props.handleAsyncHomeDataList(this.state.tag_id, this.state.class_region_id, this.props.page, "true");
            if (flag) {
                this.refs.bscroll.handlefinishPullUp();
            }
        })
    }
}
export default IndexInland;
