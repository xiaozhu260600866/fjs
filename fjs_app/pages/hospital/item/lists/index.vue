<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<!-- <view class="Hn-lists bg-f">
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
			</view> -->
			<view id="article_list">
				<view class="list" v-for="(v,key) in data.lists.data"> 
					<view class="item bg-f flex p15" @click="goto('/pages/hospital/item/show/index?id='+v.id,1)">
						<view class="limg mr15">
							<img class="img lazy flex" :src="v.getLogo ? v.getLogo : 'https://fjs.doxinsoft.com/images/nopic.jpg'" mode="aspectFill">
						</view>
						<view class="rt flex1">
							<view class="tt fs-16 nowrap pt5">{{v.name}}</view>
							<view class="td fs-13 mt10 wrap2" v-if="v.remark">{{v.remark}}</view>
						</view>
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
			if(options.type == 2){
				this.setTitle('特色项目');
			}else if(options.type == 3){
				this.setTitle('案例项目');
			}else if(options.type == 4){
				this.setTitle('最新资讯');
			}
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
