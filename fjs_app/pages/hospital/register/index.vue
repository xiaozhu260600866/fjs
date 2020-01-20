<template>
	<view class="f2-body">
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<view class="step1" v-if="step == 1">
				<!-- <view class="step-title ptb12 bd-be text-center"><span class="name fs-20 fc-black">基本信息</span></view> -->
				<view class="weui-sec bd0 m0">
					<weui-input v-model="ruleform.name" label="姓名" type="text" name="name" datatype="require"></weui-input>
					<weui-input v-model="ruleform.phone" label="手机" type="text" name="phone" datatype="require|phone"></weui-input>
					<weui-input v-model="ruleform.password" label="密码" type="password" placeholder="请输入密码" name="password" datatype="require"></weui-input>
					<weui-input v-model="ruleform.cardID" label="身份证" type="text" name="cardID" placeholder="请输入身份证号码" datatype="require"></weui-input>
					<weui-input v-model="ruleform.sms_code" label="验证码" type="sms" name="sms_code" placeholder="验证码" datatype="require" :phone="ruleform.phone"
					 action="/sendSms.html" myclass="weui-sms"></weui-input>
				</view>
				<myform class="m20" :ruleform="ruleform" :vaildate="vaildate" @callBack="next" title="下一步"
				 myclass="dx-btn dx-btn-big dx-btn-blue w-b100"></myform>
			</view>
			<view class="step2" v-if="step == 2">
				<company :ruleform="ruleform" ref="company"></company>
				<myform class="m20" :ruleform="ruleform" :vaildate="vaildate" @callBack="submit()" title="提交"
				 myclass="dx-btn dx-btn-big dx-btn-blue w-b100"></myform>
			</view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import company from "@/components/companys.vue";
	export default {
		components:{
			company
		},
		data() {
			return {
				formAction: '/user',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform: {
					company:[
						{name:'',legalPerson:'',license:[],otherFile:[]},
					]
				},
				vaildate:{},
				step: 1
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
			if(options.partner_id){
				this.ruleform.partner_id = options.partner_id;
			}
			//this.ajax();
		},
		
		methods: {
			
			
			next(){
				 let smsCode = uni.getStorageSync('smsCode');
				 console.log(smsCode);
				if(smsCode != this.ruleform.sms_code){
					this.getError("验证码不正确，请重新输入");
					return false;
				}
				this.step = 2;
			},
			submit(){
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
					console.log(this.data);
				});
			}
		}
	}
</script>
