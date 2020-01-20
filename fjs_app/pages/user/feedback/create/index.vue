<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<view>
			<weui-input myclass="weui-feedback" v-model="ruleform.content" placeholder="请输入留言内容" type="textarea" name="content" datatype="require"></weui-input>
			<view class="subbtn m20" @click="submit"><button class="dx-btn dx-btn-big dx-btn-blue w-b100">提交</button></view>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/user',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{},
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
			//this.ajax();
		},
		
		methods: {
			submit(){
				if(!this.ruleform.content){
					this.getError("还没有留言内容");
					return false;
				}
				this.postAjax("/user/feedback-create",this.ruleform).then(msg=>{
					if(msg.data.status == 2){
						this.goto('/pages/user/feedback/lists/index',1);
						return false;
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
