import React, { Component } from 'react'
import connect from "./connect";
import { MIndexGlobal } from "./styled";
import BScroll from "@common/betterScroll";
@connect
class IndexGlobal extends Component {
    render() {
        return (
            <MIndexGlobal>
                <div className="mIndexGlobal">
                    <div className="mTitle">
                        <div className="title__left">
                            <span>全球推荐目的地</span>
                        </div>
                        <a href="https://m.youxiake.com/out">
                            <div className="title__right">
                                <span>更多</span>
                            </div>
                        </a>
                    </div>
                    <div className="mBanner__image">
                        <div className="mBanner__left">
                            <a href="https://m.youxiake.com/#/">
                                <div className="left__image" style={{ backgroundImage: "url(https://qimg4.youxiake.com/upload/201907/15/56711563159378.jpg)" }}>
                                </div>
                            </a>

                        </div>
                        <div className="mBanner__right">
                            <a href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E6%96%B0%E5%8A%A0%E5%9D%A1">
                                <div className="right__image" style={{ backgroundImage: "url(https://qimg4.youxiake.com/upload/201907/10/27581562754066.jpg?imageslim)" }}>
                                    <div>新加坡</div>
                                </div>
                            </a>
                            <a href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96">
                                <div className="right__image" style={{ backgroundImage: "url(https://qimg4.youxiake.com/upload/201907/10/71251562754142.jpg?imageslim)" }}>
                                    <div>清凉贝加尔湖</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mScroller__image">
                        <div className="mScrollX">
                            <BScroll ref="wrapper">
                                <div className="image__container" >
                                    <a className="image__list" href="https://m.youxiake.com/lines.html?id=20631" style={{
                                        backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201904/02/18101554175252.png?imageslim)", pointerEvents: "auto"
                                    }}>
                                        <div className="list__title">布拉格</div>
                                    </a>
                                    <a className="image__list" href="https://h5.youxiake.com/hz/333" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201807/09/60201531124619.png?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">蒲甘</div>
                                    </a>
                                    <a className="image__list" href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E9%A9%AC%E8%B5%9B%E9%A9%AC%E6%8B%89" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201803/21/43831521604289.png?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">肯尼亚</div>
                                    </a>
                                    <a className="image__list" href="https://m.youxiake.com/lines.html?id=28091" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/32861533521566.png?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">珀斯</div>
                                    </a>
                                    <a href="http://www.youxiake.com/thailand/" className="image__list" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/32861533521566.png?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">普吉岛</div>
                                    </a>
                                    <a href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E8%93%9D%E8%8A%B1%E6%A5%B9" className="image__list" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/32861533521566.png?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">南非</div>
                                    </a>
                                    <a href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E5%BC%80%E7%BD%97" className="image__list" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/32861533521566.png?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">埃及</div>
                                    </a>
                                    <a href="https://m.youxiake.com/lines.html?id=24784" className="image__list" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/32861533521566.png?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">日惹</div>
                                    </a>
                                    <a href="https://m.youxiake.com/lines.html?id=11125" className="image__list" style={{ backgroundImage: "url(&quot;https://qimg4.youxiake.com/upload/201906/26/26061561531676.jpg?imageslim)", pointerEvents: "auto" }}>
                                        <div className="list__title">步道石</div>
                                    </a>
                                </div>
                            </BScroll>
                        </div>

                    </div>
                </div >
            </MIndexGlobal >
        )
    }
}
export default IndexGlobal;