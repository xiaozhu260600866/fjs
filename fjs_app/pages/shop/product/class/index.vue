<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div id="footer-btn" v-if="data.show">
			<button @click="bing" class="f-btn-green w-b100">绑定</button>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/shop/product/class',
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
			bing(){
				this.getConfirm("是否确认？绑定？", msg => {
					this.postAjax("/user/bing", {
						user_id: this.data.query.scene
					}).then(msg=>{
						if (msg.data.status == 2) {
						
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
