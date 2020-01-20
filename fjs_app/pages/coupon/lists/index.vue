<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<div class="couponList">
				<!-- 循环开始 -->
				<button hover-class="none" class="coupon-box p10 mlr10 mtb15" @click="goto('/pages/user/coupon/details/main?id='+v.id)" v-for="v in data.lists.data">
					<div class="left-img mr15">
						<img class="img" :src="getSiteName+ '/upload/images/coupon/'+v.getCoupon.logo" />
					</div>
					<div class="con-info pr30">
						<p class="fs-14 title">{{ v.getCoupon.name }}1</p><!-- 优惠券名称 -->
						<p class="fs-12 fc-9 desc">{{ v.getCoupon.getUser.userInfo.company_name }}</p><!-- 商家名称 -->
						<p class="fs-13 fc-orange Arial price">￥<span class="fs-16">{{ v.getCoupon.amount }}</span></p>
					</div>
					<div class="right-status">
						<p class="fs-14 fc-orange dx-btn-xs dx-btn-orange-o plr10">{{ v.getStatus }}</p>
					</div>
				</button>
			</div>
			<hasMore :data="data" message="暂无优惠券" source="iconNo"></hasMore>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/user/coupon/order/lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				dis_id: 0,
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
