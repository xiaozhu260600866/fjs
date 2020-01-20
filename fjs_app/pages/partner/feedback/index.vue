<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<view class="company-feedback">
				<view class="feedback-item" v-for="v in data.lists.data">
					<view class="content">{{v.content}}</view>
					<view class="date lh-20">
						<span class="fc-3 fs-13 pr10">{{v.getUser ? v.getUser.userInfo.name :''}}</span>
						<span class="fc-9 fs-13 Arial">{{v.created_at}}</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/partner/feedback',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
			}
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
		
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					console.log(this.data);
				});
			}
		}
	}
</script>
