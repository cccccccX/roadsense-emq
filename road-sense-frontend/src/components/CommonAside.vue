<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <h3>RoadSense</h3>
        <el-menu-item  @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.name">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang="less" scoped>
.el-menu {
  height: 100vh;
  h3 {
    color: white;
    text-align: center;
  }
}
.el-col-12 {
  width: 100%;
}
</style>


<script>
export default {
    data(){
        return {
          menuData:[
            {
              path: "/first",
              name: "first",
              label: "首页",
              icon: "monitor",
            },
            {
              path: "/person",
              name: "person",
              label: "个人中心",
              icon: "user",
            },
            {
              path: "/manage",
              name: "manage",
              label: "坑洼管理",
              icon: "receiving",
            },
            {
              path: "/feedback_manage",
              name: "feedback_manage",
              label: "反馈管理",
              icon: "chat-dot-square",
            },
            {
              path: "/repair",
              name: "repair",
              label: "维护记录",
              icon: "document",
            },
            {
              path: "/myfeedback",
              name: "myfeedback",
              label: "我的反馈",
              icon: "postcard",
            },
          ],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item) {
        if (
            this.$route.path !== item.path &&
            !(this.$route.path === "/first" && item.path === "/")
        ) {
          this.$router.push(item.path);
        }
      },
    }
}
</script>

