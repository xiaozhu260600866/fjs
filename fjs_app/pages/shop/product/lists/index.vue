<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<view class="tui-header-box">
				<view class="tui-header" :style="{width:width+'px',height:height+'px'}">
					<view class="tui-searchbox tui-search-mr" :style="{marginTop:inputTop+'px'}" @tap="search">
						<text class="tui-search-text" v-if="!searchKey">搜索商品</text>
						<view class="tui-search-key" v-if="searchKey">
							<view class="tui-key-text">{{searchKey}}</view>
							<tui-icon name="shut" :size='12' color='#fff'></tui-icon>
						</view>
					</view>
				</view>
			</view>
			<productLists :data="data" :style="{marginTop:px(dropScreenH-155)}"></productLists>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	import productLists from "@/components/productLists";
	export default {
		components:{
			productLists
		},
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
