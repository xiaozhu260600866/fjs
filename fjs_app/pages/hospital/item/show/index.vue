<template>
	<view class="pb50">
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if='data.show'>
			<view class="p15 fs-18 lh-24">标题名称</view>
			<view class="mark fc-9 fs-12 flex-between flex-middle plr15 pb15">
				<view class="date">2020-03-04</view>
				<view class="hos">华顺口腔诊所</view>
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
				formAction: '/doctor.html',
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
			buy(){
			  this.getConfirm("是否确认购买该张优惠券？",msg=>{
				  this.postAjax("/coupon-buy.html",{coupon:this.coupon}).then(msg=>{
						if(msg.data.status == 2){
							this.showModalStatus = false;
						}
				  });
			  });
			},
			ajax() {
				this.getAjax(this).then(msg => {
					this.setTitle(this.data.user.userInfo.company_name)
				});
			},
			showModal: function(v) {
				// 显示遮罩层
				// 创建动画实例 
				this.coupon = v;
				let animation = uni.createAnimation({
					duration: 200,
					timingFunction: "linear",
					delay: 0
				})
				animation.translateY(uni.upx2px(712)).step()
				this.animationData = animation.export();
				this.showModalStatus = true
				setTimeout(function() { 
					animation.translateY(0).step()
					this.animationData = animation.export()
				}.bind(this), 200)
			},
			hideModal: function() {
				this.showModalStatus = false
			},
			getRegion: function(e) {
				const index = e.currentTarget.dataset.index
				this.regionTxt = this.regionArr[index];
				this.tabIndex = index;
				this.showModalStatus = false;
				this.tui.toast('您选择了：' + this.regionArr[index])
			},
		}
	}
</script>
