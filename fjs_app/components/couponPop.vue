<template>
	<section class="couponPop">
		<view class="share-overlay" v-if="thisDiag" ></view>
		<view class="Cpop-body p10" v-if="thisDiag">
			<!-- 领取成功显示此box -->
			<view class="Cpop-box" v-if="status == 2">
				<view class="Cpop-con">
					<view class="iconfont icon-coupon-yes"></view>
					<view class="p success fs-18">领取成功</view>
				</view>
				<view class="Cpop-button">
					<view class="try mr5 fs-18" @click="toggleDiag">稍后再使用</view>
					<view class="goTo sub-btn-blue ml5" @click="goto('/pages/user/coupon/details/main?id='+msg.id)">立即使用</view>
				</view>
			</view>
			<!-- 领取失败显示此box -->
			<view class="Cpop-box" v-if="status == 5">
				<view class="Cpop-con">
					<view class="iconfont icon-coupon-no"></view>
					<view class="success fs-18">领取失败</view>
					<view class="p fs-15 fc-6">您已有此优惠券，请使用后再领取</view>
				</view>
				<view class="Cpop-button">
					<view class="try mr5 fs-18" @click="toggleDiag">关闭</view>
					<view class="goTo sub-btn-blue ml5" @click="goto('/pages/user/coupon/details/main?id='+msg.id)">立即使用</view>
				</view>
			</view>
			<view class="Cpop-box" v-if="status == 4">
				<view class="Cpop-con">
					<view class="iconfont icon-coupon-no"></view>
					<view class="success fs-18">领取失败</view>
					<view class="p fs-15 fc-6">库存不足</view>
				</view>
				<view class="Cpop-button">
					<view class="try mr5" @click="toggleDiag">稍后再使用</view>
				</view>
			</view>
		</view>
	</section>
</template>
<script>
export default {
	props: ['text'],
	data() {
		return {
			status:0,
			msg:{},
			thisDiag:false
		}
	},
	methods: {
		toggleDiag() {
			this.thisDiag = !this.thisDiag;
		},
		ajax(msg){
			this.msg = msg.data;
			this.status = msg.data.status;
			this.thisDiag=true;
		},
		bindGetUserInfo(e) {
			if (e.mp.detail.userInfo) {

			} else {
				this.getError('授权失败');
			}
		}
	},
	onLoad(){
		this.thisDiag = false;
	}
}

</script>
<style>
.Cpop-box {position: fixed;min-height: 150px;background: #fff;border-radius: 3px 3px 0 0;z-index: 999;top: 50%;margin-top: -140px;left: 30px;right: 30px;border-radius: 6px;padding-bottom: 10px;}
.Cpop-con {padding: 25px 15px;text-align: center;}
.Cpop-con .iconfont{font-size: 70px;line-height: 80px;}
.Cpop-con .success {}
.Cpop-button {padding: 0 10px;display: flex;}
.Cpop-button .try {height: 50px;line-height: 50px;color: #666;background: #fff;font-size: 14px;text-align: center;width: 100%;background: #eee;border-radius: 6px;}
.Cpop-button .goTo {height: 50px;line-height: 50px;text-align: center;border-radius: 6px;width: 100%;}
.xiaoxiaozhu{background:red}
</style>
