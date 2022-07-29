<template>
  <view>
    <view class="word">
      <text>{{ item.word }} </text>
    </view>
    <view class="translation">
      <text>{{ item.translation }}</text>
    </view>

    <view class="button-group">
      <view class="pronounce">
        <button @click="Americanplay">美式发音</button>
        <button @click="Englishplay">英式发音</button>
      </view>
      <button @click="previous">上一个</button>
      <button @click="change" type="primary">下一个</button>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue'
import tableData from './tableData.js'

const index = ref(0)
const item = reactive({
  word: 'confidence',
  translation: 'n.自信心'
})

tableData.sort(() => 0.5 - Math.random())

const change = () => {
  if (index.value + 1 <= tableData.length) {
    index.value++
  } else {
    uni.showToast({
      title: '没有更多单词啦',
      icon: 'exception',
      duration: 1000
    })
  }
}

const previous = () => {
  if (index.value - 1 >= 0) {
    index.value--
  } else {
    uni.showToast({
      title: '没有上一个啦',
      icon: 'exception',
      duration: 1000
    })
  }
}

watchEffect(() => {
  const randomItem = tableData[index.value]
  item.word = randomItem.word
  item.translation = randomItem.translation
})

const Americanplay = () => {
  const innerAudioContext = uni.createInnerAudioContext()
  innerAudioContext.autoplay = true
  innerAudioContext.src = 'http://dict.youdao.com/dictvoice?type=0&audio=' + item.word
  innerAudioContext.onPlay(() => {
    // console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
}

const Englishplay = () => {
  const innerAudioContext = uni.createInnerAudioContext()
  innerAudioContext.autoplay = true
  innerAudioContext.src = 'http://dict.youdao.com/dictvoice?type=1&audio=' + item.word
  innerAudioContext.onPlay(() => {
    // console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
}
</script>
<style lang="scss" scoped>
view {
  text-align: center;
}

.word {
  font-family: 'Consolas';
  margin-top: 50px;
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 30px;
}

.translation {
  font-size: x-large;
}

.button-group {
  position: absolute;
  width: 100%;
  bottom: 15%;
  > button {
    margin: 0 1em;
    margin-bottom: 25rpx;
  }
}

.pronounce {
  display: flex;
  width: 100%;
  > button {
    width: calc(50% - 2em);
    margin-bottom: 25rpx;
  }
}
</style>
