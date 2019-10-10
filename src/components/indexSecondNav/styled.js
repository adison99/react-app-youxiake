import styled from "styled-components";
export const MIndexSecondNav =styled.div`
    .mIndexSecondNav {
        height: 1.36rem;
        background: #fff;
        overflow: hidden;
    }
    .mScrollX {
        // width: 100%;
        // height: 100%;
    }
    .mIndexSecondNav .mIndexSecondNav__container {
        display: inline-block;
        padding: 0 .1rem;
        height: 1.36rem;
        font-size: 0;
        white-space: nowrap;
    }
    .mIndexSecondNav .mIndexSecondNav__container .container__box {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 1.6rem;
        height: 1.36rem;
    }
    .mIndexSecondNav .mIndexSecondNav__container .container__box img {
        margin-bottom: .1rem;
        width: .58rem;
        height: .58rem;
    }
    .mIndexSecondNav .mIndexSecondNav__container .container__box span {
        font-size: .24rem;
        color: #000;
    }

`