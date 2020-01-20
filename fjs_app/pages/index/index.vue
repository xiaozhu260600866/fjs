<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		<view>
			<view class="banner">
				<myswiper :lists="data.silders.data"></myswiper>
			</view>
			<div class="box-title mer-title p15 pb10 bg-f mt10">
				<p class="name fs-18 fw-bold">医生推荐</p>
			</div>
			<div class="couponList bg-f">
				<!-- 循环开始 -->
				<div class="coupon-box" v-for="v in data.doctor_lists.data">
					<myform :ruleform="{}" :append="true" :vaildate="{}" :data="item" @callBack="goto('/pages/doctor/show/index?id='+v.id,1)">
						<div slot="content">
							<div class="list_item plr15">
								<div class="item_box ptb10 bd-be">
									<div class="limg pr10">
										<image class="img" :src="v.logo ? getSiteName+ '/upload/images/coupon/300_'+v.logo : 'https://boss.doxinsoft.com/images/wap/nocoupon.png'" />
									</div>
									<div class="rinfo flex1">
										<div class="tcon flex-between">
											<div class="info flex1 pr10">
												<p class="ctitle fs-15 lh-22">{{v.name}}</p>
												<p class="lh-20 star">
													<!-- <tui-rate :current="index" @change="change" :disabled="true"></tui-rate> -->
												</p>
												<p class="ctitle fs-12 fc-6 lh-20">{{v.phone}}</p>
											</div>
			
										</div>
			
									</div>
								</div>
							</div>
						</div>
					</myform>
				</div>
			</div>
			
			<div class="box-title mer-title p15 pb10 bg-f mt10">
				<p class="name fs-18 fw-bold">医院推荐</p>
			</div>
			<div class="couponList bg-f">
				<!-- 循环开始 -->
				<div class="coupon-box" v-for="v in data.lists.data">
					<myform :ruleform="{}" :append="true" :vaildate="{}" :data="item" @callBack="goto('/pages/hospital/show/index?id='+v.id,1)">
						<div slot="content">
							<div class="list_item plr15">
								<div class="item_box ptb10 bd-be">
									<div class="limg pr10">
										<image class="img" :src="v.logo ? getSiteName+ '/upload/images/coupon/300_'+v.logo : 'https://boss.doxinsoft.com/images/wap/nocoupon.png'" />
									</div>
									<div class="rinfo flex1">
										<div class="tcon flex-between">
											<div class="info flex1 pr10">
												<p class="ctitle fs-15 lh-22">{{v.userInfo.company_name}}</p>
												<p class="lh-20 star">
													<!-- <tui-rate :current="index" @change="change" :disabled="true"></tui-rate> -->
												</p>
												<p class="ctitle fs-12 fc-6 lh-20">{{v.getUser.userInfo.company_name}}</p>
											</div>

										</div>

									</div>
								</div>
							</div>
						</div>
					</myform>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/wapindex',
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
		onLoad() {
			this.ajax();
		},
		onShow() {
			this.onShow(this);
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					//let desc = "当八周年庆典遇上双“十一”活动，全年仅此一次，不容错过，11元开团，可2-5人组团报名，低至六折";
					//this.$refs.page.share('嫣艺舞蹈','https://yy-dance.doxinsoft.com/upload/images/product/G5UVwKktkv.jpeg',desc);
				});
			}
		}
	}
</script>
