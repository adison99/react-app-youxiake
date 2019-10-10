import React, { Component } from 'react'
import {PageContainer} from "@/globalStyled"
import UserCenterHeader from "@components/userCenterHeader"
import UserCenterOrders from "@components/userCenterOrders"
import UserCenterWallet from "@components/userCenterWallet"
import UserCenterService from "@components/userCenterService"
import UserCenterRecommend from "@components/userCenterRecommend"


export default class Mine extends Component {
    render() {
        return (
            <PageContainer>
                <UserCenterHeader/>
                <UserCenterOrders/>
                <UserCenterWallet/>
                <UserCenterService/>
                <UserCenterRecommend/>
            </PageContainer>
        )
    }
}
