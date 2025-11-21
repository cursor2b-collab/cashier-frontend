<template>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 手机端用户信息横向显示 - 使用更强的选择器和 !important */
@media screen and (max-width: 750px) {
  .row.align-items-start.justify-content-start,
  div[class*="row"][class*="align-items-start"][class*="justify-content-start"],
  [class*="row"][class*="align-items-start"][class*="justify-content-start"],
  div.row.align-items-start.justify-content-start {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 6px !important;
    font-size: 11px !important;
    white-space: nowrap !important;
    overflow-x: auto !important;
    overflow-y: visible !important;
    -webkit-overflow-scrolling: touch !important;
    line-height: 1.4 !important;
  }
  
  .row.align-items-start.justify-content-start > *,
  div[class*="row"][class*="align-items-start"][class*="justify-content-start"] > *,
  [class*="row"][class*="align-items-start"][class*="justify-content-start"] > *,
  div.row.align-items-start.justify-content-start > * {
    flex-shrink: 0 !important;
    display: inline-block !important;
    margin-right: 6px !important;
    white-space: nowrap !important;
  }
}
</style>

