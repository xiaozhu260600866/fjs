<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div class="content" v-if="data.show">
			<video :src="videoSrc" autoplay="true"></video>
			<div class="con p15 pt5">
				<u-parse :content="data.detail.content" />
			</div>
		</div>
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
