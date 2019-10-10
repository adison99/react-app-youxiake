import { handleActions } from "redux-actions";

const defaultState = {
    navs: [],
    news: [],
    local_ad: [],
    theme: [],
    post: [],
    tags: [],
    products: [],
    page: 1,
    className:0,
}
export default handleActions({
    homeData_action: (state, action) => {
        let newHomeData = Object.assign({}, state);
        newHomeData.navs = action.payload.navs;
        newHomeData.news = action.payload.news;
        newHomeData.local_ad = action.payload.local_ad;
        newHomeData.theme = action.payload.theme;
        newHomeData.post = action.payload.post;
        newHomeData.tags = action.payload.tags;
        return newHomeData;

    },
    homeDataList_action: (state, action) => {
        let newHomeDataList = Object.assign({}, state);
        if (action.payload.type) {
            newHomeDataList.products = [...newHomeDataList.products, ...action.payload.data.products];
            newHomeDataList.page++;
        }else{
            newHomeDataList.products = action.payload.data.products;
            newHomeDataList.className=action.payload.ind;
        }
        return newHomeDataList;
    }
}, defaultState)