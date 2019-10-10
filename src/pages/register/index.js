import React, { Component } from 'react'
import { LoginPro } from "./styled"

export default class Register extends Component {
    render() {
        return (
            <LoginPro>
                <div className="mLoginNewContent">
                    <div className="mLoginNewContent__bottom__beforebox">
                        <div className="mLoginNewContent__bottom__beforebox--top">
                            <div className="mLoginNewContent__item">
                                <div className="mLoginNewContent__item__title">
                                    <i className="mLoginNewContent__title__icon"></i>
                                    <span>用户名注册</span>
                                </div>
                            </div>
                            <div className="mLoginNewContent__item">
                                <div>
                                    <input type="text" placeholder="请输入用户名" className="mLoginNewContent__item__input" />
                                </div>
                            </div>
                            <div className="mLoginNewContent__item">
                                <div>
                                    <input type="text" placeholder="请输入密码" maxLength="6" className="mLoginNewContent__item__input" />
                                </div>
                            </div>
                            <div className="mLoginNewContent__item">
                                <div className="mLoginNewContent__item__loginbtn">
                                    <span>一键注册</span>
                                </div>
                            </div>
                            <div className="mLoginNewContent__item">
                                <div className="mLoginNew__changeLoginWay">
                                    <div>
                                        <span className="mLoginNew__changeLoginWay__changeTelPlace" onClick={this.toLogin.bind(this)}>已有账号，立即登录</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mLoginNewContent__bottom__beforebox--bottom">
                            <div className="mLoginNewContent__bottomBefore">
                                <div className="mLoginNewContent__item">
                                    <div className="mLoginNew__wxOrQQSoonLogin">
                                        <div className="mLoginNew__wxOrQQSoonLogin__soon">
                                            <i className="mLoginNew__wxOrQQSoonLogin__soon--wx"></i>
                                        </div>
                                        <div className="mLoginNew__wxOrQQSoonLogin__soon">
                                            <i className="mLoginNew__wxOrQQSoonLogin__soon--qq"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mLoginNewContent__item ">
                                    <div className="mLoginNew__checkRules">
                                        <span className="mLoginNew__checkRules__str">
                                            <div className="mLoginNew__checkRules__check--noCheck"></div>
                                            <span>
                                                未注册游侠客账号的手机，登录时将同时注册，登录代表您已同意
                                        </span>
                                            <span className="mLoginNew__checkRules__str--bold">《注册服务协议》</span>
                                            和
                                        <span className="mLoginNew__checkRules__str--bold">《隐私政策》</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mLoginNewContent__item mLoginNewContent__bottom">
                                <div className="mLoginNew__wxSmallRoutine">
                                    <span>
                                        体验游侠客微信小程序
                                        <div className="mLoginNew__wxSmallRoutine--arrowLight"></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LoginPro>
        )
    }
    toLogin(){
        this.props.history.push("/login")
    }
}
