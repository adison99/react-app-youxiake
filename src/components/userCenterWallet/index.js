import React, { Component } from 'react'
import { MUserCenterWallet } from "./styled"

export default class UserCenterWallet extends Component {
    render() {
        return (
            <MUserCenterWallet>
                <div className="mUserCenterWallet">
                    <div className="mUserCenterWallet__head">我的钱包
                        <i></i>
                    </div>
                </div>
            </MUserCenterWallet>
        )
    }
}
