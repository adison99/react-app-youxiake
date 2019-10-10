import React, { Component } from 'react'
import { Head } from "./styled"

export default class Header extends Component {
    render() {
        return (
            <Head>
                <div className="mHead__container border_bottom">
                    <div className="mHead__container__back"></div>
                    <div className="mHead__container__title">国内游</div>
                    <a href="/usercenter" className="mHead__container__user"> </a>
                </div>
            </Head>
        )
    }
}
