import React, { Component } from 'react'
import {MIndexSport} from "./styled";
import connect from "./connect";
import BScroll from "@common/betterScroll"
@connect
class IndexSport extends Component {
    render() {
        return (
            <MIndexSport>
                <div className="mIndexSport">
                    <div className="mTitle">
                        <div className="title__left">
                            <span>活动赛事</span>
                        </div>
                        <a href="https://h5.youxiake.com/hz/450">
                            <div className="title__right">
                                <span>更多</span>
                            </div>
                        </a>
                    </div>
                    <div className="mScroller__image">
                        <div className="mScrollX">
                            <BScroll ref="bscroll">
                                <div className="image__container">
                                    <a className="image__list" href="https://h5.youxiake.com/hz/625">
                                        <div className="list__image__container" style={{ backgroundImage: "url(https://qimg4.youxiake.com/Public/Data/upload/201905/13/83981557711944.jpg?imageslim)" }}>
                                        </div>
                                        <div className="list__desc__container">走，去露营
                                        </div>
                                    </a>
                                    <a className="image__list" href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E4%B8%88%E9%87%8F%E5%9C%B0%E7%90%832019">
                                        <div className="list__image__container" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201901/02/57291546414402.png?imageslim)" }}>
                                        </div>
                                        <div className="list__desc__container">生命的自由里程
                                        </div>
                                    </a>
                                </div>
                            </BScroll>
                        </div>
                    </div>
                </div>
            </MIndexSport>
        )
    }
}
export default IndexSport;
