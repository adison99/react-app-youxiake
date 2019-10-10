import React from "react";
import connect from "./connect";
import { MIndexRaiderNews } from "./styled";
import BetterScroll from "better-scroll"
@connect
class IndexRaiderNews extends React.Component {
    render() {
        let { news } = this.props;
        return (
            <MIndexRaiderNews>
                <div className="mIndex__raiders">
                    <div className="mIndexRaiders">
                        <div className="cover-left"></div>
                        <a href="https://m.youxiake.com/film_557.html" className="cover">&nbsp;</a>
                        <div className="swiper-container swiper-container-vertical swiper-container-ios" style={{ height: "50px" }}>
                            <div ref="bscroll" className="BS" style={{ height: "50px"}}>

                                <div className="swiper-wrapper" style={{ height: "100px" }}>

                                    {
                                        news.map((item, index) => {
                                            if (index < 2) return (
                                                <div key={index} className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" style={{ height: "50px" }}>
                                                    <div className="raiders">{news[index * 2].title}</div>
                                                    <div className="raiders">{news[index * 2 + 1].title}</div>
                                                </div>
                                            )

                                        }

                                        )
                                    }

                                </div>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
            </MIndexRaiderNews>
        )
    }
    componentDidMount() {
        this.scroll = new BetterScroll(this.refs.bscroll, {
            click: true,
            tap: true,
            pullUpLoad: true,
            pullDownRefresh: true,
            scrollX: false,
            scrollY: true,
           
        })
    }

}
export default IndexRaiderNews;