<template>
	<view class="f2-body">
		<page :parentData="data" :formAction="formAction"></page>
		<view class="pb50">
			<view class="step1">
<!-- 				<myform :ruleform="ruleform" :vaildate="vaildate" @callBack="formSubmit" append="1" class="edit">
					<view slot="content">
						<button class="dx-btn dx-btn-sm dx-btn-blue-o fs16 plr15" form-type="submit"><span class="iconfont icon-edit pr5"></span>编辑</button>
					</view>
				</myform> -->
				<view class="weui-sec">
					<weui-input v-model="ruleform.name" label="姓名" type="text" name="name" datatype="require"></weui-input>
					<weui-input v-model="ruleform.phone" label="手机" type="text" name="phone" datatype="require|phone" :disabled="true"></weui-input>
					<weui-input v-model="ruleform.cardID" label="身份证" type="text" name="cardID" placeholder="请输入身份证号码" datatype="require"></weui-input>
				</view>
			</view>
			<view class="step2">
				<company :ruleform="ruleform" ref="company"></company>
			</view>
			<view class="info-sub">
				<myform :ruleform="ruleform" :vaildate="vaildate" @callBack="formSubmit"
				 title="提交" myclass="dx-btn dx-btn-lg dx-btn-blue w-b100"></myform>
			</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import company from "@/components/companys.vue";
	export default {
		data() {
			return {
				formAction: '/user',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform: {company:[]},
				vaildate:{},
			}
		},
		components:{
			company
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
			formSubmit(){
				if(this.$refs.company.vaild()){
					this.postAjax("/user/register",this.ruleform).then(msg=>{
							if(msg.data.status == 2){
								this.goto("/pages/user/index/index",1);
							}
					});
				}
			},
			ajax() {
				this.getAjax(this).then(msg => {
					this.data.user.getCompany.forEach(v=>{
						if(v.license){
							v.license = v.license.split(',');
						}else{
							v.license = [];
						}
						if(v.otherFile){
							v.otherFile =v.otherFile.split(',');
						}else{
							v.otherFile = [];
						}
						
					});
					this.ruleform.company = this.data.user.getCompany;
					this.ruleform.name = this.data.user.userInfo.name;
					this.ruleform.phone = this.data.user.userInfo.phone;
					this.ruleform.cardID = this.data.user.userInfo.cardID;
				});
			}
		}
	}
</script>
