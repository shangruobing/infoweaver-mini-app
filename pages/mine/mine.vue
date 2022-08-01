<template>
  <view class="top">
    <view class="background"></view>
  </view>

  <view class="user-card">
    <view class="card">
      <view class="top">
        <img :src="avatarUrl" class="userImage" />
      </view>
      <view class="bottom">
        <view class="left">
          <view class="user-text">
            {{ nickName }}
          </view>
          <view class="user-phone" v-if="nickName !== '微信用户'"> 135****0376 </view>
        </view>
        <view class="right flex-center">
          <u-icon class="icon" name="arrow-right"></u-icon>
        </view>
      </view>
    </view>
  </view>

  <view class="list-card">
    <view class="card">
      <view class="item item-bottom-solid">
        <view class="left flex-center">
          <image src="../../static/myIcon/qiu.png" mode="aspectFit"></image>
        </view>
        <view class="center">
          <text>参加的活动</text>
        </view>
        <view class="right flex-center">
          <u-icon class="icon" name="arrow-right"></u-icon>
        </view>
      </view>
    </view>
    <view class="card">
      <view class="item item-bottom-solid">
        <view class="left flex-center">
          <image src="../../static/myIcon/1.png" mode="aspectFit"></image>
        </view>
        <view class="center">
          <text>参加的活动</text>
        </view>
        <view class="right flex-center">
          <u-icon class="icon" name="arrow-right"></u-icon>
        </view>
      </view>
    </view>
    <view class="card">
      <view class="item">
        <view class="left flex-center">
          <image src="../../static/myIcon/2.png" mode="aspectFit"></image>
        </view>
        <view class="center">
          <text>参加的活动</text>
        </view>
        <view class="right flex-center">
          <u-icon class="icon" name="arrow-right"></u-icon>
        </view>
      </view>
    </view>
  </view>
  <view class="quit flex-center">
    <view class="btn flex-center" @click="login" v-if="nickName === '微信用户'">登录</view>
    <view class="btn flex-center" @click="logout" v-else>退出登录</view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const nickName = ref('微信用户')
const avatarUrl = ref(
  'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
)

onMounted(() => {
  const userInfo = uni.getStorageSync('USER_INFO')
  if (userInfo) {
    nickName.value = userInfo.nickName
    avatarUrl.value = userInfo.avatarUrl
  }
})

const login = async () => {
  uni.showLoading({ title: '加载请求中' })

  setTimeout(() => uni.hideLoading(), 1000)

  try {
    const res = await uni.getUserProfile({ desc: '用于头像昵称展示' })
    nickName.value = res.userInfo.nickName
    avatarUrl.value = res.userInfo.avatarUrl
    uni.setStorageSync('USER_INFO', res.userInfo)
    uni.showToast({ title: '登录成功', duration: 1000 })
  } catch (error) {
    console.log(error)
  }
}

const logout = async () => {
  const res = await uni.showModal({ title: '确定退出登录?' })
  if (res.confirm) {
    nickName.value = '微信用户'
    avatarUrl.value =
      'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
    uni.removeStorageSync('USER_INFO')
    uni.showToast({ title: '退出登录成功', duration: 1000 })
  }
}
</script>

<style lang="scss" scoped>
$background-color: #409eff;

.top {
  height: 250rpx;
  position: relative;

  .background {
    background-color: $background-color;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
    position: absolute;
    height: 180rpx;
    width: 100%;
  }
}

.icon {
  color: #96a1ae;
  font-size: 40rpx;
}

.user-card {
  height: 170rpx;
  padding: 0 15px;

  .card {
    position: relative;
    bottom: 62px;
    height: 250rpx;
    background-color: white;
    border-radius: 5px;

    .top {
      height: 30%;
      position: relative;

      .userImage {
        position: absolute;
        bottom: 24%;
        left: calc((100% - 150rpx) / 2);
        width: 150rpx;
        height: 150rpx;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid white;
      }
    }

    .bottom {
      display: flex;
      height: 70%;

      .left {
        width: 80%;
        height: 100%;
        position: relative;

        .user-text {
          width: 100%;
          font-size: 1.6em;
          padding-left: 80rpx;
          height: 50%;
        }

        .user-phone {
          color: #96a1ae;
          padding-left: 80rpx;
          height: 50%;
          width: 100%;
          font-size: 0.9em;
        }
      }

      .right {
        width: 20%;
        height: 50%;
      }
    }
  }
}

.list-card {
  padding: 0 15px;

  .card {
    position: relative;
    background-color: white;
    border-radius: 5px;
    padding: 5px 30px;

    .item {
      display: flex;
      height: 120rpx;

      .left {
        width: 15%;

        image {
          width: 70rpx;
          height: 70rpx;
        }
      }

      .center {
        width: 65%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.1em;
      }

      .right {
        width: 20%;
        justify-content: flex-end;
      }
    }
  }
}

.item-bottom-solid {
  border-bottom: 1px solid #d4d6da;
}

.quit {
  height: 100rpx;
  margin-top: 50px;

  .btn {
    background-color: $background-color;
    border-radius: 30px;
    width: 80%;
    color: white;
    font-size: 1.2em;
    height: 100%;
  }
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
