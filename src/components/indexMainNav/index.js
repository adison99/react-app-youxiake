import React, { Component } from 'react'
import connect from "./connect";
import { MIndexMainNav } from "./styled";
@connect
class IndexMainNav extends Component {

    render() {
        let { navs } = this.props;
        return (
            <MIndexMainNav>
                <div className="mIndexMainNav">
                    {
                        navs.map((item, index) => (

                            <a className="mIndexMainNav__box" href="https://m.youxiake.com/cn" key={index}>
                                <div className="mIndexMainNav__boxIn" style={{ backgroundImage: "url("+item.thumb+")" }}>
                                </div>
                                {item.title}
                            </a>


                        ))

                    } </div>
            </MIndexMainNav>
        )
    }
}
export default IndexMainNav
