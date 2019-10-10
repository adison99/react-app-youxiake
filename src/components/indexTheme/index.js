import React, { Component } from 'react'
import { MIndexTheme } from "./styled";
import connect from "./connect";
@connect
class IndexTheme extends Component {
    render() {
        let {theme} =this.props;
        let Array=theme.data;        
        return (
            <MIndexTheme>
                <div className="mIndexTheme">
                    <div className="mTitle">
                        <div className="title__left">
                            <span>{theme.content}</span>
                        </div>
                        <a href={theme.url}>
                            <div className="title__right">
                                <span>更多</span>
                            </div>
                        </a>
                    </div>

                    <div className="mBanner__image">
                        <div className="mBanner__left">
                            <a href="https://h5.youxiake.com/hz/693">
                                <div className="left__image" style={{backgroundImage: Array?"url("+Array[0].thumb+")":''}}>
                                </div>
                            </a>
                        </div>


                    <div className="mBanner__right">
                        <div className="right__up">
                            <a href="https://h5.youxiake.com/hz/721">
                                <div className="up__image" style={{backgroundImage: Array?"url("+Array[1].thumb+")":''}}>
                                </div>
                            </a>
                        </div>
                        <div className="right__down">
                            <a href="https://h5.youxiake.com/hz/538">
                                <div className="down__image" style={{backgroundImage: Array?"url("+Array[2].thumb+")":''}}>
                                </div>
                            </a>
                            <a href="https://m.youxiake.com/search/results/0-0-0-0-0-0.html?keyword=%E6%88%BF%E8%BD%A6">
                                <div className="down__image" style={{backgroundImage:Array?"url("+Array[3].thumb+")":''}}>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                </div>
            </MIndexTheme>
        )
    }
}
export default IndexTheme;