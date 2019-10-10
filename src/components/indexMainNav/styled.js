import styled from "styled-components";
export const MIndexMainNav =styled.div`
    .mIndexMainNav {
        padding-top: .3rem;
        padding-bottom: .1rem;
        width: 7.5rem;
        font-size: 0;
        border-bottom: 1px solid #eee;
        background: #fff;
    }
    .mIndexMainNav .mIndexMainNav__box {
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
        margin-bottom: .2rem;
        width: 1.5rem;
        font-size: .24rem;
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mIndexMainNav .mIndexMainNav__box div {
        display: inline-block;
        margin-bottom: .05rem;
        width: .7rem;
        height: .7rem;
        background: 50% no-repeat;
        background-size: cover;
        border-radius: 50%;
        overflow: hidden;
    }
    .mIndexMainNav__boxIn{
        backgroundColor: rgb(255, 255, 255);
    }
`