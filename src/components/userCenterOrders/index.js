import React, { Component } from 'react'
import { MUserCenterOrders } from "./styled"

export default class UserCenterOrders extends Component {
    render() {
        return (
            <MUserCenterOrders>
                <div className="mUserCenterOrders">
                    <div className="mUserCenterOrders__head">
                        <b>出行订单</b>
                        <span>全部</span>
                    </div>
                    <div className="mUserCenterOrders__container">
                        <div className="mUserCenterOrders__box">
                            <div></div>
                            <span>待付款</span>
                        </div>
                        <div className="mUserCenterOrders__box">
                            <div></div>
                            <span>报名成功</span>
                        </div>
                        <div className="mUserCenterOrders__box">
                            <div></div>
                            <span>替补</span>
                        </div>
                        <div className="mUserCenterOrders__box">
                            <div></div>
                            <span>待评价</span>
                        </div>
                        <a href="/orders/list/cancel" className="mUserCenterOrders__box">
                            <div></div>
                            <span>退款/取消</span>
                        </a>
                    </div>
                </div>
            </MUserCenterOrders>
        )
    }
}
