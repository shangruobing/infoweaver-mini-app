<template>
  <view class="tab-group">
    <button :plain="true" :class="tabButton ? '' : 'tab-button-active'" @click="changeTab(0)">
      请假记录
    </button>
    <button :plain="true" @click="changeTab(1)" :class="!tabButton ? '' : 'tab-button-active'">
      提交请假
    </button>
  </view>
  <view class="content">
    <uni-card title="聚餐" :border="false">
      <view>
        <uni-icons type="smallcircle" size="15"></uni-icons>
        <text>事假</text>
      </view>
      <view style="margin-top: 5px">
        <uni-icons type="calendar" size="15"></uni-icons>
        <text>2022-07-10 12:00</text>
      </view>
      <view>
        <uni-icons type="calendar" size="15"></uni-icons>
        <text>2022-07-10 19:00</text>
      </view>

      <view class="charts-box">
        <qiun-data-charts type="arcbar" :opts="opts" :chartData="chartData" />
      </view>
      <view slot="actions">
        <view class="card-actions-item">
          <uni-icons type="chatbubble-filled" size="20" color="white"></uni-icons>
          <text>留言</text>
        </view>
      </view>
    </uni-card>
  </view>
</template>
<script>
export default {
  data() {
    return {
      tabButton: 0,
      chartData: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['arcbar'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: [
          '#1890FF',
          '#91CB74',
          '#FAC858',
          '#EE6666',
          '#73C0DE',
          '#3CA272',
          '#FC8452',
          '#9A60B4',
          '#ea7ccc'
        ],
        padding: undefined,
        title: {
          name: '通过',
          fontSize: 15,
          color: '#2fc25b'
        },
        subtitle: {
          name: '',
          fontSize: 0
        },
        extra: {
          arcbar: {
            type: 'circle',
            width: 12,
            backgroundColor: '#E9E9E9',
            startAngle: 1.5,
            endAngle: 0.25,
            gap: 2
          }
        }
      }
    }
  },
  onReady() {
    this.getServerData()
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
          series: [
            {
              name: '正确率',
              color: '#2fc25b',
              data: 0.8
            }
          ]
        }
        this.chartData = JSON.parse(JSON.stringify(res))
      }, 1)
    },
    changeTab(value) {
      this.tabButton = value
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-group {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;

  > button {
    align-items: center;
    height: 30px;
    font-size: 1em;
    display: inline-block;
    flex: 1;
    border: none;
    padding: 0;
    margin: 0 auto;
    line-height: 30px;
    margin: 10px;
    border-radius: 100px;
    background-color: white;
    color: #1ababa;
  }
  > .tab-button-active {
    background-color: #1ababa;
    color: white;
  }
}

.content {
  height: calc(100vh - 50px - 1em - 1em);
  padding: 1em;
  background-color: #f6f6f8;
  display: flex;
  align-items: center;
  flex-direction: column;
}

:deep(.uni-card) {
  display: block;
  position: relative;
  height: 150px !important;
  width: 300px;
  border-radius: 20px !important;
  padding: 0 !important;
  border: none !important;
  margin: 0, auto;
}

.charts-box {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
}

:deep(.uni-card__header) {
  border: none !important;
  font-weight: bold;
  text {
    padding-left: 10px;
  }
}

.card-actions-item {
  height: 100%;
  background-color: #3bb270;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text {
    color: white;
    font-weight: bold;
    padding-left: 5px;
    margin-right: 30px;
    font-size: 1em;
    height: 100%;
  }
}
</style>
