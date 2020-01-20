<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<weui-input v-model="ruleform.name" label="优惠券名称" type="text" name="name" placeholder=" " datatype="require"></weui-input>
			<weui-input v-model="ruleform.amount" label="优惠券金额" type="number" name="amount" placeholder=" " datatype="require"></weui-input>
			<weui-input v-model="ruleform.discount" label="折扣" type="text" name="discount" placeholder=" " datatype="require"></weui-input>
			<weui-input v-model="ruleform.num" label="数量" type="number" name="num" placeholder=" " datatype="require"></weui-input>
			<weui-input v-model="ruleform.start_at" label="开始时间" type="date" name="start_at" datatype="require"></weui-input>
			<weui-input v-model="ruleform.end_at" label="展示有效期" type="date" name="end_at" datatype="require"></weui-input>
			<div class="weui-cells__title mark-title m0 ptb10 font_666 bgf5">优惠券封面图片</div>
			<weui-input v-model="ruleform.logo" type="upload" upurl='coupon' allowUpLoadNum="1" name="logo" datatype="array"
			 placeholder="封面图"></weui-input>
			<div class="weui-cells__title mark-title m0 ptb10 font_666 bgf5">使用需知</div>
			<weui-input v-model="ruleform.need_remark" type="textarea" name="need_remark" placeholder="请输入优惠券详情"></weui-input>
			<div class="weui-cells__title mark-title m0 ptb10 font_666 bgf5">简介</div>
			<weui-input v-model="ruleform.content" type="textarea" name="content" placeholder="请输入优惠券详情"></weui-input>
			<div class="weui-cells__title mark-title m0 ptb10 font_666 bgf5">详情图片</div>
			<weui-input v-model="ruleform.cover" type="upload" upurl='coupon' allowUpLoadNum="9" name="cover"></weui-input>
			<myform :ruleform="ruleform" :vaildate="vaildate" @callBack="formSubmit" :append="true">
				<div slot="content">
					<div class="p20">
						<button class="sub-btn-big sub-btn-orange" form-type="submit">提交</button>
					</div>
				</div>
			</myform>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/user/coupon/create',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform: {
					cover: [],
					logo: []
				},
				vaildate: {}
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
			if(options.id){
				this.formAction = "/hospital/coupon-edit";
				this.ajax();
			}else{
				this.formAction = "/hospital/coupon-create";
				this.data.show = true;
			}
			
		},
		onShow() {
		
			this.onShow(this);
		},
		methods: {
			formSubmit() {
				
				this.postAjax(this.formAction, this.ruleform).then(msg=>{
					if (msg.data.status == 2) {
						this.goto("/pages/hospital/coupon/lists/index?user_id=" + msg.data.myUser.id);
					}
				});
			},
			ajax() {
				this.getAjax(this).then(msg => {
					if (this.$root.$mp.query.id) {
						this.ruleform = msg.detail;
						this.ruleform.cover = this.ruleform.cover ? this.ruleform.cover.split(",") : [];
						this.ruleform.logo = this.ruleform.logo ? this.ruleform.logo.split(",") : [];
					} else {
						this.ruleform = {
							cover: [],
							logo: []
						};
					
					}
				});
				
			}
		}
	}
</script>
