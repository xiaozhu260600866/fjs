<template class="user-body">
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view class="logo-img pt40 text-center">
			<img class="img" :src="getSiteName+'/upload/images/product/'+data.siteConfig.web_logo">
		</view>
		<div class="login-info plr15 pt20">
			<weui-input v-model="ruleform.username" type="text" name="username" placeholder="请输入登录帐号" datatype="require">
				<div slot="left">
					<img class="licon" src="https://456.doxinsoft.com/images/admin/wap_user.png">
				</div>
			</weui-input>
			<weui-input v-model="ruleform.password" type="password" name="password" placeholder="请输入密码" datatype="require">
				<div slot="left">
					<img class="licon" src="https://456.doxinsoft.com/images/admin/wap_lock.png">
				</div>
			</weui-input>
			<myform :ruleform="ruleform" :vaildate="vaildate" @callBack="formSubmit" myclass="dx-btn dx-btn-big dx-btn-blue w-b100 bdr25 mt20"></myform>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/partner/login',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform: {},
				vaildate:{}
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
			formSubmit() {
				this.postAjax(this.formAction, this.ruleform).then(msg => {
					if (msg.data.status == 2) {
						this.goto("/pages/partner/index/index");
					}
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
