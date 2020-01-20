<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<view class="Uhead-info main-bg ptb35">
				<view class="Utop plr20">
					<view class="Uinfo">
						<view class="header-img pr15">
							<image class="img" :src="data.user.headimgurl" />
						</view>
						<view class="fc-white info">
							<p class="fs-20">{{data.user.userInfo.name}}</p>
							<p class="Arial">{{data.user.userInfo.phone}}</p>
						</view>
					</view>
				</view>
				<view class="Utop-quit" @click="lgout">退出</view>
			</view>
			<div class="stuff-sec bg-f">

				<div class="sec-group">
					<div class="item" @click="goto('/pages/hospital/coupon/order-list/index?status=0',1)">
						<image src="https://boss.doxinsoft.com/images/site/dis-icon01.jpg" />
						<p class="p">我的订单</p>
						<p class="num fs-14 fc-6"><span class=" fs-15">{{ data.orderCount }}</span> 笔</p>
					</div>
				</div>
				<div class="sec-group">
					<div class="item" @click="goto('/pages/hospital/coupon/lists/index',1)">
						<image src="https://boss.doxinsoft.com/images/site/dis-icon03.jpg" />
						<p class="p">发布优惠券</p>
						<p class="num fs-14 fc-6"></p>
					</div>
				</div>
				<div class="sec-group">
					<div class="item" @click="goto('/pages/hospital/coupon/cancel/index',1)">
						<image src="https://boss.doxinsoft.com/images/site/dis-icon02.jpg" />
						<p class="p">优惠券核销</p>
						<p class="num fs-14 fc-6"></p>
					</div>
				</div>
				<div class="sec-group">
					<div class="item" @click="goto('/pages/hospital/info/index',1)">
						<image src="https://boss.doxinsoft.com/images/site/dis-icon07.png" />
						<p class="p">商家资料</p>
						<p class="num fs-14 fc-6"></p>
					</div>
				</div>
				
			</div>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/hospital/index',
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
		onShow() {
			console.log(123)
			this.onShow(this);
		},
		methods: {
			lgout(){
				this.getConfirm("是否确认好退出",msg=>{
					this.postAjax("/hospital/login-out").then(msg=>{
						if(msg.data.status == 2){
							this.goto("/pages/hospital/login/index");	
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
