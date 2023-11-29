import Mock from 'mockjs'
import firstmock from './mockServeData/firstmock'
//定义mock请求拦截
Mock.mock('/first/getdata',firstmock.getStatisticalData())