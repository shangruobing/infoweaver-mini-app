<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <uni-card :title="title" :border="false">
    <view>
      <uni-icons type="smallcircle" size="15"></uni-icons>
      <text>{{ type }}</text>
    </view>
    <view style="margin-top: 5px">
      <uni-icons type="calendar" size="15"></uni-icons>
      <text>{{ start }}</text>
    </view>
    <view>
      <uni-icons type="calendar" size="15"></uni-icons>
      <text>{{ end }}</text>
    </view>

    <ArcBar :action="action" class="charts-box" />
    <view slot="actions">
      <view
        class="card-actions-item"
        :class="{ 'card-actions-item__failed': props.action !== 'pass' }"
      >
        <uni-icons type="chatbubble-filled" size="20" color="white"></uni-icons>
        <text>留言</text>
      </view>
    </view>
  </uni-card>
</template>

<script setup>
import ArcBar from './ArcBar.vue'

const props = defineProps({
  title: String,
  type: String,
  start: String,
  end: String,
  action: String
})
</script>

<style lang="scss" scoped>
.charts-box {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px !important;
}

.card-actions-item {
  height: 30px;
  background-color: #3bb270;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  text {
    color: white;
    font-weight: bold;
    padding-left: 5px;
    margin-right: 45px;
    font-size: 1em;
    line-height: 30px;
    height: 100%;
  }
}

.card-actions-item__failed {
  height: 30px;
  background-color: #f27d98;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  text {
    color: white;
    font-weight: bold;
    padding-left: 5px;
    margin-right: 45px;
    font-size: 1em;
    line-height: 30px;
    height: 100%;
  }
}
</style>
