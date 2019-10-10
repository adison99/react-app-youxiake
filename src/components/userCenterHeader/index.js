import React, { Component } from "react";
import { MUserCenterHeader } from "./styled";

export default class UserCenterHeader extends Component {
    render() {
        return (
            <MUserCenterHeader>
                <div className="mUserCenterHeader">
                    <div className="header__box">
                        <div className="header__avatar"></div>
                        <div className="header__login">
                            去登录/注册
                        <span>新用户注册送388元大礼包</span>
                        </div>
                    </div>
                </div>
            </MUserCenterHeader>
        )
    }
}