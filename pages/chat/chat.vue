<template>
  <view>
    <uni-card :is-shadow="false" is-full class="title">
      <text>当前设备状况📱</text>
    </uni-card>

    <uni-table border stripe emptyText="暂无更多数据">
      <uni-tr>
        <uni-th align="center">名称</uni-th>
        <uni-th align="center">参数</uni-th>
      </uni-tr>
      <uni-tr v-for="(value, name, index) in serviceInfo" :key="index">
        <uni-td>{{ name.toUpperCase() }}</uni-td>
        <uni-td>{{ value }}</uni-td>
      </uni-tr>
    </uni-table>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const serviceInfo = ref(uni.getDeviceInfo())
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  text {
    font-weight: bold;
    font-size: large;
  }
}
</style>
