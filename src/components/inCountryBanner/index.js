import React, { Component } from 'react'
import { InCountryBanner } from "./styled"
import BScroll from "@common/betterScroll"
import connect from "./connect"

@connect
class Banner extends Component {
    render() {
        return (
            <InCountryBanner>
                <div className="mSwiperBanner">
                    <div className="vux-slider mSwiperBanner__box">
                        <div className="vux-swiper" style={{ height: "4.22rem" }}>
                            <BScroll ref="wrapper">
                                <div className="vux-swiper-item">
                                    <a href="https://h5.youxiake.com/hz/931" className="mSwiperBanner__link" style={{ backgroundImage: "url(https://qimg4.youxiake.com/upload/201908/25/79831566744226.jpg?imageslim)" }}> </a>
                                </div>
                            </BScroll>
                        </div>
                    </div>
                </div>
            </InCountryBanner>
        )
    }
    componentDidMount(){
        this.props.getInCountryBanner();
    }
}

export default Banner;