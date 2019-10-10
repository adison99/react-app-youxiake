import styled from "styled-components"

export const MSearch=styled.div`
.mSearch {
    overflow-x: hidden;
}
.mSearch .mHead__search {
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    display: -webkit-inline-flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #f4f4f4;
    padding: 0 .19rem 0 .31rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.mSearch .mHead__search .search__back__arrow {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAZCAMAAAA2Re/AAAAASFBMVEUAAABtbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW0kyZ89AAAAF3RSTlMADwYWCdrewqnSzLMdyJwpH+XVt7a4bTw088kAAABgSURBVBjTdc/BGkAgEEXhQkUhhPv+b6oNd6rP7P7NzBklRt9RysNSvQcCNQFukLqoAzg/zQYIpbpXmwXGH8W91soYW0iZzI7kIh6lGdEG851U2Qlrn62Fl9a+clLCDuYBH6oHCukWIp0AAAAASUVORK5CYII=) no-repeat 50%;
    background-size: .14rem .25rem;
    width: .14rem;
    height: .25rem;
}
.mSearch .mHead__search .search__box {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
}
.mSearch .mHead__search .mHead__search--icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAdVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkLL5WPAAAAJnRSTlMAB8OwqRIwHuTf00W7tpx9bGdeWSok+u/ZzIqFUgz1mpWRdDmfF42tN1MAAADoSURBVCjPhZHnboMwAAaNjcPeMwQy23v/R6xURnHc0vvDSSeLDyxWdHRR6lZ54hdOHyzEoxUHQGZF8XRbSD6N5kgYvMXzjq7e1zP+SWxMinb39hRfiz0uwc8geB/ak60qN90fcGbzZjORlLPkuMKiRM3yILfriXAdWNl1Amepo7CB6ft5o7Bjs35xxsWuEfEsLwK73rcjHdF7dFqaRQv7cEq8eUBqxhG83UAe+1hBZSxEbhes72D+3JcPqqy1bqIUyBPOxsiBDbcWQppZ6FL116svn/VyhaEj/iY+zsl/udcHWeGLoxx+AY5hFJejyfaTAAAAAElFTkSuQmCC) no-repeat;
    width: .29rem;
    height: .29rem;
    background-size: .29rem .29rem;
    position: absolute;
    right: .15rem;
    top: .3rem;
    -ms-flex-item-align: center;
    align-self: center;
}
.mSearch .mHead__search .search__box input {
    border: none;
    outline: none;
    -webkit-appearance: none;
    padding: .1rem 0 .1rem .2rem;
    font-size: .28rem;
}
.mSearch .mHead__search .mHead__search--inputBox {
    padding: .1rem 0 .1rem .54rem;
    width: 5.77rem;
    height: .6rem;
    border: 1px solid #eee;
    border-radius: .1rem;
    font-size: .28rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.mSearch .mHead__search .mHead__search__close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAeFBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZma6PfNKAAAAJ3RSTlMAB9jFQTYob2PvVQ3fIuOxfjAZ8uaUR5hNhS3LnzjRv615XB/1jBXGF8RlAAABRklEQVQ4y92T7WKCIBSGRZdZOTO1TJd9rp77v8PhdKCh4c9t7y84PBw4vAfnF+stjqup7AFgO409gxtOpLdQOE4OFzt7aXOuIbCxV1g3Iw92lncArx2KEDav2BJC8TNJUtJknE0WveWN3mpKuE8H7+BjDPZg348EsB4zw3ysGPIRM2Izmg9GLwM5tDnm7WyV2Os2zSkhWjkjuqV83jpmqOmgNk0qfdDMZMxL6v6y9+LUzo3h0JghWc9LVJceTp7UKVc3871TTRdymMk9FfjtSoHSXDd5Is8/1rUG3xW8NwtLcLfF/V7kEVRNbAaltM3Xe1v4qH7KyuWs4AZ8gkWqvZ3jvoZXHTggtMALlp3M/wl+jMM+lN2OVZ9hCN7XdneUcSwdIcSjD4taVaS6WW0mzLIoowsjA1GE8TWuC1oFuodbhTvn7+oLBUgsl3oyv+IAAAAASUVORK5CYII=) no-repeat 50%;
    background-size: .44rem .44rem;
    width: .44rem;
    height: .44rem;
}
.mSearch .hot__search {
    padding: .42rem .3rem .51rem 0;
}
.mSearch .hot__search .hot__search--title {
    color: #888;
    font-size: .28rem;
    font-weight: 700;
    padding-bottom: .32rem;
    padding-left: .3rem;
}
.mSearch .hot__search .scroll__H__view {
    width: 100%;
    padding-left: .3rem;
}
.mSearch .hot__search .xs-container .hot__search--image {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.mSearch .hot__search .xs-container .hot__search--image .hot__search--imagebg:first-child {
    margin-left: 0;
}
.mSearch .hot__search .xs-container .hot__search--image .hot__search--imagebg {
    width: 1.39rem;
    height: 1.39rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff9db;
    margin-left: .15rem;
}

`