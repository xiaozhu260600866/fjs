<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<view class="p15 fs-18 lh-24">标题名称</view>
			<view class="mark fc-9 fs-12 flex-between flex-middle plr15 pb15">
				<view class="date">2020-03-04</view>
				<view class="hos">华顺口腔诊所</view>
			</view>
			<view class="content bg-f fs-15 plr15 pb15">
				一项新的研究结果显示，多发性硬化（MS）患者发生多种类型感染的风险增加，其中与肾道感染相关的风险最高。
				<!-- <u-parse :content="data.detail.content" /> -->
			</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/doctor.html',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
			}
		},
		onReachBottom() {
			this.hasMore(this);
		},
		onPullDownRefresh() {
			this.data.nextPage = 1;
			//this.ajax();
		},
		onShareAppMessage() {
			this.shareSource(this, '商城');
		},
		onLoad(options) {
			//this.ajax();
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					this.setTitle(this.data.detail.title);
					console.log(this.data);
				});
			}
		}
	}
</script>
