export  default {
    path:"/bookshop",
    component:_=>import("../../pages/bookshop"),
    name:"bookshop",
    meta:{
        flag:true,
        requiredAuth:false
    }
   
}