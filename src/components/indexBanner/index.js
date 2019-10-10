import React, { Component } from "react";
import { MIndexBanner } from "./styled";
import observer from "@lib/observer";
import connect from "./connect";
import {Link} from "react-router-dom";
@connect
class IndexBanner extends Component {
    render() {
        return (
            <MIndexBanner>
                <div className="mIndex__banner">
                    <div className="mIndexBanner">
                        <div className="mIndexBanner__header">
                            <div className="header__location">
                                <span><Link to="/city">北京</Link></span>
                                <i></i>
                            </div>
                            <div className="header__search">
                                <i className="search__button"></i>
                                <input placeholder="搜索目的地" type="search" className="search__input" />
                            </div>
                            <div className="header__button" onClick={this.handleClick.bind(this)}>
                            </div>
                        </div>

                        <div>
                            <div className="vux-slider mSwiperBanner">
                                <div className="vux-swiper" style={{ height: "3.28rem" }}>
                                    <div className="vux-swiper-item" style={{ height:"100%" }}>
                                        <a href="##" className="mSwiperBanner__pic" style={{backgroundImage: "url(https://qimg4.youxiake.com/upload/201909/25/89651569383064.jpg?imageslim)",display:"block",height:"100%",width:"100%"}}>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </MIndexBanner>
        )
    }
    handleClick(){
        observer.$emit("handleClickShow");
    }
   

}
export default IndexBanner;