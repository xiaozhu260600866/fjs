<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<view class="Uhead-info main-bg ptb35">
				<view class="Utop plr20">
					<view class="Uinfo">
						<view class="header-img pr15">
							<image class="img" :src="data.user.headimgurl" />
						</view>
						<view class="fc-white info">
							<p class="fs-20">{{ data.user.nickname }}</p>
							<p class="Arial fs-16" v-if="data.user.userInfo.phone">{{ data.user.userInfo.phone }}</p>
						</view>
					</view>
				</view>
				
			</view>
			<view class="f-unav">
				<view class="item" @click="goto('/pages/coupon/order_lists/index?status=12',1)">
					<p class="unav-tab">
						<span class="iconfont icon-user-coupon-e"></span>
					</p>
					<p class="nav-txt">我的优惠券</p>
				</view>
				<view class="item" @click="goto('/pages/news/show/index?id=231',1)">
					<p class="unav-tab">
						<span class="iconfont icon-user-about"></span>
					</p>
					<p class="nav-txt">关于我们</p>
				</view>
				<!-- <view class="item">
					<p class="unav-tab">
						<span class="iconfont icon-user-tel"></span>
					</p>
					<p class="nav-txt">一键电话</p>
				</view> -->
				<view class="item" @click="checkHospital">
					<p class="unav-tab">
						<span class="iconfont icon-user-store"></span>
					</p>
					<p class="nav-txt">医院中心</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/user',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
			}
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
		
		methods: {
			checkHospital(){
				if(this.data.user.role == 2){
					return this.goto("/pages/hospital/login/index",1);	
				}else if(this.data.user.role == 7){
					return this.goto("/pages/hospital/index/index",1);
				}
			},
			lgout(){
				this.getConfirm("是否确认好退出",msg=>{
					this.postAjax("/user/login-out").then(msg=>{
						if(msg.data.status == 2){
							this.goto("/pages/user/login/index");	
						}
					});
				});
			},
			ajax() {
				this.getAjax(this).then(msg => {
					console.log(this.data);
				});
			}
		}
	}
</script>
