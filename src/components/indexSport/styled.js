import styled from "styled-components";
export const MIndexSport =styled.div`
    .mIndexSport {
        margin-top: .2rem;
        width: 7.5rem;
        height: 4.28rem;
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
    .mScrollX {
        width: 100%;
        height: 100%;
    }
    .eUuYmS{
        overflow:hidden;
    }
    .mIndexSport .mScroller__image .image__container {
        height: 3.17rem;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        padding: 0 .3rem;
    }
    .mIndexSport .mScroller__image .image__container .image__list {
        display: block;
        width: 4.09rem;
        height: 3.13rem;
        margin-right: .15rem;
    }
    .mIndexSport .mScroller__image .image__container .image__list .list__image__container {
        width: 4.09rem;
        height: 2.31rem;
        background-color: #fff9db;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: .1rem .1rem 0 0;
    }
    .mIndexSport .mScroller__image .image__container .image__list .list__desc__container {
        height: .76rem;
        -webkit-box-shadow: 0 0 0.2rem 0.01rem rgba(0,0,0,.15);
        box-shadow: 0 0 0.2rem 0.01rem rgba(0,0,0,.15);
        border-radius: 0 0 .1rem .1rem;
        font-weight: 700;
        font-size: .32rem;
        color: #333;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: .09rem .2rem 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`