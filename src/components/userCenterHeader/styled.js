import styled from "styled-components";

export const MUserCenterHeader = styled.div`
    .mUserCenterHeader {
        position: relative;
        padding-left: .3rem;
        padding-top: .63rem;
        height: 2.63rem;
        background: #fff url(https://m.youxiake.com/static/img/img1.a81f2d5.png) 50% no-repeat;
        background-size: cover;
    }
    .mUserCenterHeader .header__box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .mUserCenterHeader .header__box .header__avatar {
        margin-right: .25rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background: #aaa url(data:image/png;base64,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) 50% no-repeat;
        background-size: cover;
    }
    .mUserCenterHeader .header__box .header__login {
        position: relative;
        font-size: .44rem;
        font-weight: 700;
        color: #000;
    }
    .mUserCenterHeader .header__box .header__login span {
        position: absolute;
        left: 0;
        bottom: -.7rem;
        width: 3.3rem;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .24rem;
        color: #fff;
        border-radius: .25rem;
        background: -webkit-gradient(linear,left top,right top,from(#ff6000),to(#ffa32c));
        background: linear-gradient(90deg,#ff6000,#ffa32c);
    }
    .mUserCenterHeader .header__box .header__login span:before {
        content: "";
        position: absolute;
        left: .5rem;
        top: -.09rem;
        width: .19rem;
        height: .1rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODlmNmFmNC03NzY4LWZlNDEtOTBkMi0yZDQ5N2NhMjc0ZTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ2QTE1NkU1OUFFMTFFOTlGOTRERTEzNkU2OEIzQjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ2QTE1NkQ1OUFFMTFFOTlGOTRERTEzNkU2OEIzQjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU3MWRiMjEtNmExYy0zNDRiLTgyM2QtMTRkYWU4NGU1Y2EyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjAwNjMxNjctMTVmNy04ODQxLWIxYzktNWQzODYxOTMxOThlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ef19/gAAALdJREFUeNpi/F8vwgABjGAEBPlAPAEmBBOEUWhqYeAXkO/CxIAJbBhIB0VAfBjdMDYgdiXRoA4gngpioBvmAsT8JBjUB8RVMA66YWlEGvIfakgxlA0GLEgKVIHYlwiD3gNxPBBvRpdAdlkrFpeig61ArIvNIGTD7IA4FI8hF4HYG4h9gPgpLkUgb/IB8Twsct+BeB0QLwHinchhg8+wGUAsBcSPgfguEJ8H4oNAfACIP5KSRgACDAC7vB1FY5VzWAAAAABJRU5ErkJggg==) 50% no-repeat;
        background-size: 100% 100%;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
`