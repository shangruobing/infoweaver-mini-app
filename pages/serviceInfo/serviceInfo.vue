<template>
  <view>
    <uni-card :is-shadow="false" is-full class="title">
      <text>{{ ServiceURL }}</text>
    </uni-card>
    <text>服务器信息是{{ serviceInfo }}</text>
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
    console.log(res)
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
    font-weight: bold;
    font-size: large;
  }
}
</style>
