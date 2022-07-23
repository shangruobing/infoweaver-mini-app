<template>
  <view>
    <uni-list v-for="_ in 3" :key="_">
      <uni-list-chat
        title="uni-app"
        avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
        note="您收到一条新的消息"
        time="2020-02-02 20:20"
        badge-positon="left"
        badge-text="99"
      >
        <view class="chat-custom-right">
          <text class="chat-custom-text">刚刚</text>
          <uni-icons type="star-filled" color="#999" size="18"></uni-icons>
        </view>
      </uni-list-chat>
    </uni-list>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      avatarList: [
        {
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
        },
        {
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
        },
        {
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
        }
      ]
    }
  }
}
</script>

<style>
.chat-custom-right {
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.chat-custom-text {
  font-size: 12px;
  color: #999;
}
</style>
