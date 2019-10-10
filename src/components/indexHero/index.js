import React, { Component } from 'react'
import { MIndexHero } from "./styled";
import connect from "./connect";
@connect
class IndexHero extends Component {
    render() {
        let { post } = this.props;
        return (
            <MIndexHero>
                <div className="mIndexHero">
                    <div className="mTitle">
                        <div className="title__left">
                            <span>{post.header}</span>
                        </div>
                        <a href={post.more_url}>
                            <div className="title__right">
                                <span>更多</span>
                            </div>
                        </a>
                    </div>
                    <div className="mIndexHero__content">
                        <a href={post.url}>
                            <div className="content__banner">
                                <div className="banner__image" style={{backgroundImage: "url("+post.thumb+")"}}>
                                </div>
                                <div className="banner__desc">{post.title}</div>
                            </div>
                            <div className="content__heroInfo">
                                <div className="hero__image" style={{backgroundImage: "url("+post.author_avatar+")"}}>
                                </div>
                                <div className="hero__nick">{post.author_name}</div>
                                <div className="hero__pos">{post.location}</div>
                            </div>
                        </a>
                    </div>
                </div>
            </MIndexHero>
        )
    }
}
export default IndexHero;