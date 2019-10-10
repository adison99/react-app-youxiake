import styled from "styled-components";
export const MIndexHero=styled.div`
    .mIndexHero {
        margin-top: .1rem;
        width: 7.5rem;
        background: #fff;
    }
    .mTitle {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        height: .9rem;
        line-height: .9rem;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .mTitle .title__left {
        -ms-flex-item-align: start;
        align-self: flex-start;
        color: #333;
    }
    .mTitle .title__left:before {
        content: "";
        display: inline-block;
        width: .08rem;
        height: .3rem;
        background: #fed101;
        position: relative;
        top: .02rem;
    }
    .mTitle .title__left span {
        position: relative;
        left: .32rem;
        font-size: .32rem;
        font-weight: 700;
    }
    .mTitle .title__right {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: .3rem;
        color: #999;
    }
    .mTitle .title__right span {
        font-size: .28rem;
    }
    .mTitle .title__right:after {
        content: "";
        display: inline-block;
        width: .15rem;
        height: .26rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAMAAABfE/ZQAAAAOVBMVEX///+ZmZnZ2dnV1dW8vLz9/f25ubnX19e/v7/09PTq6urd3d3CwsLv7+/k5OTQ0NClpaWhoaGcnJx7nC3iAAAAW0lEQVQY05WPSxKAMAhDS1Fq8e/9D6tlUZAFo9klLwyQ0rpvyaieAGg8w6OsflwA3o2hBcUGvjF9a+D/RjaBHOYmLrXU8NzfcOMkNqSlUwppvIiViuoh1ATIxt2clAHxNWcKAAAAAABJRU5ErkJggg==);
        background-size: cover;
    }
    .mIndexHero .mIndexHero__content {
        padding-bottom: .3rem;
    }
    .mIndexHero .mIndexHero__content .content__banner {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .mIndexHero .mIndexHero__content .content__banner .banner__image {
        height: 3.38rem;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .mIndexHero .mIndexHero__content .content__banner .banner__desc {
        font-size: .28rem;
        color: #1e1e1e;
        padding: .3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .mIndexHero .mIndexHero__content .content__heroInfo {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: .53rem;
        line-height: .53rem;
        padding-left: .31rem;
    }
    .mIndexHero .mIndexHero__content .content__heroInfo .hero__image {
        width: .53rem;
        height: .53rem;
        border-radius: 50%;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .mIndexHero .mIndexHero__content .content__heroInfo .hero__nick {
        margin-left: .15rem;
        color: #fdc522;
        font-size: .28rem;
    }
    .mIndexHero .mIndexHero__content .content__heroInfo .hero__pos {
        margin-left: .2rem;
        font-size: .28rem;
        color: #979797;
    }
`