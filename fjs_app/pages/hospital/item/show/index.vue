<template>
	<view class="pb50">
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if='data.show'>
			<view class="p15 fs-18 lh-24">{{data.detail.name}}</view>
			<view class="mark fc-9 fs-12 flex-between flex-middle plr15 pb15">
				<view class="date">{{data.detail.created_at}}</view>
				<view class="hos" v-if="data.detail.getHospital">{{data.detail.getHospital.company_name}}</view>
			</view>
			<view class="content bg-f fs-15 plr15 pb15">
				<u-parse :content="data.detail.content" />
			</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import tuiRate from "xiaozhu/uniapp/thorui/components/rate/rate"
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components:{
			tuiRate,
			uParse
		},
		data() {
			return {
				formAction: '/hospital-record-show.html',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				coupon:{},
				getSiteName: this.getSiteName(),
				current: 0,
				index: 5,
				
				// 底部抽屉-开始
				showModalStatus: false,
				animationData: "",
				// 底部抽屉-结束
			}
		},
		onReachBottom() {
			this.hasMore(this);
		},
		onPullDownRefresh() {
			this.data.nextPage = 1;
			this.ajax();
		},
		onShareAppMessage() {
			return this.shareSource(this, '商城');
		},
		onLoad(options) {
			this.ajax();
		},
		onShow(){
			console.log(123)
			this.onShow(this);
		},
		methods: {
		
			ajax() {
				this.getAjax(this).then(msg => {
					this.setTitle(this.data.detail.name)
				});
			},
			
		}
	}
</script>
