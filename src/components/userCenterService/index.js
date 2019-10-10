import React, { Component } from 'react'
import {MUserCenterService } from "./styled"

export default class UserCenterService extends Component {
    render() {
        return (
            <MUserCenterService>
                <div className="mUserCenterService">
                    <div className="mUserCenterService__head">我的服务</div>
                    <div className="mUserCenterService__container">
                        <div className="mUserCenterService_row">
                            <a href="/visas/order-list" className="mUserCenterService__box mUserCenterService__box--visa">
                                <i></i>
                                <span>签证订单</span>
                            </a>
                            <a href="/shop/myorders" className="mUserCenterService__box mUserCenterService__box--shop">
                                <i></i>
                                <span>集市订单</span>
                            </a>
                            <a href="/shop/cart/shoppingcart" className="mUserCenterService__box mUserCenterService__box--shopcar">
                                <i></i>
                                <span>集市购物车</span>
                            </a>
                            <a href="/shop/myarealist" className="mUserCenterService__box mUserCenterService__box--address">
                                <i></i>
                                <span>常用收货地址</span>
                            </a>
                        </div>
                        <div className="mUserCenterService_row">
                            <a href="/passenger/list" className="mUserCenterService__box mUserCenterService__box--traveler">
                                <i></i>
                                <span>常用出行人</span>
                            </a>
                            <a href="/editpwd" className="mUserCenterService__box mUserCenterService__box--password">
                                <i></i>
                                <span>修改密码</span>
                            </a>
                            <div className="mUserCenterService__box mUserCenterService__box--service">
                                <i></i>
                                <span>在线客服</span>
                            </div>
                            <a href="/jump" className="mUserCenterService__box mUserCenterService__box--app">
                                <i></i>
                                <span>游侠客APP</span>
                            </a>
                        </div>
                    </div>
                </div>
            </MUserCenterService>
        )
    }
}
