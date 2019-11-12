export  default {
    path:"/sell",
    component:_=>import("../../pages/sell"),
    name:"sell",
    meta:{
        flag:true,
        requiredAuth:false
    }
}