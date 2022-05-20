<template>
  <n-space class="login-inquiry" justify="center" align="center">
    <div class="login-content">
      <div class="title">无法访问</div>
      <div class="content">
        <span>访问</span>
        <span class="visit">{{ route.query.name }}</span>
        <span>需要登录，确认要去登录吗?</span>
      </div>
      <div class="footer">
        <n-space justify="end">
          <n-button type="error" @click="handleNegativeClick">取消</n-button>
          <n-button @click="handlePositiveClick">确认</n-button>
        </n-space>
      </div>
    </div>
  </n-space>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
function handleNegativeClick() {
  router.go(-1);
}
function handlePositiveClick() {
  router.replace({
    path: "/login",
  });
}
</script>
<style scoped lang="scss">
.login-inquiry {
  height: 100vh;
  .login-content {
    width: 400px;
    border: 1px solid var(--n-border-color);
    padding: 10px;
    .title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #d03050;
    }
    .content {
      margin-bottom: 16px;
      font-size: 16px;
      .visit {
        color: #d03050;
        margin: 0 5px;
        text-decoration: underline;
      }
    }
  }
}
</style>
