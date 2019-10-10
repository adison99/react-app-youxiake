import React, { Component } from 'react'
import { MIndexCity } from "./styled";
import connect from "./connect";
import BScroll from "@common/betterScroll";
@connect
class IndexCity extends Component {
    render() {
        let { city } = this.props;
        let sites = [];
        let secondSites = [];
        let citys = [];
        if (city.sites) {
            sites = city.sites;
            secondSites = city.secondsites;
            citys = city.citys;
        }
        return (
            <MIndexCity>
                <div className="mIndexCity">
                    <div className="mIndexCity__header">选择城市
            <i onClick={this.props.handlerBack.bind(this)}></i>
                    </div>
                    <BScroll ref="bscroll" className="scroll" style={{height:"100%",overflow:"hidden"}}>
                        <div className="mask__scroller">
                            <div className="xs-container">
                                <div className="mIndexCity__body">
                                    <div className="body__title">定位/附近城市</div>
                                    <div className="body__list body__list--location">北京市</div>
                                    <div className="body__title">历史记录</div>
                                    <div className="body__list">北京</div>
                                    <div className="body__list">西安</div>
                                    <div className="body__list">北京市</div>
                                    <div className="body__title">一级站点</div>
                                    {
                                        sites.map((item) => (
                                            <div
                                                key={item.id}
                                                className="body__list">{item.name}</div>
                                        ))
                                    }
                                    <div className="body__title">二级站点</div>
                                    {
                                        secondSites.map((item) => (
                                            <div
                                                key={item.id}
                                                className="body__list">{item.name}</div>
                                        ))
                                    }
                                    <div className="body__title">热门玩乐城市</div>
                                    {
                                        citys.map((item) => (
                                            <div
                                                key={item.id}
                                                className="body__list">{item.name}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className=" xs-fixed-container"></div>
                        </div>
                    </BScroll>
                </div>

            </MIndexCity>
        )
    }
    componentDidMount() {
        this.props.handlerAsyncCityData()
    }
}
export default IndexCity;