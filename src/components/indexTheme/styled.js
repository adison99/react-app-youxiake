import styled from "styled-components";
export const MIndexTheme=styled.div`
    .mIndexTheme {
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
    .mIndexTheme .mBanner__image {
        display: felx;
        display: -webkit-flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0 .28rem;
        padding-bottom: .3rem;
        height: 4.66rem;
    }
    .mIndexTheme .mBanner__image a {
        display: block;
        color: #fff;
    }
    .mIndexTheme .mBanner__image .mBanner__left .left__image {
        width: 2.29rem;
        height: 4.66rem;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .mIndexTheme .mBanner__image .mBanner__right {
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
    .mIndexTheme .mBanner__image a {
        display: block;
        color: #fff;
    }
    .mIndexTheme .mBanner__image .mBanner__right .right__up .up__image {
        width: 4.63rem;
        height: 2.35rem;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .mIndexTheme .mBanner__image .mBanner__right .right__down {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .mIndexTheme .mBanner__image a {
        display: block;
        color: #fff;
    }
    .mIndexTheme .mBanner__image .mBanner__right .right__down .down__image {
        width: 2.3rem;
        height: 2.29rem;
        background-color: #fff9db;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }
    .mIndexTheme .mBanner__image .mBanner__right .right__down .down__image:last-child {
        width: 2.31rem;
    }
`