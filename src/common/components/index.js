import Vue from "vue";
import BScroll from "../components/bscroll"
let componentMap=[
    BScroll,
]

componentMap.forEach(item=>{
    Vue.component(item.name,item);
})
