<template class="user-body">
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view v-if="data.show">
			<view class="Uhead-info main-bg ptb35">
				<view class="Utop plr20">
					<view class="Uinfo">
						<view class="header-img pr15">
							<image class="img" :src="data.user.headimgurl" />
						</view>
						<view class="fc-white info">
							<p class="fs-20">{{data.user.userInfo.name}}</p>
							<p class="Arial">{{data.user.userInfo.phone}}</p>
						</view>
					</view>
				</view>
				<view class="Utop-quit" @click="lgout">退出</view>
			</view>
			<view class="company-list" v-if="data.lists.data.length">
				<view class="company-item" v-for="v in data.lists.data">
					<view class="left-info">
						<view class="name fs-16 fc-3 lh-24 mb3">{{v.userInfo.name}}</view>
						<view class="people fs-14 fc-6 lh-20">{{v.userInfo.phone}}</view>
					</view>
					<view class="right-icon iconfont icon-shengxi-feedback" @click="goto('/pages/partner/feedback/index?to_partner_id='+v.id,1)"></view>
				</view>
			</view>
			<view class="p50 text-center fs-14 fc-9" v-else>暂无企业</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/partner/index',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
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
			lgout(){
				this.getConfirm("是否确认好退出",msg=>{
					this.postAjax("/partner/login-out").then(msg=>{
						if(msg.data.status == 2){
							this.goto("/pages/partner/login/index");	
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
