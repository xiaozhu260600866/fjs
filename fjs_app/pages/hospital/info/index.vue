<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<div class="list-group" style="padding-bottom: 50px;">
				<weui-input v-model="ruleform.name" label="联系人" type="text" name="name" datatype="require"></weui-input>
				<weui-input v-model="ruleform.phone" label="手机" placeholder="请一键授权手机号" type="text" name="phone" datatype="require" :disabled="false">
					<div slot="right">
						<button hover-class="none" class="fs-12 location-nav dx-btn-blue-o ml10" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">一键授权</button>
					</div>
				</weui-input>
				<weui-input v-model="ruleform.company_name" label="公司" type="text" name="company_name" datatype="require"></weui-input>
				<div class="weui-cells__title mark-title m0 lh40 plr15 fs14">公司logo</div>
				<weui-input myclass="pt8" v-model="ruleform.company_logo" type="upload" upurl='user' allowUpLoadNum="1"></weui-input>
				<div class="weui-cells__title mark-title m0 lh40 plr15 fs14">官网滚动图片<span class="fs12 font_grey">(图片尺寸640*350)</span></div>
				<weui-input myclass="pb10 pt8" v-model="ruleform.swiper" type="upload" upurl='user' allowUpLoadNum="3"></weui-input>
				<div class="weui-cells__title mark-title m0 lh40 plr15 fs14">展示图片</div>
				<weui-input myclass="pb10 pt8" v-model="ruleform.mien_pic" type="upload" upurl='user' allowUpLoadNum="3"></weui-input>
			</div>
		</div>
		<myform :ruleform="ruleform" :vaildate="vaildate" @callBack="formSubmit" :append="true">
			<div slot="content">
				<div id="footer-btn">
					<button hover-class="none" type="button" class="f-btn-orange" id="phone_submit" form-type="submit">保存</button>
				</div>
			</div>
		</myform>
		<mySelect ref="mySelect2" @callBack="chooseCallBack2" :lists="data.diquArr" :label="'请选择地区'"></mySelect>
	</view>
</template>

<script>
	import mySelect from 'xiaozhu/wechatapp/components/select';
	import "./index.css";
	export default {
		components: { mySelect },
		data() {
			return {
				formAction: '/hospital/info',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform: {},
				vaildate: {},
				popDiv: false,
				industry:'',
				industryArr:[],
				showType: 'video',
				loadMore: false,
				isFixed: false,
				industryDiag: false,
				ANavType: 0,
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
		onShow() {
			console.log(123)
			this.onShow(this);
		},
		methods: {
			chooseCallBack2(item) {
				this.ruleform.city = item.label;
			},
			formSubmit() {
				if (this.ruleform.name.length >= 8) {
					this.getError("请输入正确姓名");
					return false;
				}
				this.postAjax("/hospital/info", this.ruleform).then(msg=>{
					if (msg.data.status == 2) {
						wx.navigateBack({})
					}
				});
			},
			ajax() {
				this.getAjax(this).then(msg => {
					this.ruleform = msg.user.userInfo;
					this.ruleform.company_logo = this.ruleform.company_logo ? this.ruleform.company_logo.split(",") : [];
					this.ruleform.remark_pic = this.ruleform.remark_pic ? this.ruleform.remark_pic.split(",") : [];
					this.ruleform.swiper = this.ruleform.swiper ? this.ruleform.swiper.split(",") : [];
					this.ruleform.mien_pic = this.ruleform.mien_pic ? this.ruleform.mien_pic.split(",") : [];
					this.ruleform.city = msg.user.city;
					this.ruleform.username = msg.user.username;
				});
			}
		}
	}
</script>
