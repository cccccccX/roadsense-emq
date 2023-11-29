<template>
  <div>
    <el-row>
      <el-col :span="4.8" v-for="item in showrow1" style="padding-right: 10px">
        <el-card class="showrow1">
          <div slot="header">
            <span>{{ item.line1 + ":" }}</span>
          </div>
          <div v-for="o in 1" :key="o">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="showrow2">
      <el-col :span="12">
        <el-card>
          <div ref="echarts1" style="height: 260px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div ref="echarts2" style="height: 260px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="showrow3">
      <el-col :span="12">
        <el-card>
          <div ref="echarts4" style="height: 260px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div ref="echarts3" style="height: 260px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.showrow1 {
  font-size: 20px;
  margin-bottom: 18px;
  width: 280px;
  span {
    font-size: 15px;
  }
}

.showrow2 {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card{
    height: 260px;
    width: 97.5%;
  }
}

.showrow3 {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card{
    height: 260px;
    width: 97.5%;
  }
}
</style>


<script>
import {getfirstData} from "@/api";
import * as echarts from 'echarts';

export default {
  data(){
    return {
      showrow1:[
        {
          line1: "获取坑洼总数",
        },
        {
          line1: "处理坑挖数",
        },
        {
          line1: "用户有效反馈",
        },
        {
          line1: "当前待处理",
        },
        {
          line1: "当前待审核",
        },
      ],
    };
  },
  mounted() {
    getfirstData().then(({data}) => {
      console.log(data.firstdata);
      const echarts2 = echarts.init(this.$refs.echarts2);
      var echarts2option = {}
      const {orderData,oneData,threeData} = data.firstdata
      const xAxis = Object.keys(orderData.data[0]);
      const xAxisData = {
        data: xAxis,
      }
      echarts2option.xAxis = xAxisData;
      echarts2option.legend = xAxisData;
      echarts2option.yAxis = {};
      console.log(xAxis);
      echarts2option.series = [];
      echarts2option.xAxis = { data: orderData.date };
      xAxis.forEach((key) => {
        echarts2option.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });
      echarts2option.title = {
        text: "道路健康指数"
      }
      echarts2option.tooltip = {
        trigger: "axis",
      };
      console.log(echarts2option)
      echarts2.setOption(echarts2option);

      const echarts1 = echarts.init(this.$refs.echarts1);
      const eacharts1Option = {
        title: {
          text: "各街道坑洼数量统计"
        },
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: oneData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "湖州街",
            data: oneData.map((item) => item.street1),
            type: "bar",
          },
          {
            name: "西文街",
            data: oneData.map((item) => item.street2),
            type: "bar",
          },
          {
            name: "凤起路",
            data: oneData.map((item) => item.street3),
            type: "bar",
          },
        ],
      };
      echarts1.setOption(eacharts1Option);
      const echarts4 = echarts.init(this.$refs.echarts4);
      const eacharts4Option = {
        title: {
          text: "近日维护"
        },
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: oneData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#c0392b",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#c0392b",
              },
            },
          },
        ],
        color: ["#f39c12", "#f1c40f","#e74c3c"],
        series: [
          {
            name: "湖州街",
            data: oneData.map((item) => item.street1),
            type: "bar",
          },
          {
            name: "西文街",
            data: oneData.map((item) => item.street2),
            type: "bar",
          },
          {
            name: "凤起路",
            data: oneData.map((item) => item.street3),
            type: "bar",
          },
        ],
      };
      echarts4.setOption(eacharts4Option);
      const echarts3 = echarts.init(this.$refs.echarts3);
      const eachrts3Option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: threeData,
            type: "pie",
          },
        ],
      };
      echarts3.setOption(eachrts3Option);
    })
  }
}
</script>