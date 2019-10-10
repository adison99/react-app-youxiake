import styled from "styled-components";
export const MIndexCity=styled.div`
    .mIndexCity {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 99999;
    }
    .mIndexCity .mIndexCity__header {
        position: relative;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .34rem;
        color: #000;
        background: #f7f7f7;
    }
    .mIndexCity .mIndexCity__header i {
        position: absolute;
        left: .3rem;
        top: .27rem;
        width: .36rem;
        height: .34rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YzExZjVjMC0yMzg3LWM5NDctOGJkZS1hODQ2N2YyMjFiNTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk1OERGRDIzRkY1MTFFOTkyNTZBOTBEMUJBMEZFMEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk1OERGRDEzRkY1MTFFOTkyNTZBOTBEMUJBMEZFMEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTc2NDJmZmUtNjIyZi1kMzQ5LWFjMGYtYTNiMTlhMjJlMWM2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVjMTFmNWMwLTIzODctYzk0Ny04YmRlLWE4NDY3ZjIyMWI1OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnkeRhMAAADLSURBVHja7NY7CsJAFIXh0QW4I2OjhSC+EhOtLHSvNmrpDjS2lj4wngtjE2YaUe4R7oV/SJrwEQZmnPt8emiPTmjllCdHD1T5SiaMtGPCyHvChCkMYxjDGMYwP56ECeP8wVgRJNeYfgPLBbUcx5RNLE9HNAI6kFjOaC0PbXQNbOqFpm4QQc0ZUYUmahhB5YaqzSiCmmmixoyoSQB1R5kmavovqJs2KvWIOiplQ8mf62iisgBqo30yZ35jv0FHhutCF209Zvmtj74EGAAkxcV9eHD3sAAAAABJRU5ErkJggg==) 50% no-repeat;
        background-size: .32rem .32rem;
    }
    .dfhTAn{
        overflow:hidden;
    }
    .mIndexCity  .mask__scroller {
    touch-action: auto;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    }
    .mIndexCity .mIndexCity__body {
        padding-left: .3rem;
        padding-top: .2rem;
        font-size: 0;
    }
    .mIndexCity .mIndexCity__body .body__title {
        height: .7rem;
        line-height: .7rem;
        font-size: .28rem;
        color: #888;
    }
    .mIndexCity .mIndexCity__body .body__list {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: .22rem;
        margin-bottom: .2rem;
        width: 2.16rem;
        height: .76rem;
        font-size: .28rem;
        color: #353535;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: .38rem;
        background: #f4f4f4;
    }
    .mIndexCity .mIndexCity__body .body__list--location:before {
        content: "";
        display: inline-block;
        margin-right: .1rem;
        width: .22rem;
        height: .26rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YzExZjVjMC0yMzg3LWM5NDctOGJkZS1hODQ2N2YyMjFiNTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzAyQ0Y0Q0IzRkY1MTFFOThDNDU4NTJDOTE2RTI0QUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzAyQ0Y0Q0EzRkY1MTFFOThDNDU4NTJDOTE2RTI0QUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZTc2NDJmZmUtNjIyZi1kMzQ5LWFjMGYtYTNiMTlhMjJlMWM2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVjMTFmNWMwLTIzODctYzk0Ny04YmRlLWE4NDY3ZjIyMWI1OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjvRSwIAAAICSURBVHjarJTLK4RRGMaPcSsholw2Vq5lQblEbGaB9SzZzEKJDLkkpSzwD7CRFblTxmVjgyJh5RJKWRFCFkZkQeM5er46HefjG7z168z3nud95vvO5RXCPpKBB/jBHQiSO+bkXJoIMbzgnEbv4ACskwPm5NwNqHdiGANGWfQAukERiFI00aCYc/fUjrHWGOFgksIZkOHgRaRmgjWz9PgSfRSMAFcIyxYGhlnbp0/mceIUxIrQQy7DCT1y1d33M1lmU1gDekmNjaacHgsgSSZqQQDsGsTxYFo5akFlD+IN+j3wCOrkwzzFPoNwWNmYQlBAU2sv9Gjh3JxQ1kZfhmzmlw0GK5zLsVmOY7n7KUzeaKIijosG4yWOJVr+mmOqNH7lQ6QmeuKYaDBO4BjQ8tZF+vTc5utXaSL5Jc/gCmQq+SzmXpSvtaKaXtsuGr8Btya6Bc0gnf1hEAyBfeZ81KjhpteWfChlw7mwuXGyIR0pR+2IOT1k7SW9SqxEJ4savrlZFaDym2bTQI8OtWdEgDO2w/xfXOl81p6ZGlEp//HQ5iTYRSLXPUgPY3go2ABxDpvPGms8P4lrKdxRzqsp5B9vUut1+nn1LNizWZY4HimpaQp1Q3wsXNVupUvpFe3il9Go9FgrZplrFX8M682nwDh/t4l/ii7l5vWIf45+MOBU/CHAAMApj6QrqhtJAAAAAElFTkSuQmCC) 50% no-repeat;
        background-size: 100% 100%;
    }
    .mIndexCity .mIndexCity__body .body__list--select {
        border: 1px solid #fed61a;
        background: #fff7d1;
    }
`