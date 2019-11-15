import http from "../utils/request";
export const bookshopApi=(currPage)=>http({
    method:"get",
    url:"/operation/mobile/ajax/getChannelSquare?channelId=1081&currPage=",
    data:{
        currPage:currPage
    }
})