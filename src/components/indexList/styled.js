import styled from "styled-components";
export const MIndexList =styled.div`
    
     .mIndexLine__body .body__line {
        position: relative;
        display: block;
        margin-bottom: .2rem;
        width: 7.5rem;
        height: 4.84rem;
        font-size: 0;
        background: #fff;
        overflow: hidden;
    }
    .mIndexLine__body .body__line .line__pictrue {
        width: 100%;
        height: 3.6rem;
        position: relative;
        background: #fff9db 50% no-repeat;
        background-size: cover;
    }
    .mIndexLine__body .body__line .line__pictrue .line__type {
        position: absolute;
        left: .26rem;
        top: .32rem;
        padding: 0 .2rem;
        height: .44rem;
        line-height: .44rem;
        color: #fff;
        border-radius: .22rem;
        background: rgba(0,0,0,.4);
    }
    .mIndexLine__body .body__line .line__pictrue .line__box {
        position: absolute;
        right: .1rem;
        bottom: .2rem;
        font-size: 0;
    }
    .mIndexLine__body .body__line .line__pictrue .line__box .line__price {
        padding: 0 .15rem;
        min-width: 1.1rem;
        height: .36rem;
        line-height: .36rem;
        text-align: center;
        font-size: .26rem;
        color: #fff;
        background: #ffc31a;
    }
    .mIndexLine__body .body__line .line__pictrue .line__box .line__day {
        height: .36rem;
        line-height: .36rem;
        text-align: center;
        font-size: .26rem;
        color: #ffc112;
        background: #fff;
    }
    mIndexLine__body .body__line .line__content {
        padding: 0 .25rem;
        height: 1.24rem;
    }
    .mIndexLine__body .body__line .line__content .line__title {
        padding-top: .15rem;
        font-size: .28rem;
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .mIndexLine__body .body__line .line__content .line__desc {
        margin-top: .15rem;
        width: 100%;
        font-size: .26rem;
        color: #b4b4b4;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .mIndexLine__body .body__line .line__content .line__desc span {
        display: inline-block;
        margin-right: .1rem;
        padding: 0 .1rem;
        height: .35rem;
        line-height: .35rem;
        vertical-align: 1px;
        text-align: center;
        font-size: .26rem;
        font-style: normal;
        color: #fff;
        background: #f68b6e;
    }
`