<template>
  <n-space>
    <n-button quaternary> <router-link to="/">首页</router-link> </n-button>
    <n-button quaternary type="primary"> <router-link to="/H">home</router-link> </n-button>
    <n-button quaternary type="info"> Info </n-button>
    <n-button quaternary type="success"> Success </n-button>
    <n-button quaternary type="warning"> Warning </n-button>
    <n-button quaternary type="error"> Error </n-button>
    <n-button quaternary round> Default </n-button>
    <n-button quaternary round type="primary"> Primary </n-button>
    <n-button quaternary round type="info"> Info </n-button>
    <n-button quaternary round type="success"> Success </n-button>
    <n-button quaternary round type="warning"> Warning </n-button>
    <n-button quaternary round type="error"> Error </n-button>
    <n-button quaternary circle>
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="primary">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="info">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="success">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="warning">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="error">
      <template #icon>
        <n-icon><cash-icon /></n-icon>
      </template>
    </n-button>
  </n-space>
  <router-view></router-view>
</template>
<script>
// import { ElButton } from "element-plus";
// import "element-plus/es/components/button/style/css";
// import { createTheme, inputDark, datePickerDark } from "naive-ui";
// locale & dateLocale
// import { zhCN, dateZhCN } from "naive-ui";
export default {
  // components: {
  //   NConfigProvider,
  //   NInput,
  //   NDatePicker,
  //   NSpace,
  // },
  // setup() {
  //   return {
  //     darkTheme: createTheme([inputDark, datePickerDark]),
  //     zhCN,
  //     dateZhCN,
  //   };
  // },
};
</script>
<style lang="scss">
body {
  background: black;
}
.el-row {
  margin-bottom: 20px;
  background: red;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
