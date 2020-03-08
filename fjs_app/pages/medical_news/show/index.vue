<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<view class="p15 fs-18 lh-24">{{data.detail.title}}</view>
			<view class="mark fc-9 fs-12 flex-between flex-middle plr15 pb15">
				<view class="date">{{data.detail.created_at}}</view>
				<!-- <view class="hos">华顺口腔诊所</view> -->
			</view>
			<view class="content bg-f fs-15 plr15 pb15">
				 <u-parse :content="data.detail.content" />
			</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		data() {
			return {
				formAction: '/newShow.html',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
			}
		},
		components:{
			uParse
		},
		onReachBottom() {
			this.hasMore(this);
		},
		onPullDownRefresh() {
			this.data.nextPage = 1;
			//this.ajax();
		},
		onShareAppMessage() {
			this.shareSource(this, this.data.detail.title);
		},
		onLoad(options) {
			this.ajax();
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
