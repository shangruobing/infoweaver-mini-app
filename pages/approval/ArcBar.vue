<template>
  <qiun-data-charts type="arcbar" :opts="opts" :chartData="chartData" />
</template>

<script setup>
const props = defineProps({
  action: String
})
const opts = {
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
    name: props.action === 'pass' ? '通过' : '未通过',
    fontSize: 15,
    color: props.action === 'pass' ? '#2fc25b' : '#F27D98'
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
const chartData = {
  series: [
    {
      color: props.action === 'pass' ? '#2fc25b' : '#F27D98',
      data: props.action === 'pass' ? '0.8' : '0.4'
    }
  ]
}
</script>
