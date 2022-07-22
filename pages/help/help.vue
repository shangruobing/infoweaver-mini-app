<template>
  <view class="container">
    <uni-card :is-shadow="false" is-full class="title">
      <text>填写您的信息注册成为我们的会员🎉 </text>
    </uni-card>
    <uni-section title="基本用法" type="line">
      <view class="form">
        <uni-forms ref="baseForm" :modelValue="baseFormData">
          <uni-forms-item label="姓名" required>
            <uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
          </uni-forms-item>
          <uni-forms-item label="年龄" required>
            <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
          </uni-forms-item>
          <uni-forms-item label="性别" required>
            <uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
          </uni-forms-item>
          <uni-forms-item label="爱好" required>
            <uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbies" />
          </uni-forms-item>
          <uni-forms-item label="介绍">
            <uni-easyinput
              type="textarea"
              v-model="baseFormData.introduction"
              placeholder="请输入自我介绍"
            />
          </uni-forms-item>
          <uni-forms-item label="日期">
            <uni-datetime-picker
              type="datetime"
              return-type="timestamp"
              v-model="baseFormData.datetimesingle"
            />
          </uni-forms-item>
        </uni-forms>
        <button type="primary" @click="submit">提交</button>
      </view>
    </uni-section>
  </view>
</template>

<script setup>
import { reactive } from 'vue'
const baseFormData = reactive({
  name: '',
  age: '',
  introduction: '',
  sex: 2,
  hobby: [5],
  datetimesingle: 1627529992399
})

const hobbies = [
  {
    text: '跑步',
    value: 0
  },
  {
    text: '游泳',
    value: 1
  },
  {
    text: '绘画',
    value: 2
  },
  {
    text: '足球',
    value: 3
  },
  {
    text: '篮球',
    value: 4
  },
  {
    text: '其他',
    value: 5
  }
]

const sexs = [
  {
    text: '男',
    value: 0
  },
  {
    text: '女',
    value: 1
  },
  {
    text: '保密',
    value: 2
  }
]

const submit = async () => {
  uni.showToast({
    title: '提交成功啦',
    duration: 2000
  })
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  text {
    font-weight: bold;
    font-size: large;
  }
}

.form {
  padding: 15px;
  background-color: #fff;
}
</style>
