import React, { Component } from "react";
import { MIndexApp } from "./styled";
export default class IndexApp extends Component {
    constructor(){
        super()
        this.state={
            flag:true,
        }
    }
    render() {
        let {flag} =this.state;
        return (
            <MIndexApp>
                <div className="mIndexApp" style={{display:flag?"block":"none"}}>
                    <div className="mIndexApp__container">
                        <div className="container__box">
                            <div className="box__logo"></div>
                            <div className="box__context">
                                <div className="context__text1">游侠客-真正的旅行</div>
                                <div className="context__text2">摄影、亲子、户外、深度游</div>
                            </div>
                        </div>
                        <div className="container__button">打开APP</div>
                    </div>
                    <div className="mIndexApp__close" onClick={this.handleClickClose.bind(this)}></div>
                </div>
            </MIndexApp>
        )
    }
    handleClickClose(){
        this.setState({
            flag:!this.state.flag
        })
    }
}