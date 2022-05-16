<template>
	<view>
		<text>欢迎光临</text>
		<web-view :webview-styles="webviewStyles" src="http://43.138.43.128/content/corpus"></web-view>
	</view>
</template>

<script lang="ts">
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>
