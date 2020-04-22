<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<!-- <div class="content" v-if="data.show">
			<view class="video"><video :src="videoSrc" autoplay="true"></video></view>
			<div class="con p15 pt5">
				<u-parse :content="data.detail.content" />
			</div>
		</div> -->
		<view v-if="data.show">
			<view class="p15 fs-18 lh-24">{{data.detail.name}}</view>
			<view class="mark fc-9 fs-12 flex-between flex-middle plr15 pb15">
				<view class="date">{{data.detail.created_at}}</view>
				<view class="hos">{{data.detail.fclassName}}</view>
			</view>
			<view class="video bg-f plr15 pb15" v-if="data.detail.url.length"><video :src="videoSrc" autoplay="true"></video></view>
			<view class="content bg-f fs-15 plr15 pb15">
				<u-parse :content="data.detail.content" />
			</view>
		</view>
	</view>
</template>

<script>
	import "@/components/gaoyia-parse/parse.css";
	import uParse from '@/components/gaoyia-parse/parse.vue'
	import "./index.css";
	export default {
		components: {
			uParse,
		},
		data() {
			return {
				formAction: '/videoShow.html',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				videoSrc:'',
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
					this.setTitle(this.data.detail.name);
					console.log(this.data.detail.url);
					this.getQQvideoLink(this.data.detail.url, msg => {
						
						this.videoSrc = msg.url;
					}); 
				});
			}
		}
	}
</script>
