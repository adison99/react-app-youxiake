import styled from "styled-components";
export const MIndexApp = styled.div`
.mIndexApp {
    position: relative;
    width: 7.5rem;
    height: 1.5rem;
    background: url("https://m.youxiake.com/static/img/img1.7930e42.png") 50% no-repeat;
    background-size: 7.5rem 1.5rem;
}
.mIndexApp .mIndexApp__container {
    position: absolute;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    left: .3rem;
    top: 0;
    width: 6.55rem;
    height: 1.5rem;
}
.mIndexApp .mIndexApp__container, .mIndexApp .mIndexApp__container .container__box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}.mIndexApp .mIndexApp__container, .mIndexApp .mIndexApp__container .container__box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}.mIndexApp .mIndexApp__container .container__box .box__logo {
    margin-right: .25rem;
    width: .9rem;
    height: .9rem;
    background: url("https://m.youxiake.com/static/img/logo.681ad4b.png") 50% no-repeat;
    background-size: .9rem .9rem;
}
.mIndexApp .mIndexApp__container .container__box .box__context {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}.mIndexApp .mIndexApp__container .container__box .box__context .context__text1 {
    margin-bottom: .1rem;
    font-size: .3rem;
    color: #fff;
}.mIndexApp .mIndexApp__container .container__box .box__context .context__text2 {
    font-size: .26rem;
    color: #fff;
}
.mIndexApp .mIndexApp__container .container__button {
    width: 1.64rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: .32rem;
    color: #fff;
    border: 1px solid #fff;
    border-radius: .1rem;
}.mIndexApp .mIndexApp__close {
    position: absolute;
    right: .1rem;
    top: .1rem;
    width: .26rem;
    height: .26rem;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzJmODZmZS01ZGI3LTQ1MzgtOTk5MC1iNTJhYTc0NmE4YTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODlCNzYwNUE4MEJFMTFFOEI4MkJCOUNCQzdFOERBNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODlCNzYwNTk4MEJFMTFFOEI4MkJCOUNCQzdFOERBNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE0N2E2MDQtZmM1Zi1hNjQzLTllOGYtNWViNjg2OTQ5ZTgyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Njc4MDE3ZTItODAwNC0xMWU4LTk4MzItZGE5YThmODNkZTNjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ganiOAAAAaFJREFUeNqslj1LA0EQhpegtZ2CQSyMxWmjpdqIojkxyQU1NjY21iISEEVEMEgsxNLG0iZ/xEI7/4HxC1EUgx9NPN+FHBmH+5j1buApbnd2nrvdvb1Truvm3XaUgEqIPnDbqnuUUko1VDtqwFHxoxdcgXTr+sWzz7l/oxDjSbrJk+g41u00wU5A1gPuSI2q18cTs0yWM5CkwQ0Ze0D7/QY4TOYIJANMUuU5QQO5zA6R9IMHknvolxd2lwUmy/vkZECd5FSC6kVNSY7JiqRvEDyRvv2wWpJF5rtxFHSBN9K2F1VHuqOKpOgXe08qkhom78gYeCaCJliTjk8ZHCuX4Jtc/4AL6WCpyAJ1cnbp6ADXwBZVEDx2hk3ZKphlG2Qq7hoNgUdScIf0lQxe6lDRMNvCWz45C0w2byqywAcpUDY4QWypSEs+ycBtwTouM1k2SqSPlUbEdAXB12wySGSxNSn/48O3FCTzEkbAK0nYiPEpX2SyaU80Dt5Jx3oCf0B8Gmd04y5p2Ezwd2uF1K3pY+QEdIJ7cKqSi3PQBBPg7FeAAQBjHv1m4mEN9AAAAABJRU5ErkJggg==") 50% no-repeat;
    background-size: .26rem .26rem;
}
`