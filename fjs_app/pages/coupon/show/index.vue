<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show" class="coupon-show">
			<div class="banner">
				<img class="img" :src="getSiteName + '/upload/images/coupon/300_'+ data.detail.logo" mode="widthFix" />
			</div>
			<div class="weui-cells bgf mb10 mt0 detail-shop">
				<div class="weui-cell">
					<div class="weui-cell__bd cp-price">
						<p class="title fs-18">{{ data.detail.name }}</p>
						<div class="num-group flex-between">
							<div class="coupon-price">
								<p class="price fs-13">￥<span class="Arial fs-24">{{ data.detail.amount }}</span></p>
								<p class="require fs-13 fc-9 pl10 Arial">{{ data.detail.full_amount }}</p>
							</div>
							<p class="count-num fs-12 lh-20 fc-9">已领取：<span class="Arial">{{ data.detail.getOrderNum }}</span></p>
							<p class="count-num fs-12 lh-20 fc-9">剩余：<span class="Arial">{{ data.detail.getLeftNum }}</span></p>
						</div>
					</div>
				</div>
				<div class="weui-cell lh50">
					<div class="weui-cell__bd">
						<p class="date fs-14">使用有效期：<span class="Arial">{{  data.detail.start_date }} - {{ data.detail.expire_date }}</span></p>
					</div>
				</div>
				<div class="weui-cell bg-f lh50" @click="goto('/pages/business/show/index?user_id='+data.detail.getUser.id,1)">
					<div class="weui-cell__bd fs-14"><span class="iconfont icon-shop fc-9 fs-16"></span>  {{ data.detail.getUser.userInfo.company_name }} </div>
					<div class="weui-cell__ft"><span class="iconfont icon-right fs-12 fc-9"></span></div>
				</div>
				<div class="shop-contact">
					<div class="address bgf lh30"
					 @click="location(data.detail.getUser.userInfo.location_x,data.detail.getUser.userInfo.location_y,data.detail.getUser.userInfo.address)">
						<span class="iconfont icon-info-address fc-9 fs-16"></span> {{ data.detail.getUser.userInfo.address }}</div>
					<div class="tel bgf mt5" @click="phone(data.detail.getUser.userInfo.phone)"><span class="iconfont icon-tel fc-9 fs-16"></span></div>
				</div>
			</div>
			<div class="couponCon bgf">
				<div class="con-title lh40 bd-b fs-16 plr10"><span>详情</span></div>
				<div class="con-box p15 fs-14">
					<!-- {{ data.detail.remark }} -->
					<u-parse :content="data.detail.remark" />
					<img :src="getSiteName + '/upload/images/coupon/800_'+ v" mode="widthFix" style="width:100%" @click="previewImage(v,'coupon')" v-for="v in remarkImgArr"/>
				</div>
			</div>
			<myform :ruleform="{}" :vaildate="{}" @callBack="formSubmit" :append="true">
				<div slot="content">
					<div id="footer-btn">
						<a hover-class="none" open-type="switchTab" class="nav-btn" href="/pages/index/main">
							<p class="iconfont icon-coupon-home"></p>
							<p class="name">首页</p>
						</a>
						<button hover-class="none" open-type="share" class="nav-btn">
							<p class="iconfont icon-float-share-o"></p>
							<p class="name">分享</p>
						</button>
						<button type="button" class="f-btn-blue ml15" form-type="submit">去领券</button>
					</div>
				</div>
			</myform>
		</div>
		<couponPop ref="couponPop" :cpopDiv="cpopDiv"></couponPop>
	</view>
</template>

<script>
	import "./index.css";
	import couponPop from "@/components/couponPop";
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components:{
			couponPop,
			uParse
		},
		data() {
			return {
				formAction: '/user/coupon/create',
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
					console.log(this.data);
					this.remarkImgArr = msg.detail.cover ? msg.detail.cover.split(",") : '';
				});
			},
			formSubmit(){
				this.postAjax("/user/coupon/order/create",{coupon_id:this.data.query.id}).then(msg=>{
					this.$refs.couponPop.ajax(msg);
				});
			}
		}
	}
</script>
