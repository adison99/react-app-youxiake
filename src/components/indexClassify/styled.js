import styled from "styled-components";
export const MIndexClassify=styled.div`
    .mIndexClassified {
        margin-top: .2rem;
        padding-bottom: .3rem;
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
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content {
        padding: 0 .3rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__banner {
        height: 3.35rem;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__banner .banner__info {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        width: 100%;
        height: 1.67rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background: url(https://m.youxiake.com/static/img/img28.86e92d0.png) 50% no-repeat;
        background-size: 100% 1.67rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__banner .banner__info .banner__title {
        margin-bottom: .2rem;
        color: #fff;
        font-size: .32rem;
        font-weight: 700;
        width: 4.34rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__banner .banner__info .banner__price {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        margin-bottom: .15rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__banner .banner__info .banner__price span {
        font-size: .22rem;
        color: #ff6000;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__banner .banner__info .banner__price span:nth-child(2) {
        font-size: .34rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        padding-top: .15rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route a:first-child {
        margin-left: 0;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route {
        width: 2.22rem;
        height: 2.93rem;
        background-color: #f9f9f9;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        border-radius: .1rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route .route__img {
        position: relative;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
        width: 2.22rem;
        height: 1.48rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route .route__img .route__city {
        position: absolute;
        left: 0;
        top: 0;
        display: inline-block;
        padding: 0 .1rem;
        height: .36rem;
        white-space: nowrap;
        color: #fff;
        font-size: 0;
        background: rgba(0,0,0,.5);
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route .route__img .route__city span {
        display: inline-block;
        max-width: 1.7rem;
        height: .36rem;
        line-height: .36rem;
        vertical-align: middle;
        font-size: .24rem;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route .route__desc {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: .16rem;
        height: 1.15rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route .route__desc .desc__title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: #333;
        font-size: .28rem;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route .route__desc .desc__price {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        color: #ff7100;
    }
    .mIndexClassified .mIndexClassified__container .mIndexClassified__content .content__route .route .route__desc .desc__price span.price__jg {
        font-size: .32rem;
    }
`