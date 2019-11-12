export  default {
    path:"/firstbook",
    component:_=>import("../../pages/firstbook"),
    name:"firstbook",
    meta:{
        flag:true,
        requiredAuth:false
    }
}