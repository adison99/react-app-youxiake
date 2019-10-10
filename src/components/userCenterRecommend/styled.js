import styled from "styled-components"

export const MUserCenterRecommend=styled.div`
.mUserCenterRecommend, .mUserCenterRecommend .mUserCenterRecommend__head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
}
.mUserCenterRecommend {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.mUserCenterRecommend .mUserCenterRecommend__head {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 1.12rem;
    font-size: .32rem;
    font-weight: 700;
    color: #000;
}
.mUserCenterRecommend .mUserCenterRecommend__head:before {
    content: "";
    display: inline-block;
    margin-right: .1rem;
    width: .46rem;
    height: .28rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAcCAYAAAAeC42RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODlmNmFmNC03NzY4LWZlNDEtOTBkMi0yZDQ5N2NhMjc0ZTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZFODgxM0M5N0JCMTFFOTlGNUZCQ0EyRDdDREU4ODgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZFODgxM0I5N0JCMTFFOTlGNUZCQ0EyRDdDREU4ODgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU1RENCNDlCQTk3RTkxMUI0NjZFNEVENzE2NzY1QzUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MWEzMTZmNi04ZWQ4LWM4NGMtYTY3Mi00ODdiNWMxNThkYjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz60XzrGAAADXUlEQVR42syYy2oUQRSGT9X0wp1PoEhWgkshIy4EF+oDZCMaRBFEBUFExMuEkYyCvoYiQTcuhOAEQXCjMgtFgqgEiQsfYBZm5XT5V1dV16270z3TwhScrgudyld/nzpVZ5hYWiLiPLZOJ267Y64xpkwWU4flwksi8Rc2IUp1bfq5pU6d7sFf3UZjGfUC7BdsDfYQ9ieh+Sx7IcA66qMkZDd7HIDdgZ2EHUvmFHoI1q76goY7X8BhWC+ZO2jiQwB2iQFSaGLmcmePs8l8QUNpppUWLrCW3S5gXzJXSjMonaksIY3ipm1elYFAbPMW/qnc9V9hCAe0CTs9HTSH0jJC6ShFzIlWTI9z/RnY01kVvwdVHuQ9xg6hv4Ya8YxeNFKatLokQyFXKpNW3ff3j3g+5jNDCz2pcCYXol84HkWPjlI6U9IozR11g5rxEdqnMLCTtKJ0WBg76PUvvnJ81EBDaSGjB1lV813pKp2aTTnC8AkMjGUnaR1ala3qOK1DHoWwZN0ih5aKC0ALQE/GZpLkP0CTPpZVuTR01dY+TV0L58K66ueLiqCbgvcwwaDGe324ypOsdflNttdipZnahHmwLmirhRRCNwFX0GmqLlXV0KtZ68pbX+nMpxl8Oo3VDVVXroONCJ8WMXRdcF/pcngLffVdCL2BORb9DVimeragEd4FdDoug0qmUjqGt9DX3sfQRIvFG7BIdQbotFTpOuDVStu+hb4+CjfiBmAWfdhK/5YTVCq9G3gPYIPIJWL4PpILBX3jc3giKugw5JWrruP0ZFxn0yWVShf5c5HSN7+UQ5tY7B7dzF2IDnk1lS4Dj0NeMbxV+tZmeDUFtPRp4wE8iM35Bmzk01Xg5XHah7dK+wU5In9tlRb+KZiPeZeoxkqH4LsfLgreh777zbnty8SWjihBWTk0cRunSw6XuuDLtU9EokBpL6M/Z7N8EWQwps2djTg9tAIXYqXmMe5Dr2yF4PvzFCtPcllRNjMztJJAiIXo7uxbgdKGzLPfXsZCPMhgMoNPM0DTTND629GPxtD3t4vmemZzQncBzCQDMgloBdoovpqHp1pKlxZ53f3kfQ0L/wHt1qCN4s8BeSZLeAWIhfgOO98QWpYd+QsT7JH+uUwC/wTwAHa8TWhZ/gkwAA5lJ4yt5mk7AAAAAElFTkSuQmCC) 50% no-repeat;
    background-size: cover;
}
.mUserCenterRecommend .mUserCenterRecommend__head:after {
    content: "";
    display: inline-block;
    margin-left: .1rem;
    width: .46rem;
    height: .28rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAcCAYAAADxyeavAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplODlmNmFmNC03NzY4LWZlNDEtOTBkMi0yZDQ5N2NhMjc0ZTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRENTlGMTU5N0JCMTFFOUI3QjNCMkVGRjE3QTJEMjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRENTlGMTQ5N0JCMTFFOUI3QjNCMkVGRjE3QTJEMjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU1RENCNDlCQTk3RTkxMUI0NjZFNEVENzE2NzY1QzUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MWEzMTZmNi04ZWQ4LWM4NGMtYTY3Mi00ODdiNWMxNThkYjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VRpuiAAADeklEQVR42syYwW7TQBCGZ4wP3HgCEOoJCSQOlZK0VKBKUHrijKBCPAaIoEgNleA1QAjBlbZQngDUAxeEBEIIDjxADvREvfy73vXu2LtO0uSQlSa7dmL7m98zY0/41v4xkSJjys5iXahqHf1eG9ntMeNd5xJ++A+GaxZ2dtuVFcFcnMZhD7DYwrwE+w17BduB/c1pcccZYt7HvFoKZD7Owx7CNmBX8wUGPwBv12yxv8N2sQzr5wsJTtkBILvEyscjh+zm426+eOBQnK3iKoS28nsnzuYLpzhDcVcNOKgMZu1+ynr7VzaHi+pK8BWGEkFfYLdPDp5BcSCxNraQHKztd0Z+fjGr8o9gT4wWbES6aEsZ6hy9mVrxqvbqMpmVaru6LOP/Ez6fZTODs9/Bfj1o1Pju5URVOVUqbhR1imeByrWZs0Osb2LHUT4zuJKlzN6BC5OVQyiudFUhr26VqaHihUvUQ+y+gR0jvZGfFNxCUsKBH+EB+93lINkCcHKhEgKTD5EKXCuvAK4AfjxyJ8lnUbzFgZ3xMU5dDxgCh3ehcqwBPi18H7BDRRI04sAA8/NK9ZVOmb4NxdnmtTs4si6diYJPA9/HSYYVbNoBDb5dga+uhOFiY5wR40VT5br6ZRghORHjqgk+KXwFLmCbDgxUCH5lrQ7+AWAdmZQp9Y1Th/gtwItRCiwfD85DBpXiiNokQsWDr11rghN14kkZU58BXiQVnwS+DxuWt5CpxYEa+LoEJ4AzFBfArfGOUGlXfBy8B69ejqIO6IdRECrX61WlBK+Xw7T6to4fjyZJxDwV4+58LQ4I8L3VFnBXq8PHPJNsxUxyTqZ4Cl4kZ4sDAxWCr9TBGeA6xt1xWa12B73jFDHeBl/W8RpsxAER43s9AY6eM3vvFVfyaVntEy9eUyteh5d1PO2AAK+/jZXNMvVKYTkNTpmv44kH0KTwW9E63nRA1HE9dnsbQatjxj3vkKp1Qm6dBcl5cnAH/1g0uXEHRHImVNfjnC9H7liOdUUzgxsZcP0lCrqrcLZsUfDd3qbraEL7Izof934uuyLEOAOcZgK395C+CwGlA3HF0+Ol7zFDJ9g1FLqRmAu4g99uRMAY8LfdzdT5dEv42Z9EOPAR67mBO/jXsDu6icZ1dFB+g92fUnE3jvQ/WbCn9q85Df1Tvx/B1ucJrsd/AQYAIkYadQdDUtwAAAAASUVORK5CYII=) 50% no-repeat;
    background-size: cover;
}
.mUserCenterRecommend .mUserCenterRecommend__body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 6.9rem;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 3.35rem;
    height: 3.69rem;
    overflow: hidden;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__pic {
    position: relative;
    width: 3.35rem;
    height: 1.88rem;
    border-radius: .07rem;
    background: #fff9db 50% no-repeat;
    background-size: cover;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__pic .line__type {
    position: absolute;
    left: 0;
    top: .12rem;
    padding-left: .1rem;
    padding-right: .2rem;
    height: .32rem;
    line-height: .32rem;
    font-size: .22rem;
    color: #fff;
    border-radius: 0 .16rem .16rem 0;
    background: rgba(0,0,0,.6);
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: .1rem;
    padding: 0 .1rem;
    height: .67rem;
    line-height: .34rem;
    font-size: .28rem;
    color: #333;
    overflow: hidden;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__msg {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    margin-top: .2rem;
    padding: 0 .1rem;
    width: 3.15rem;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__msg .line__price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    font-size: .24rem;
    color: #999;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__msg .line__price span {
    font-size: .24rem;
    color: #ff7100;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__msg .line__price b {
    font-size: .3rem;
    color: #ff7100;
}
.mUserCenterRecommend .mUserCenterRecommend__body .mUserCenterRecommend__line .line__msg .line__days {
    padding: .03rem .1rem;
    font-size: .24rem;
    color: #999;
    background: #eee;
}

`