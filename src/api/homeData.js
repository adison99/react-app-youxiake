import http from "@utils/http";

export const main_nav=(random=new Date().getTime())=>http.get("/api/api/index",{
    random:random,
})
export const main_list=(tag_id=0,class_region_id=2,page=1)=>http.get("/api/api/lines",{
    class_region_id:class_region_id,
    tag_id:tag_id,
    page:page
})
