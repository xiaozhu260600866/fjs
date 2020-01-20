<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<div class="order-class bd-b bgf">
				<p :class="['nav-tab',data.query.status == 12 ? 'selected' :'']" @click="changeStatus(12)">全部</p>
				<p :class="['nav-tab',data.query.status == 0 ? 'selected' :'']" @click="changeStatus(0)">待使用</p>
				<p :class="['nav-tab',data.query.status == 1 ? 'selected' :'']" @click="changeStatus(1)">已完成</p>
				
			</div>
			<div class="pro_info mb10" v-for="(parent,key) in data.lists.data">
				<div class="order_date plr10 bd-be">
					<div class="time fs-12">
						<p class="lh-18">
							<span class="fc-6">下单日期：</span>
							<span class="Arial">{{parent.created_at}}</span>
						</p>
						<p class="lh-18">
							<span class="fc-6">核销编号：</span>
							<span class="Arial">{{parent.order_no}}</span>
						</p>
					</div>
					<div class="state flex-middle">
						<p class="fc-orange fs-12 pr8">{{parent.status_message}}</p>
						<div v-if="data.query.status == 1 || data.query.status == 9 || data.query.status == 0">
							<p class="del-icon bg-f3 iconfont icon-cart-del fs-14" @click="delOrder(parent)"></p>
						</div>
					</div>
				</div>
				<div>
					<div class="order_info ptb5 plr10" v-if="parent.getCoupon">
						<div class="pro_img pr10">
							<image class="img" :src="getSiteName+ '/upload/images/coupon/300_'+parent.getCoupon.logo"  />
						</div>
						<div class="pro_right">
							<div class="tInfo w-b100">
								<p class="fs-14 lh-20 wrap2">{{parent.getCoupon.name}}</p>
							
							</div>
							<div class="w-b100">
								<p class="fs-12 fc-6">数量 × <span>1</span></p>
							</div>
						</div>
					</div>
				</div>
			
				<div class="order_count bd-be plr10 fs-13">共<span class="Arial">1</span>件商品
					实付：￥<span class="Arial fs-16">{{parent.amount}}</span>
				</div>
				<div class="btn-group ptb8 plr10">
					<div class="btn-item" v-if="parent.status == 3" @click="previewImage(parent.order_no+'.png','order')">
						<div class="btn-nav obtn" @click="goto('/pages/shop/order/after-sale/index?order_no='+parent.order_no,1)">核销</div>
					</div>
				</div>
			</div>
			<hasMore :parentData="data" source="order"></hasMore>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/user/coupon-lists',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				status: 12
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
		onShow(){
		    if(this.$store && this.$store.state && this.$store.state.mutations.historyUrl){
		        this.$store.state.mutations.historyUrl="";
		        this.ajax(); 
		    }
		},
		onLoad(options) {
			this.ajax();
		},
		methods: {
			gotoOrder(item){
				return item.status < 3 ? this.goto('/pages/shop/order/buy/index?order_no='+item.order_no,1):this.goto('/pages/shop/order/buy/detail?order_no='+item.order_no,1)
			},
			delOrder(item){
			   this.getConfirm("您确认要取消订单吗？", () => {
				   this.postAjax("/shop/user/change-order-status", {
						id: item.id,
						status: 2
					}).then(msg => {
						if (msg.data.status == 2) {
							this.data.nextPage = 1;
							this.ajax();
						}
					});
			   });
			},
			changeOrder(item) {
				this.getConfirm("您确认要取消订单吗？", () => {
					this.postAjax("/shop/user/change-order-status", {
						id: item.id,
						status: 0
					}).then(msg => {
						if (msg.data.status == 2) {
							this.data.nextPage = 1;
							this.ajax();
						}
					});
				});
			},
			changeStatus(status) {
				this.data.query.status = status;
				this.data.nextPage = 1;
				this.ajax();
			},
			ajax() {
				this.getAjax(this).then(msg => {
					console.log(this.data);
				});
			}
		}
	}
</script>
