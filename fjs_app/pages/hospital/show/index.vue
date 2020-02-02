<template>
	<view class="pb50">
		<page :parentData="data" :formAction="formAction"></page>
		<view class="pb10" v-if='data.show'>
			<myswiper :lists="data.cover" purl="user"></myswiper>
			<div class="shop-info bg-f mb10 p15">
				<div class="top-item flex-between">
					<div class="rinfo flex1">
						<p class="ctitle fs-20">{{data.user.userInfo.company_name}}</p>
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
					<div class="flex lh-20 pt15" @click="phone(data.user.userInfo.phone)">
						<p class="iconfont icon-phone fs-14 fc-9 mr5"></p>
						<p class="fs-13 fc-9 flex1" >{{data.user.userInfo.phone}}</p>
						<p class="fs-13 fc-9 flex1" v-if="data.user.userInfo.line_phone">{{data.user.userInfo.line_phone}}</p>
					</div>
					<div class="flex lh-20 pt15" @click="location(data.user.userInfo.location_x,data.user.userInfo.location_y,data.user.userInfo.address)">
						<p class="iconfont icon-location fs-16 fc-9 mr5"></p>
						<p class="fs-13 fc-9 flex1">{{data.user.userInfo.address}}</p>
					</div>
				</div>
			</div>
		
			<!-- <div class="couponList">
				<div class="coupon-box p10 mlr10 mtb15"  v-for="v in data.couponLists.data" @click="goto('/pages/business/coupon/show/index?id='+v.id)">
					<div class="left-img mr15">
						<image class="img" :src="v.logo ? getSiteName+ '/upload/images/coupon/300_'+v.logo : 'https://boss.doxinsoft.com/images/wap/nocoupon.png'" />
					</div>
					<div class="con-info pr20">
						<p class="title fs-17 fw-bold">{{v.name}}</p>
						<p class="price fs-13 fc-orange Arial fs-14 lh-26 h-26">￥<span class="fs-20">{{v.amount}}</span></p>
						<p class="dis fs-13"><span class="tag">{{v.discount}}折</span></p>
					</div>
					<div class="right-status" @click="showModal(v)">
						<p class="fs-14 s-btn plr20 ptb5 fw-bold">领取</p>
					</div>
				</div>
				
			</div> -->
			
			<div class="bus-detail">
				<div class="box-title mer-title p15 bg-f">
					<p class="name fs-16 cur">中心介绍</p>
				</div>
				<div class="content bg-f fs-13 plr15 pb15">
					<u-parse :content="data.detail.content" />
				</div>
			</div>
			<!--底部抽屉-->
			<view class="mask-screen" @tap="hideModal" v-show="showModalStatus"></view>
			<view :animation="animationData" class="region-box" v-show="showModalStatus">
				<view class="tips">
					<view class="tips-title flex-between lh-24 p15">
						<p class="title fs-16 fw-bold">使用须知</p>
						<p class="icon fs-14" @tap="hideModal"><span class="iconfont icon-OFF"></span></p>
					</view>
					<view class="tips-con m15">
							<u-parse :content="coupon.remark" />
					</view>
					<view class="tips-bottom flex-between plr15 ptb10">
						<view class="price fs-24"><span class="fs-13">￥</span>{{coupon.amount}}</view>
						<view class="buy-btn dx-btn-blue dx-btn-lg plr30" @click="buy">领取</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <Footer :url="formAction" :userId="data.user.id"></Footer> -->
		<view class="b_fixed Footer flex">
			<view class="nav dx-btn-blue" @click="location(data.detail.location_y,data.detail.location_x,data.detail.userInfo.address)">一键导航</view>
			<view class="nav dx-btn-orange" @click="phone(data.detail.userInfo.phone)">一键拨号</view>
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
				formAction: '/hospital.html',
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
