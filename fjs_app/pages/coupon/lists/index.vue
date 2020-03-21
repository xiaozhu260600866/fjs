<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show" class="couponList bg-f">
			<!-- 循环开始 -->
			<view class="coupon-box"  v-for="v in data.lists.data">
				<myform :ruleform="{}" :append="true" :vaildate="{}" :data="item" @callBack="goto('/pages/coupon/show/index?id='+v.id,1)">
					<view slot="content" class="list_item plr15">
						<view class="item_box ptb15 bd-be">
							<view class="limg pr15">
								<image class="img" mode="aspectFill"
								 :src="v.logo ? getSiteName+ '/upload/images/coupon/300_'+v.logo : 'https://boss.doxinsoft.com/images/wap/nocoupon.png'" />
							</view>
							<view class="rinfo flex1 flex-between">
								<view class="lcon flex1 pr15">
									<p class="ctitle fs-15 lh-22 nowrap">{{v.name}}</p>
									<p class="cmark fs-12 lh-16 fc-5 mtb8 wrap2">{{v.need_remark}}</p>
									<p class="ctitle fs-12 lh-20 fc-5">{{v.hospital_name}}</p>
								</view>
								<view class="rdis flex-center flex-wrap">
									<p class="price fs-14" v-if="v.amount != '0.00'">￥<span class="fs-24">{{v.amount.split(".")[0]}}</span></p>
									<p :class="['fs-14 s-btn plr15 w-b100',v.status == 1 ? 'dx-btn-default': 'dx-btn-orange']"
									 :style="v.amount == '0.00' ? 'margin-top: 62px': 'margin-top: 30px'" >{{v.status == 1? '已领' :"领取"}}</p>
								</view>
							</view>
						</view>
					</view>
				</myform>
			</view>
			<hasMore :parentData="data" message="暂无优惠券" source="iconNo"></hasMore>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/coupon-lists.html',
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
