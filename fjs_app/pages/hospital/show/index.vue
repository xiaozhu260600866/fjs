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
					<div class="flex lh-20 pt15">
						<p class="iconfont icon-phone fs-14 fc-9 mr5"></p>
						<p class="fs-13 fc-9"  @click="phone(data.user.userInfo.phone)">{{data.user.userInfo.phone}}</p>
						<p class="fs-13 fc-9 pl10" v-if="data.user.userInfo.line_phone"  @click="phone(data.user.userInfo.line_phone)">{{data.user.userInfo.line_phone}}</p>
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
			
			<view class="bus-detail mb10 bg-f">
				<view class="box-title">
					<view class="name fs-16">中心介绍</view>
				</view>
				<view class="content fs-15 p15 pt5">
					<u-parse :content="data.detail.content" />
				</view>
			</view>
			
			<div class="Hdoctor Hscroll mb10 bg-f">
				<view class="box-title">
					<view class="name fs-16">{{data.a}}</view>
					<view class="more" @click="goto('/pages/hospital/doctor/lists/index?type=1&hospital_userid='+data.detail.id,1)">查看更多<span class="iconfont icon-right"></span></view>
				</view>
				<div class="Hs-list">
					<scroll-view class="pl5" scroll-x="true">
						<div class="Hs-item Hd-item" v-for="v in data.detail.doctor_lists"
						 @click="goto('/pages/hospital/doctor/show/index?id='+v.id,1)">
							<div class="Hs-img Hd-img">
								<img class="img" :src="v.getLogo" mode="aspectFill" />
							</div>
							<div class="Hs-name nowrap">{{v.name}}</div>
							<!-- <div class="Hs-mark">{{v.position}}</div> -->
						</div>
					</scroll-view>
				</div>
			</div>
			
			<div class="Hitem Hscroll mb10 bg-f">
				<view class="box-title">
					<view class="name fs-16">特色项目</view>
					<view class="more" @click="goto('/pages/hospital/item/lists/index?type=2&hospital_userid='+data.detail.id,1)">查看更多<span class="iconfont icon-right"></span></view>
				</view>
				<div class="Hs-list">
					<scroll-view class="pl5" scroll-x="true">
						<div class="Hs-item Hi-item" v-for="v in data.detail.project_lists"
						 @click="goto('/pages/hospital/item/show/index?id='+v.id,1)">
							<div class="Hs-img Hi-img">
								<img class="img" :src="v.getLogo" mode="aspectFill" />
							</div>
							<div class="Hs-name nowrap">{{v.name}}</div>
							<!-- <div class="Hs-mark">教学中心体验日</div> -->
						</div>
					</scroll-view>
				</div>
			</div>
			
			
			<div class="Hcase Hscroll mb10 bg-f">
				<view class="box-title">
					<view class="name fs-16">案例分享</view>
					<view class="more" @click="goto('/pages/hospital/item/lists/index?type=3&hospital_userid='+data.detail.id,1)">查看更多<span class="iconfont icon-right"></span></view>
				</view>
				<div class="Hs-list">
					<scroll-view class="pl5" scroll-x="true">
						<div class="Hs-item Hi-item" v-for="v in data.detail.case_lists"
						 @click="goto('/pages/hospital/item/show/index?id='+v.id,1)">
							<div class="Hs-img Hi-img">
								<img class="img" :src="v.getLogo" mode="aspectFill" />
							</div>
							<div class="Hs-name nowrap">{{v.name}}</div>
							<!-- <div class="Hs-mark">教学中心体验日</div> -->
						</div>
					</scroll-view>
				</div>
			</div>
			
			<div class="Hnews mb10 bg-f">
				<view class="box-title">
					<view class="name fs-16">最新资讯</view>
					<view class="more" @click="goto('/pages/hospital/item/lists/index?type=4&hospital_userid='+data.detail.id,1)">查看更多<span class="iconfont icon-right"></span></view>
				</view>
				<!-- <view class="Hn-lists">
					<view class="weui-media-box weui-media-box_appmsg" v-for="v in data.detail.news_lists"
					 @click="goto('/pages/hospital/item/show/index?id='+v.id,1)">
						<view class="weui-media-box__hd">
							<img class="weui-media-box__thumb" :src="v.getLogo" mode="aspectFill">
						</view>
						<view class="weui-media-box__bd flex1">
							<view class="weui-media-box__title lh-20 mb5">{{v.name}}</view>
							<view class="weui-media-box__desc">{{v.position}}</view>
						</view>
					</view>
				</view> -->
				<view id="article_list">
					<view class="list" v-for="v in data.detail.news_lists"> 
						<view class="item bg-f flex p15" @click="goto('/pages/hospital/item/show/index?id='+v.id,1)">
							<view class="limg mr15"><img class="img lazy flex" :src="v.getLogo"></view>
							<view class="rt flex1">
								<view class="tt fs-16 nowrap pt5">{{v.name}}</view>
								<view class="td fs-13 mt10 wrap2">{{v.position}}</view>
							</view>
						</view>
					</view>
				</view>
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
			<view class="nav dx-btn-orange" @click="phone(data.detail.userInfo.line_phone)">预约电话</view>
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
