import React, { Component } from 'react'
import BetterScroll from "better-scroll";
import { Wrapper } from "./styled"
export default class BScroll extends Component {
    render() {
        return (
            <Wrapper ref="wrapper">
                {this.props.children}
            </Wrapper>
        )
    }
    componentDidMount() {
        this.scroll = new BetterScroll(this.refs.wrapper, {
            click: true,
            tap: true,
            pullUpLoad: true,
            pullDownRefresh: true,
            scrollX: true,
            scrollY: true,
        })
    }
    //上拉加载更多方法
    handlepullingUp(callback) {
        this.scroll.on("pullingUp",callback);
    }
    //上拉加载更多加载完毕
    handlefinishPullUp() {
        //告诉better-scroll数据以经加载完毕了
        this.scroll.finishPullUp();
        //通知better-scroll重新计算高度
        this.scroll.refresh();
    }

    //下拉刷新
    handlepullingDown(callback){
        this.scroll.on("pullingDown",callback);
    }
    //下拉刷新加载完毕
    handlefinishPullDown(){
        this.scroll.finishPullDown();
        this.scroll.refresh();
    }
}
