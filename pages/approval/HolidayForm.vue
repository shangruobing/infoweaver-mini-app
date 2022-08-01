<template>
  <view class="containter">
    <picker mode="selector" :range="leaveType" @change="leaveTypeChange">
      <view class="content">
        <view class="left-label">请假类型</view>
        <view class="right-label"> {{ leaveType[index] }}</view>
      </view>
    </picker>

    <picker mode="selector" :range="isleaveType" @change="isLeaveSchoolChange">
      <view class="content">
        <view class="left-label">请假类型</view>
        <view class="right-label"> {{ isleaveType[index] }}</view>
      </view>
    </picker>

    <view class="datetime-picker">
      <uni-datetime-picker type="datetime" v-model="startDatetime" @change="pickStartDateTime">
        <view class="content">
          <view class="left-label">开始时间</view>
          <view class="right-label">
            <uni-dateformat :date="startDatetime" format="yyyy-MM-dd hh:mm" />
          </view>
        </view>
      </uni-datetime-picker>
    </view>

    <view class="datetime-picker">
      <uni-datetime-picker type="datetime" v-model="endDatetime" @change="pickEndDateTime">
        <view class="content">
          <view class="left-label">结束时间</view>
          <view class="right-label">
            <uni-dateformat :date="endDatetime" format="yyyy-MM-dd hh:mm" />
          </view>
        </view>
      </uni-datetime-picker>
    </view>

    <picker mode="selector" :range="placeType" @change="placeChange">
      <view class="content">
        <view class="left-label">销假地点</view>
        <view class="right-label">
          {{ placeIndex === -1 ? '请选择销假地点' : placeType[placeIndex] }}</view
        >
      </view>
    </picker>

    <view class="datetime-picker">
      <view class="content">
        <view class="left-label">紧急联系人</view>
        <view class="right-label" style="text-align: right">
          <input type="number" placeholder="紧急联系人电话" />
        </view>
      </view>
    </view>

    <view class="text-area">
      <text>请假事由</text>
      <uni-easyinput
        type="textarea"
        v-model="value"
        autoHeight
        placeholder="请详细填写请假事由"
        :inputBorder="false"
        placeholder-style="font-size: 1rem; z-index:1"
      />
    </view>

    <view class="upload-area">
      <view class="content">
        <view class="left-label">请上传相关附件证明材料</view>
        <view class="right-label">0/9 </view>
      </view>
      <view style="margin-left: 20px; margin-top: 5px">
        <uni-file-picker limit="9" :image-styles="imageStyles" />
      </view>
    </view>

    <button class="submit-button">确定保存</button>
  </view>
</template>
<script setup>
import { ref } from 'vue'

const index = ref(0)
const leaveType = ['事假', '病假', '实习', '科研', '回家', '出差', '其他']
const leaveTypeChange = (e) => {
  index.value = e.detail.value
}

const isLeaveSchool = ref(0)
const isleaveType = ['否', '是']
const isLeaveSchoolChange = (e) => {
  isLeaveSchool.value = e.detail.value
}

const startDatetime = ref(Date.now())
const pickStartDateTime = (e) => {
  startDatetime.value = e
}

const endDatetime = ref(Date.now())
const pickEndDateTime = (e) => {
  endDatetime.value = e
}

const placeIndex = ref(-1)
const placeType = [
  '莲华校区',
  '新迎校区',
  '呈贡校区憬园',
  '呈贡校区恬园',
  '呈贡校区怡园',
  '呈贡校区恒园'
]
const placeChange = (e) => {
  placeIndex.value = e.detail.value
}

const imageStyles = {
  height: 60,
  width: 90
}
</script>
<style lang="scss" scoped>
.containter {
  width: 100vw;
}

picker,
.datetime-picker {
  font-size: 20rpx;
  height: 90rpx;
  background-color: white;
  background-size: 32rpx 22rpx;
  border-radius: 30rpx;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.08);
  margin: 20rpx;
  line-height: 90rpx;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .left-label {
    font-size: 1rem;
    margin-left: 1.5em;
    font-weight: 500;
  }
  .right-label {
    font-size: 1rem;
    margin-right: 1.5em;
    font-weight: 200;
  }
}

.text-area {
  font-size: 1rem;
  height: 260rpx;
  background-color: white;
  background-size: 32rpx 22rpx;
  border-radius: 30rpx;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.08);
  margin: 20rpx;
  line-height: 260rpx;

  text {
    display: block;
    height: 20px;
    line-height: 20px;
    font-size: 1rem;
    margin-left: 24px;
    padding-top: 5px;
    margin-bottom: 5px;
  }

  :deep(textarea) {
    margin-left: 24px;
    margin-right: 24px;
  }
}

.submit-button {
  font-size: 1rem;
  height: 90rpx;
  line-height: 90rpx;
  color: white;
  margin: 40rpx;
  margin-top: 0;
  margin-bottom: 20rpx;
  background-color: #1fc8db;
  border-radius: 20rpx;
  background-image: linear-gradient(141deg, #56e9a9 0%, #1ababa);
}

.upload-area {
  font-size: 1rem;
  height: 200rpx;
  background-color: white;
  background-size: 32rpx 22rpx;
  border-radius: 30rpx;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.08);
  margin: 20rpx;
  line-height: 200rpx;

  .content {
    display: flex;
    height: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left-label {
      font-size: 1rem;
      margin-left: 1.5em;
      font-weight: 500;
    }
    .right-label {
      font-size: 1rem;
      margin-right: 1.5em;
      font-weight: 200;
    }
  }
}
</style>
