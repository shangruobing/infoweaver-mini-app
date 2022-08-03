<template>
  <view>
    <view class="containter">
      <view>
        <uni-title type="h1" align="center" title="织信校园"></uni-title>
      </view>
      <view>
        <uni-title type="h2" title="1 项目介绍"></uni-title>
      </view>
      <view>
        <uni-title type="h3" title="1.1 什么是执行校园"></uni-title>
      </view>
      <view>
        <text>一款针对校园的问答系统，旨在改善校园生活</text>
      </view>
      <view>
        <uni-title type="h3" title="1.2 开发进度"></uni-title>
      </view>
      <view>
        <uni-title type="h4" color="#666" title="✔ 完成数据库端开发🎉"></uni-title>
        <uni-title type="h4" color="#666" title="✔ 完成后端开发🎉"></uni-title>
        <uni-title type="h4" color="#666" title="✔ 完成前端开发🎉"></uni-title>
        <uni-title type="h4" color="#666" title="✔ 完成服务器端部署🎉"></uni-title>
        <uni-title type="h4" color="#666" title="● 正在进行正在小程序端开发💪"> </uni-title>
      </view>
      <view>
        <uni-title type="h2" title="2 开发工具介绍"></uni-title>
      </view>
      <view>
        <uni-table border stripe emptyText="暂无更多数据">
          <uni-tr>
            <uni-th align="center">框架</uni-th>
            <uni-th align="center">用途</uni-th>
          </uni-tr>
          <uni-tr v-for="(item, index) in requirement" :key="index">
            <uni-td align="center">{{ item.name }}</uni-td>
            <uni-td align="center">{{ item.desc }}</uni-td>
          </uni-tr>
        </uni-table>
      </view>
    </view>
  </view>
</template>

<script setup>
import { reactive } from 'vue'

const requirement = reactive([
  { name: 'Neo4j MySQL', desc: '图/关系型数据库' },
  { name: 'Django Rest FrameWork', desc: '后端' },
  { name: 'Vue.js', desc: 'Web页面' },
  { name: 'Element-Plus', desc: '组件库' },
  { name: 'Nginx WSGI', desc: '服务器' },
  { name: 'uni-app', desc: '微信小程序' }
])
</script>
<style lang="scss">
.containter {
  padding: 10px;
}
.uni-text {
  font-size: 14px;
  line-height: 22px;
  color: #333;
}
</style>
