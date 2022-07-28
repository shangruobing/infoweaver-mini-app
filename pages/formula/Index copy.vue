<template>
  <view>
    <view class="uni-container">
      <uni-table
        ref="table"
        :loading="loading"
        border
        stripe
        emptyText="暂无更多数据"
        @selection-change="selectionChange"
      >
        <uni-tr>
          <uni-th align="center">单词</uni-th>
          <uni-th align="center">翻译</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in tableData" :key="index">
          <uni-td>
            <view class="name">{{ item.word }}</view>
          </uni-td>
          <uni-td align="center">{{ item.translation }}</uni-td>
        </uni-tr>
      </uni-table>

      <view class="uni-pagination-box"
        ><uni-pagination
          show-icon
          :page-size="pageSize"
          :current="pageCurrent"
          :total="total"
          @change="change"
      /></view>
    </view>
  </view>
</template>
<script>
import tableData from './tableData.js'
export default {
  data() {
    return {
      searchVal: '',
      tableData: [],
      // 每页数据量
      pageSize: 10,
      // 当前页
      pageCurrent: 1,
      // 数据总量
      total: 0,
      loading: false
    }
  },
  onLoad() {
    this.selectedIndexs = []
    this.getData(1)
  },
  methods: {
    // 分页触发
    change(e) {
      this.$refs.table.clearSelection()
      this.selectedIndexs.length = 0
      this.getData(e.current)
    },
    // 搜索
    search() {
      this.getData(1, this.searchVal)
    },
    // 获取数据
    getData(pageCurrent, value = '') {
      this.loading = true
      this.pageCurrent = pageCurrent
      this.request({
        pageSize: this.pageSize,
        pageCurrent: pageCurrent,
        value: value,
        success: (res) => {
          // console.log('data', res);
          this.tableData = res.data
          this.total = res.total
          this.loading = false
        }
      })
    },
    // 伪request请求
    request(options) {
      const { pageSize, pageCurrent, success, value } = options
      let total = tableData.length
      let data = tableData.filter((item, index) => {
        const idx = index - (pageCurrent - 1) * pageSize
        return idx < pageSize && idx >= 0
      })
      if (value) {
        data = []
        tableData.forEach((item) => {
          if (item.name.indexOf(value) !== -1) {
            data.push(item)
          }
        })
        total = data.length
      }

      setTimeout(() => {
        typeof success === 'function' &&
          success({
            data: data,
            total: total
          })
      }, 1)
    }
  }
}
</script>
<style>
.uni-group {
  display: flex;
  align-items: center;
}
</style>
