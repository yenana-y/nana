import http from "../utils/request";
export const booksSearch=(bizType,query)=>http({
    method:"get",
    url:"/api-search/Suggest/Suggest/suggest",
    data:{
        bizType:bizType,
        query: query
    }
})

export const booksList=()=>http({
    method:"get",
    url:"/api-search/Suggest/Suggest/app"
})

// bizType: wap
// query: 啦
//https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query=%E7%9D%A1
//https://m.kongfz.com/api-search/Suggest/Suggest/suggest?bizType=wap&query=%E7%9D%A1