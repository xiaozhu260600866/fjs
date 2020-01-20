<template>
	<view class="pb50">
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if='data.show'>
			<div class="show-img">
				<image class="img w-b100 flex" mode="widthFix":src="getSiteName+ '/upload/images/coupon/'+data.detail.logo" />
			</div>
			<div class="shop-info bg-f mb10 p15">
				<div class="top-item flex-between">
					<div class="rinfo flex1">
						<p class="ctitle fs-20">{{data.detail.name}}</p>
						<p class="lh-20 star"><tui-rate :current="index" @change="change" :disabled="true"></tui-rate></p>
						<p class="industry fs-12 fc-9 lh-22"></p>
					</div>
					<div class="ricon flex pl10">
						<button class="iitem plr8 text-center bg-f" hover-class="none" open-type="share">
							<p class="iconfont icon-share fc-6 fs-18 lh-20 mb5"></p>
							<p class="name fs-12 fc-6 lh-18">分享</p>
						</button>
					</div>
				</div>
				<div class="bottom-item" >
					<div class="flex lh-20 pt15" @click="phone(data.detail.phone)">
						<p class="iconfont icon-phone fs-14 fc-9 mr5"></p>
						<p class="fs-13 fc-9 flex1" >{{data.detail.phone}}</p>
					</div>
					<div class="flex lh-20 pt15" @click="location(data.detail.location_x,data.detail.location_y,data.detail.address)">
						<p class="iconfont icon-location fs-16 fc-9 mr5"></p>
						<p class="fs-13 fc-9 flex1">{{data.detail.address}}</p>
					</div>
				</div>
			</div>
			<div class="bus-detail mb12">
				<div class="box-title mer-title p15 bg-f">
					<p class="name fs-16 cur">个人介绍</p>
				</div>
				<div class="content bg-f fs-13 plr15 pb15">
					<u-parse :content="data.detail.content" />
				</div>
			</div>
			
			<view class="b_fixed Footer flex">
				<view class="nav dx-btn-blue">一键拨号</view>
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
