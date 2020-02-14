<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<div v-if="showMenu == 1">
				<div class="weui-panel weui-panel_access mt0">
					<div class="weui-panel__bd">
						<!-- 循环开始 -->
						<merchantCouponLists :data="data" type="auth"></merchantCouponLists>
						<hasMore :parentData="data"></hasMore>
					</div>
				</div>
				<div id="footer-btn">
					<div class="f-btn-orange mr5" @click="goto('/pages/hospital/coupon/create_edit/index',1)">发布</div>
					<div class="f-btn-orange ml5" @click="goto('/pages/hospital/coupon/cancel/index',1)">核销</div>
				</div>
			</div>
			<div v-if="showMenu == 2">
				<div class="count-sec bg-f">
					<p class="fs-14 text-right p15 ptb10 bd-be">领券：<span class="Arial">{{ data.orderListsStatus0.data.length }}</span></p>
					<!-- 循环开始 -->
					<div class="see-list mt0 bd-be" v-for="v in data.orderListsStatus0.data">
						<div class="weui-cell">
							<div class="weui-cell__hd ml5 mr15">
								<image class="img" :src="v.getUser.headerPic"></image>
							</div>
							<div class="weui-cell__bd mr10">
								<p class="fs-14">领券人：{{ v.getUser.nickname }}</p>
								<p class="fs-14 fc-9">时间：<span class="Arial">{{ v.start_date }}- {{ v.expire_date }}</span></p>
							</div>
							<div class="weui-cell__ft mr5 nav-group" v-if="v.getUser.userInfo.phone">
								<div class="group contact pl15" @click="goto('/pages/user/card/see/index?user_id='+v.user_id,1)">
									<span class="iconfont icon-card fs-20 fc-orange"></span>
								</div>
								<div class="group contact pl15" @click="goto('/pages/user/message/send/index?to_userid='+v.user_id,1)">
									<span class="iconfont icon-float-feedback fs-20 fc-orange"></span>
								</div>
							</div>
						</div>
						<div class="weui-cell pl20 ml50">
							<div href="" class="weui-cell__bd mr10">
								<p class="title fs-14">{{ v.getCoupon.name }}</p>
								<p class="info fs-14 fc-9">
									券<span class="price"> {{ v.getCoupon.amount }} </span>元（<span class="Arial">{{ v.getCoupon.full_amount }}</span>）
								</p>
							</div>
							<div class="weui-cell__ft mlr5">
								<p class="label fs-13">未使用</p>
							</div>
						</div>
					</div>
					<!-- 循环结束 -->
					
				</div>
			</div>
			<div v-if="showMenu == 3">
				<div class="count-sec bg-f">
					<p class="fs-14 text-right p15 ptb10 bd-be">使用：<span class="Arial">{{ data.orderListsStatus1.data.length }}</span></p>
					<!-- 循环开始 -->
					<div class="see-list mt0 bd-be" v-for="v in data.orderListsStatus1.data">
						<div class="weui-cell">
							<div class="weui-cell__hd ml5 mr15">
								<image class="img" :src="v.getUser.headerPic"></image>
							</div>
							<div class="weui-cell__bd mr10">
								<p class="fs-14">领券人：{{ v.getUser.nickname }}</p>
								<p class="fs-14 fc-9">时间：<span class="Arial">{{ v.created_at }}</span></p>
							</div>
							<div class="weui-cell__ft mr5 nav-group" v-if="v.getUser.userInfo.phone">
								<div class="group contact pl15" @click="goto('/pages/user/card/see/index?user_id='+v.user_id,1)">
									<span class="iconfont icon-card fs-20 fc-orange"></span>
								</div>
								<div class="group contact pl15" @click="goto('/pages/user/message/send/index?to_userid='+v.user_id,1)">
									<span class="iconfont icon-float-feedback fs-20 fc-orange"></span>
								</div>
							</div>
						</div>
						<div class="weui-cell pl20 ml50">
							<div href="" class="weui-cell__bd mr10">
								<p class="title fs-14">{{ v.getCoupon.name }}</p>
								<p class="info fs-14 fc-9">
									券<span class="price"> {{ v.getCoupon.amount }} </span>元（<span class="Arial">{{ v.getCoupon.full_amount }}</span>）
								</p>
							</div>
							<div class="weui-cell__ft mlr5">
								<p class="label fs-13">已使用</p>
							</div>
						</div>
					</div>
					<!-- 循环结束 -->
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	import merchantCouponLists from '@/components/merchantCouponLists';
	export default {
		components:{
			merchantCouponLists
		},
		data() {
			return {
				formAction: '/hospital/coupon-lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				showMenu:1
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
