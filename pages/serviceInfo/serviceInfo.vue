<template>
  <view>
    <uni-card :is-shadow="false" is-full class="title">
      <text>{{ ServiceURL }}</text>
      <text>服务器运行状况🐱‍💻</text>
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
import { onMounted, ref } from 'vue'
import { ServiceURL } from '@/utils/utils'

const serviceInfo = ref()

const request = async () => {
  try {
    // eslint-disable-next-line no-undef
    const res = await uni.request({
      url: 'https://www.infoweaver.cloud/api/sysinfo/'
    })
    serviceInfo.value = res.data
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  request()
})
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  text {
    display: inline-block;
    font-weight: bold;
    font-size: large;
  }
}
</style>
