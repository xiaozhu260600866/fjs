<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<div class="weui-cells mt0 news_lists">
				<!-- 循环开始 -->
				<div class="weui-cell p15" @click="goto('/pages/video/show/index?id='+v.id,1)" v-for="v in data.lists.data">
					<div class="weui-cell__bd">
						<p class="fs-16 lh-20">{{ v.name }}</p>
					</div>
					<div class="weui-cell__ft lh-20"><span class="iconfont icon-right fs-12 fc-b pr10"></span></div>
				</div>
				<hasMore :parentData="data"></hasMore>
			</div>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/videoLists.html',
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
