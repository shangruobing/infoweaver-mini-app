<template>
	<view class="tab-group">
		<button :plain="true" :class="{ active: !tabButton }" @click="changeTab(0)">请假记录</button>
		<button :plain="true" @click="changeTab(1)" :class="{ active: tabButton }">提交请假</button>
	</view>
	<view class="content">
		<Card title="看电影" type="事假" start="2022-07-20 12:00" end="2022-07-20 19:00" action="pass" />
		<Card title="外出郊游" type="事假" start="2022-07-10 12:00" end="2022-07-10 19:00" action="noPass" />
	</view>
</template>

<script setup>
import Card from './Card.vue'
import { ref } from 'vue'

const tabButton = ref(0)
const changeTab = value => {
	tabButton.value = value
}
</script>

<style lang="scss" scoped>
.tab-group {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;

	>button {
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

	>.active {
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
	width: 350px;
	border-radius: 20px !important;
	padding: 0 !important;
	border: none !important;
	margin: 0, auto;
}

.charts-box {
	position: absolute;
	top: 20px;
	right: 20px;
	width: 100px;
	height: 100px;
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

.card-actions-item {
	height: 30px;
	background-color: #3bb270;
	border-radius: 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	text {
		color: white;
		font-weight: bold;
		padding-left: 5px;
		margin-right: 45px;
		font-size: 1em;
		line-height: 30px;
		height: 100%;
	}
}

.card-actions-item__failed {
	height: 30px;
	background-color: #F27D98;
	border-radius: 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	text {
		color: white;
		font-weight: bold;
		padding-left: 5px;
		margin-right: 45px;
		font-size: 1em;
		line-height: 30px;
		height: 100%;
	}
}
</style>
