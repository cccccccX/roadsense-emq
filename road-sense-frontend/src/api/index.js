import http from "@/utils/request";

//请求首页数据
export const getfirstData = () =>{
    return http.get('/first/getdata');
}