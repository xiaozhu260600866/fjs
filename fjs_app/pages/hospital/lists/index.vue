<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		<view class="bg-f" v-if="data.show">
			<hospitalLists :data="data"></hospitalLists>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import hospitalLists from '@/components/hospitalLists';
	export default {
		components:{
			hospitalLists
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
		onLoad() {
			this.ajax();
		},
		onShow() {
			this.onShow(this);
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					//let desc = "当八周年庆典遇上双“十一”活动，全年仅此一次，不容错过，11元开团，可2-5人组团报名，低至六折";
					//this.$refs.page.share('嫣艺舞蹈','https://yy-dance.doxinsoft.com/upload/images/product/G5UVwKktkv.jpeg',desc);
				});
			}
		}
	}
</script>
