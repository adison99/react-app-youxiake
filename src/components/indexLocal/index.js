import React, { Component } from 'react';
import {MIndexLocal} from "./styled";
import connect from "./connect";
@connect
class IndexLocal extends Component {
    render() {
        return (
            <MIndexLocal>
                <div className="mIndexLocal">
                    <div className="mIndexLocal__blank">
                    </div>
                    <a href="/ddwl?from=index" className="mIndexLocal__img">
                        <div className="mIndexLocal__img__pic" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201807/19/48101531994149.png?imageslim)" }}>
                        </div>
                        <div className="mIndexLocal__img__bg">
                        </div>
                        <div className="mIndexLocal__text1">北京玩乐
                        </div>
                        <div className="mIndexLocal__text2">像当地人一样，体验最本土的吃喝玩乐
                        </div>
                    </a>
                    <div className="mIndexLocal__top">
                        <a href="https://m.youxiake.com/film_557.html" className="top__left" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/97891533556642.png?imageslim)" }}>
                            <i>
                            </i>
                            <div>
                                <span>北京city walk</span>
                            </div>
                        </a>
                        <div className="top__right">
                            <a href="http://www.youxiake.com/gonglue/view?id=2922" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/30131533556752.png?imageslim)" }}>
                                <div>
                                    <span>玩转帝都城儿</span>
                                </div>
                            </a>
                            <a href="http://www.youxiake.com/gonglue/view?id=3121" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/201808/06/54151533556832.png?imageslim)" }}>
                                <div>
                                    <span>吃遍帝都味儿</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mIndexLocal__bottom">
                        <a href="https://m.youxiake.com/lines.html?id=20679&amp;spm=eyJjb2RlIjoxMDcwLCJmcm9tIjoxMDczLCJvcmlnaW5hbF9pZCI6MH0" className="bottom__box">
                            <div className="box__location">
                                <span>北京</span>
                            </div>
                            <div className="box__pic" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/productimg/201712/22/5a3c641959873.jpg?imageslim)" }}>
                            </div>
                            <div className="box__title">[玩遍北京·故宫篇]国家宝藏会说话·帝王视角出行+冰窖午餐+延禧宫探秘+专业领队讲解+错峰而行避开人流 （4人成行 VIP小团）
                            </div>
                            <div className="box__price">
                                <span>￥</span>
                                <b>168</b>
                                <span>起</span>
                            </div>
                        </a>
                        <a href="https://m.youxiake.com/lines.html?id=23700&amp;spm=eyJjb2RlIjoxMDcwLCJmcm9tIjoxMDczLCJvcmlnaW5hbF9pZCI6MH0" className="bottom__box">
                            <div className="box__location">
                                <span>北京</span>
                            </div>
                            <div className="box__pic" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/productimg/201806/05/5b163e26aef94.jpg?imageslim)" }}>
                            </div>
                            <div className="box__title">[夜游北京·后海胡同]避开炎炎夏日，与家人朋友来一次地道的胡同游，撸串听相声过足瘾/后海摇橹船号声响亮/鼓楼老店吃传统炸酱面/ （精品VIP小团，3人成行）
                            </div>
                            <div className="box__price">
                                <span>￥</span>
                                <b>140</b>
                                <span>起</span>
                            </div>
                        </a>
                        <a href="https://m.youxiake.com/lines.html?id=26963&amp;spm=eyJjb2RlIjoxMDcwLCJmcm9tIjoxMDczLCJvcmlnaW5hbF9pZCI6MH0" className="bottom__box">
                            <div className="box__location">
                                <span>北京</span>
                            </div>
                            <div className="box__pic" style={{ backgroundImage: "url(https://gallery.youxiake.com/Public/Data/upload/productimg/201909/19/5d835c04e42b9.jpg?imageslim)" }}>
                            </div>
                            <div className="box__title">[玩遍北京·长城篇] 独享惊艳朋友圈的无人长城，夜游鸟巢中轴线，品《舌尖3》的正德春饼宴，探秘万历定陵地宫 （4人成行精品小团，四环内上门接，全程专业讲解）
                            </div>
                            <div className="box__price">
                                <span>￥</span>
                                <b>358</b>
                                <span>起</span>
                            </div>
                        </a>
                    </div>
                </div>
            </MIndexLocal>
        )
    }
}
export default IndexLocal;
