import React, { Component } from 'react'
import { MUserCenterRecommend } from "./styled"
import connect from "./connect"

@connect
class UserCenterRecommend extends Component {
    render() {
        let { list } = this.props
        return (
            <MUserCenterRecommend>
                <div className="mUserCenterRecommend">
                    <div className="mUserCenterRecommend__head">精选推荐</div>
                    <div className="mUserCenterRecommend__body">
                        {
                            list.map((item, index) => {
                                return (
                                    <a href="##" className="mUserCenterRecommend__line" key={index}>
                                        <div className="line__pic" style={{ backgroundImage: "url("+item.img+")" }}>
                                            <div className="line__type">{item.theme_label+" | "+item.place_label}</div>
                                        </div>
                                        <div className="line__title">{item.name}</div>
                                        <div className="line__msg">
                                            <div className="line__price">
                                                <span>￥</span>
                                                <b>{item.minprice}</b>
                                                起
                                            </div>
                                            <div className="line__days">{item.days}</div>
                                        </div>
                                    </a>
                                )
                            })
                        }

                    </div>
                </div>
            </MUserCenterRecommend>
        )
    }

    componentDidMount() {
        this.props.handleAsyncUserData()
    }
}

export default UserCenterRecommend;