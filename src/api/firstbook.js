import http from "../utils/request";
export const firstApi=(currPage)=>http({
    method:"get",
    url:"/operation/mobile/ajax/getIndexSquare?currPage=",
    data:{
        currPage:currPage
    }
})