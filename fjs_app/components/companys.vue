<template>
	<div>
		<!-- <view class="step-title ptb12 bd-be text-center"><span class="name fs-20 fc-black">企业信息</span></view> -->
		<view v-for="(v,key)  in  ruleform.company">
			<!-- <view class="companyNo plr15 fs-16 pt15 text-center">企业{{key+1}}</view> --> <!-- 有2个以上企业信息才显示这个小标题并加以数字显示 -->
			<view class="company weui-sec">
				<view class="del-company" @click="delCompany(key)" v-if="key > 0"><span class="iconfont icon-xz-off-circle fs-20 fc-9"></span></view><!-- 企业2之后出现可模块删除功能 -->
				<weui-input v-model="v.name" label="企业名称" type="text" ></weui-input>
				<weui-input v-model="v.legalPerson" label="法人" type="text"  ></weui-input>
				<weui-input v-model="v.license" label="上传执照" type="upload" upurl='article' allowUpLoadNum="1" name="license"
				 myclass="weui-pic"></weui-input>
				<weui-input v-model="v.otherFile" label="其它文件" type="upload" upurl='article' allowUpLoadNum="5" name="otherFile"
				 myclass="weui-pic"></weui-input>
			</view>
		</view>
		<view class="add-company plr15 fc-blue fs-16 pb10" @click="addCompany">添加企业+</view>
	</div>
</template>

<script>
	export default{
		props:["ruleform"],
		methods:{
			delCompany(key){
				this.ruleform.company.splice(key,1);
			},
			addCompany(){
				this.ruleform.company.push(
					{name:'',legalPerson:'',license:[],otherFile:[]},
				);
			},
			vaild(){
				console.log(1);
				if(this.ruleform.company.length == 0){
					this.getError("企业信息不能为空");
					return false;
				}
				let res = true;
				this.ruleform.company.forEach(v=>{
					if(!v.name){
						this.getError("企业姓名不能为空");
						res = false;
					}
					if(!v.legalPerson){
						this.getError("法人代表不能为空");
						res = false;
					}
					if(!v.license.length){
						this.getError("上传执照不能为空");
						res = false;
					}
				});
				return res;
			}
		}
	}
</script>

<style>
</style>
