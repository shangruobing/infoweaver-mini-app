<template>
  <view>
    <text>微信小程序不允许个人项目使用外部链接</text>
    <text>想要预览Infoweaver主页，需要复制链接，去外部浏览器打开</text>
    <uni-link
      href="https://www.infoweaver.cloud"
      text="https://www.infoweaver.cloud"
      color="#007BFF"
      font-size="20"
      showUnderLine="false"
    ></uni-link>
    <!-- <text style="color: #0075F7;">{{ "https://www.infoweaver.cloud" }}</text> -->
    <button type="primary" @click="copyUrl('https://www.infoweaver.cloud')">点击复制URL</button>
  </view>
</template>

<!-- eslint-disable no-undef -->
<script setup>
const copyUrl = (url) => {
  uni.showModal({
    content: url,
    confirmText: '复制内容',
    success: () => {
      uni.setClipboardData({
        data: url,
        success: function () {
          uni.hideToast({
            title: '复制成功',
            duration: 2000,
            icon: 'none'
          })
        },
        fail: function () {
          uni.showToast({
            title: '复制失败',
            duration: 2000,
            icon: 'none'
          })
        }
      })
    }
  })
}
</script>

<style scoped>
view {
  text-align: center;
}
</style>
