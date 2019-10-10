import styled from "styled-components";

export const MIndexGlobal = styled.div`
    .mIndexGlobal {
        margin-top: .2rem;
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
    .mIndexGlobal .mBanner__image {
        display: felx;
        display: -webkit-flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: .15rem;
    }
    .mIndexGlobal .mBanner__image .mBanner__left a {
        display: block;
        color: #fff;
    }
    .mIndexGlobal .mBanner__image .mBanner__left a:first-child {
        padding-right: .01rem;
    }   
    .mIndexGlobal .mBanner__image .mBanner__left a .left__image {
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
        width: 5.46rem;
        height: 3.1rem;
    }
    .mIndexGlobal .mBanner__image .mBanner__right {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .mIndexGlobal .mBanner__image .mBanner__right a {
        display: block;
        color: #fff;
    }
    .mIndexGlobal .mBanner__image .mBanner__right a:first-child {
        padding-bottom: .01rem;
    }
    .mIndexGlobal .mBanner__image .mBanner__right a .right__image {
        position: relative;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
        width: 2.01rem;
        height: 1.53rem;
    }
    .mIndexGlobal .mBanner__image .mBanner__right a .right__image div {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.4)));
        background: linear-gradient(transparent,rgba(0,0,0,.4));
    }
    .mIndexGlobal .mScroller__image {
        height: 2.45rem;
        overflow:hidden;
    }
    .mScrollX {
        width: 100%;
        height: 100%;
    }
    .mIndexGlobal .mScroller__image .image__container {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        padding: 0 .3rem;
    }
    .mIndexGlobal .mScroller__image .image__container .image__list {
        display: block;
        width: 2.02rem;
        height: 2rem;
        border-radius: .1rem;
        background-color: #fff9db;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: .11rem;
        overflow: hidden;
        position: relative;
    }
    .mIndexGlobal .mScroller__image .image__container .image__list .list__title {
        color: #fff;
        font-size: .28rem;
        position: absolute;
        bottom: 0;
        width: 2.02rem;
        height: .5rem;
        line-height: .5rem;
        background: rgba(0,0,0,.4);
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

`