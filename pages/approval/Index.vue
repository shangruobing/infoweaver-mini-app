<template>
  <view class="tab-group">
    <button class="tab" :plain="true" :class="{ active: !tabButton }" @click="changeTab(0)">
      请假记录
    </button>
    <button class="tab" :plain="true" @click="changeTab(1)" :class="{ active: tabButton }">
      提交请假
    </button>
  </view>
  <view class="content" v-if="tabButton === 0">
    <Card
      title="看电影"
      type="事假"
      start="2022-07-20 12:00"
      end="2022-07-20 19:00"
      action="pass"
    />
    <Card
      title="外出郊游"
      type="事假"
      start="2022-07-10 12:00"
      end="2022-07-10 19:00"
      action="noPass"
    />
  </view>
  <view class="content" v-else>
    <HolidayForm />
  </view>
</template>

<script setup>
import Card from './Card.vue'
import HolidayForm from './HolidayForm.vue'
import { ref } from 'vue'

const tabButton = ref(0)
const changeTab = (value) => {
  tabButton.value = value
}
</script>

<style lang="scss" scoped>
.tab-group {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  > .tab {
    align-items: center;
    height: 30px;
    font-size: 1em;
    display: inline-block;
    flex: 1;
    border: none;
    padding: 0;
    line-height: 30px;
    margin: 10px;
    border-radius: 100px;
    background-color: white;
    color: #1ababa;
  }

  > .active {
    background-color: #1ababa;
    color: white;
  }
}

.content {
  height: calc(100vh - 50px - 1em);
  padding: 1em;
  padding-top: 0;
  background-color: #f6f6f8;
  display: flex;
  align-items: center;
  flex-direction: column;
}

:deep(.uni-card) {
  display: block;
  position: relative;
  height: 160px !important;
  width: 350px !important;
  border-radius: 20px !important;
  padding: 0 !important;
  border: none !important;
  margin: 0, auto;
}

:deep(.uni-card__header) {
  border: none !important;
  font-weight: 600;

  text {
    padding-top: 10px;
    padding-left: 10px;
  }
}

:deep(.uni-card__content) {
  padding-top: 0px !important;
}
</style>
