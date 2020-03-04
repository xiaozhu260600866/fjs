<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<view class="Hn-lists bg-f">
				<view class="weui-media-box weui-media-box_appmsg" v-for="(v,key) in data.lists.data"
				 @click="goto('/pages/hospital/item/show/index?id='+v.id,1)">
					<view class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="v.getLogo ? v.getLogo : 'https://fjs.doxinsoft.com/images/nopic.jpg'" mode="aspectFill">
					</view>
					<view class="weui-media-box__bd flex1">
						<view class="weui-media-box__title lh-20 mb5">{{v.name}}</view>
						<view class="weui-media-box__desc">{{v.position}}</view>
					</view>
				</view>
			</view>
			<hasMore :parentData="data"></hasMore>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/hospital-record.html',
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
			this.shareSource(this, '商城');
		},
		onLoad(options) {
			this.ajax();
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					this.setTitle(msg.lists.data[0].fclassname[0]);
				});
			}
		}
	}
</script>
