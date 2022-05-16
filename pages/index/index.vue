<template>
	<view class="content">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" class="swiper">
			<swiper class="swiper-box" @change="change">
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/1.svg"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/2.svg"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="/static/3.svg"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>


		<uni-card :is-shadow="false" class="main-pan" title="日常活动" padding="0" :border="true" margin="5">
			<uni-grid :column="4" :highlight="true" @change="change" class="grid-box" :showBorder="false"
				:square="true">
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="star" size="20"></uni-icons>
						<text>关注</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="calendar" size="20"></uni-icons>
						<text>校历</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="email" size="20"></uni-icons>
						<text>邮箱</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="help" size="20"></uni-icons>
						<text>帮助</text>
					</view>
				</uni-grid-item>
			</uni-grid>

		</uni-card>


		<uni-card :is-shadow="false" class="main-pan" title="通知管理" padding="0" :border="true" margin="5">
			<uni-grid :column="4" :highlight="true" @change="change" class="grid-box" :showBorder="false"
				:square="true">
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="chatbubble" size="20"></uni-icons>
						<text>问答</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="upload" size="20"></uni-icons>
						<text>上传</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="notification" size="20"></uni-icons>
						<text>消息</text>
					</view>
				</uni-grid-item>

			</uni-grid>

		</uni-card>

		<uni-card :is-shadow="false" class="main-pan" title="休闲娱乐" padding="0" :border="true" margin="5">
			<uni-grid :column="4" :highlight="true" @change="change" class="grid-box" :showBorder="false"
				:square="true">
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="scan" size="20"></uni-icons>
						<text>识别</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box-item">
						<uni-icons type="chat" size="20"></uni-icons>
						<text>聊天</text>
					</view>
				</uni-grid-item>
			</uni-grid>

		</uni-card>

		<view class="main-pan"> <text>距离六级考试</text></view>
		<uni-section title="修改颜色 + 字体大小" type="line" padding>
			<uni-countdown :font-size="20" :day="33" :hour="2" :minute="30" :second="0" color="#FFFFFF"
				background-color="#007AFF" />
		</uni-section>
	</view>

</template>
<script lang="ts">
	export default {
		data() {
			return {
				rate: 5
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
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
		text-align: center;
		// padding: 10px;
	}
</style>
