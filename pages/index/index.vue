<template>
  <uni-notice-bar
    single
    text="Infoweaver小程序正式开始开发，快去一起体验吧!"
    show-icon
    scrollable
  />
  <view class="content">
    <uni-swiper-dot field="content" class="swiper">
      <swiper class="swiper-box">
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/Material/1.svg"></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/Material/2.svg"></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/Material/3.svg"></image>
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>

    <uni-card
      :is-shadow="false"
      class="main-pan"
      title="日常活动"
      padding="0"
      :border="true"
      margin="5"
    >
      <uni-grid
        :column="4"
        :highlight="true"
        class="grid-box"
        :showBorder="false"
        :square="true"
        @change="clickGridItem"
      >
        <uni-grid-item index="0">
          <view class="grid-box-item">
            <uni-icons type="star" size="20"></uni-icons>
            <text>关注</text>
          </view>
        </uni-grid-item>
        <uni-grid-item index="1">
          <view class="grid-box-item">
            <uni-icons type="calendar" size="20"></uni-icons>
            <text>校历</text>
          </view>
        </uni-grid-item>
        <uni-grid-item index="2">
          <view class="grid-box-item">
            <uni-icons type="email" size="20"></uni-icons>
            <text>邮箱</text>
          </view>
        </uni-grid-item>
        <uni-grid-item index="3">
          <view class="grid-box-item">
            <uni-icons type="help" size="20"></uni-icons>
            <text>帮助</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-card>

    <uni-card
      :is-shadow="false"
      class="main-pan"
      title="通知管理"
      padding="0"
      :border="true"
      margin="5"
    >
      <uni-grid
        :column="4"
        :highlight="true"
        class="grid-box"
        :showBorder="false"
        :square="true"
        @change="clickGridItem"
      >
        <uni-grid-item index="4">
          <view class="grid-box-item">
            <uni-icons type="chatbubble" size="20"></uni-icons>
            <text>问答</text>
          </view>
        </uni-grid-item>
        <uni-grid-item index="5">
          <view class="grid-box-item">
            <uni-icons type="upload" size="20"></uni-icons>
            <text>上传</text>
          </view>
        </uni-grid-item>
        <uni-grid-item index="6">
          <view class="grid-box-item">
            <uni-icons type="notification" size="20"></uni-icons>
            <text>消息</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-card>

    <uni-card
      :is-shadow="false"
      class="main-pan"
      title="休闲娱乐"
      padding="0"
      :border="true"
      margin="5"
    >
      <uni-grid
        :column="4"
        :highlight="true"
        class="grid-box"
        :showBorder="false"
        :square="true"
        @change="clickGridItem"
      >
        <uni-grid-item index="7">
          <view class="grid-box-item">
            <uni-icons type="scan" size="20"></uni-icons>
            <text>识别</text>
          </view>
        </uni-grid-item>
        <uni-grid-item index="8">
          <view class="grid-box-item">
            <uni-icons type="chat" size="20"></uni-icons>
            <text>聊天</text>
          </view>
        </uni-grid-item>
      </uni-grid>
    </uni-card>
  </view>
</template>

<script setup>
const clickGridItem = (e) => {
  let url = ''
  switch (e.detail.index) {
    case '0':
      url = '/pages/help/help'
      break
    case '1':
      url = '/pages/webview/webview'
      break
    case '2':
      url = '/pages/formula/Index'
      break
    case '3':
      url = '/pages/introducation/introducation'
      break
    case '4':
      url = '/pages/serviceInfo/serviceInfo'
      break
    case '5':
      url = '/pages/list/list'
      break
    case '6':
      url = '/pages/indexList/indexList'
      break
    case '7':
      url = '/pages/chat/chat'
      break
    case '8':
      url = '/pages/test/test'
      break
    default:
      break
  }
  uni.navigateTo({
    url: url
  })
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 140rpx;
  margin-top: 50rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.swiper {
  width: 100%;
  text-align: center;
  height: 100%;

  .swiper-item {
    width: 100%;
    height: 100%;

    image {
      width: 100%;
      height: 100%;
    }
  }
}

.grid-box {
  align-items: center;
  justify-content: center;
  text-align: center;

  .grid-box-item {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
  }
}

.main-pan {
  width: 100%;
  font-weight: 700;
}
</style>
