<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<div class="order-class bd-b bg-f mb10">
				<p :class="['nav-tab',data.query.status == 0 ? 'selected' :'']" @click="data.query.status = 0;ajax()">待使用({{data.order3Count}})</p>
				<p :class="['nav-tab',data.query.status == 1 ? 'selected' :'']" @click="data.query.status = 1;ajax()">已使用({{data.order9Count}})</p>
			</div>
			<div class="order-list mb8 pb10" v-for="(item,key) in data.lists.data">
				<div class="pro-info bd-be p10">
					<div class="p">订单编号：<span class="Arial">{{item.order_no}}</span></div>
					<div class="p">下单时间：<span class="Arial">{{item.created_at}}</span></div>
				</div>
				<div class="order_info ptb5 plr10">
					<div class="pro_img pr10">
						<image class="img" :src="'https://fjs.doxinsoft.com/upload/images/coupon/'+item.getCoupon.logo" />
					</div>
					<div class="pro_right flex1">
						<div class="tInfo w-b100">
							<p class="fs-14 lh-20 wrap2">{{item.getCoupon.name}}</p>
							<p class="nowrap fs-12 mt5 fc-9" v-if="item.getCoupon.is_info">{{item.getCoupon.attribute}}</p>
						</div>
						<div class="w-b100">
							<p class="fs-12 fc-6">已领：{{item.getCoupon.orderCount}} | 数量：<span>{{item.getCoupon.num}}</span></p>
						</div>
					</div>
				</div>
				<!-- <div class="order_count plr10 fs-13 text-right">共<span class="Arial">{{item.getCoupon.num}}</span>件商品
					实付：￥<span class="Arial fs-16 price">{{item.amount}}</span>
				</div> -->
				<!-- <div class="title">
					<div class="headPic mr10">
						<image class="head" :src="item.user.headerPic" />
					</div>
					<div class="userInfo">
						<p class="fs-14">{{item.user.username ? item.user.username : item.user.nickname}}</p>
					</div>
					<div class="price">
						<p class="fs-13 fc-6 Airal">{{ item.getCoupon?item.getCoupon.name :'订单已被删除'}}</p>
						<p class="fs-15">金额：￥<span class="Arial">{{item.amount}}</span></p>
					</div>
				</div> -->
			</div>
			
			<hasMore :parentData="data"></hasMore>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/hospital/order-lists',
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
				});
			}
		}
	}
</script>
