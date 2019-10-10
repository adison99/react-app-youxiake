import React, { Component } from 'react'
import { MSearch } from "./styled"


export default class Search extends Component {
    render() {
        return (
            <MSearch>
                <div className="mSearch">
                    <div className="mHead__search">
                        <div className="search__back__arrow"></div>
                        <div className="search__box">
                            <div className="mHead__search--icon"></div>
                            <div className="form__box">
                                <input type="search" placeholder="探索全球小众目的地和创意玩法" autoFocus="autofocus" maxLength="10" id="inputBox" className="mHead__search--inputBox" />
                            </div>
                        </div>
                        <div className="mHead__search__close"></div>
                    </div>
                    <span className="hot__search">
                        <div className="hot__search--title">热门搜索</div>
                        <span className="scroll__H__view" id="vux-scroller-qxxg5" style={{touchAction: "auto", userSelect: "none", position: "relative", overflow: "hidden"}}>
                            <span className="xs-container">
                                <span className="hot__search--image">
                                    <div className="hot__search--imagebg" style={{backgroundImage:"url(https://qimg4.youxiake.com/upload/201908/05/31591565001575.jpg?imageslim)"}}>
                                        <span> 喀纳斯 </span>
                                    </div>
                                </span>
                            </span>
                            <div className=" xs-fixed-container"></div>
                        </span>
                    </span>
                    <div className="mLocation"></div>
                </div>
            </MSearch>
        )
    }
}
