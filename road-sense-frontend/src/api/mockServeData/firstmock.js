// mock数据模拟
import Mock from 'mockjs';

// 图表数据
let List = [];
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for (let i = 0; i < 6; i++) {
            List.push(
                Mock.mock({
                    湖州街: Mock.Random.float(100, 8000, 0, 0),
                    西文街: Mock.Random.float(100, 8000, 0, 0),
                    凤起路: Mock.Random.float(100, 8000, 0, 0),
                })
            );
        }
        return {
            code: 20000,
            firstdata: {
                // 饼图echarts3
                threeData: [
                    {
                        name: '板脚坑洼',
                        value: 2999,
                    },
                    {
                        name: '裂缝坑洼',
                        value: 5999,
                    },
                    {
                        name: '未知',
                        value: 1500,
                    },
                ],
                // 折线图echarts2
                orderData: {
                    date: [
                        '1月',
                        '2月',
                        '3月',
                        '4月',
                        '5月',
                        '6月',
                    ],
                    data: List,
                },
                // 柱状图1-echarts4 and echarts1
                oneData: [
                    {
                        date: '1月',
                        street1: 100,
                        street2: 200,
                        street3: 300,
                    },
                    {
                        date: '2月',
                        street1: 200,
                        street2: 500,
                        street3: 600,
                    },
                    {
                        date: '3月',
                        street1: 300,
                        street2: 550,
                        street3: 750,
                    },
                    {
                        date: '4月',
                        street1: 400,
                        street2: 800,
                        street3: 900,
                    },
                    {
                        date: '5月',
                        street1: 500,
                        street2: 550,
                        street3: 650,
                    },
                    {
                        date: '6月',
                        street1: 600,
                        street2: 770,
                        street3: 870,
                    },
                ],
            },
        };
    },
};
