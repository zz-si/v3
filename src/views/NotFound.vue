<template>
  <div class="not-found">
    <div class="not-found-container">
      <n-result status="418" title="404 资源不存在" description="生活总归带点荒谬">
        <!-- <template #icon>
          <div class="icon">自定义图标</div>
        </template> -->
        <template #footer>
          <n-button><router-link to="/">首页</router-link></n-button>
        </template>
      </n-result>
    </div>
  </div>
</template>
<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .not-found-container {
    width: 500px;
    padding: 10px;
    border: 1px solid rgb(216, 215, 215);
  }
}
.icon {
  text-align: center;
}
</style>
