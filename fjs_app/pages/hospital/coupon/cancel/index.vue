<template>
	<view class="cancel-body p10">
		<page :parentData="data" :formAction="formAction"></page>
		<div class="cancel-sec bd-b" v-if="data.show">
			<div class="cancel-box">
				<p class="sec-title">券码核销</p>
				<p class="sec-input">
					<input type="text" v-model.lazy="ruleform.code" datatype="require" />
				</p>
				<button class="sub-btn-big sub-btn-orange" @click="toSubmit">核销</button>
			</div>
		</div>
		<div class="cancel-sec">
			<div class="cancel-box">
				<p class="sec-title">扫码核销</p>
				<button class="sub-btn-big mt40 sub-btn-orange" @click="scan">扫一扫</button>
			</div>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/hospital/index',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				ruleform:{code:'',clearType:1},
				code: '',
				vaildate: { /*验证规则，目前支前有，require|phone|integer|price*/
					code: { name: '券码', vaild: 'require' },
				},
				errorType: 0,
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
			this.ruleform.code = "";
		},
		onShow(){
			console.log(123)
			this.onShow(this);
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					console.log(this.data);
				});
			},
			toSubmit() {
				this.vaildForm(this, msg => {
					if (msg) {
						this.postAjax("/hospital/cancel", this.ruleform).then(msg => {
							if(msg.data.status == 2){
								this.ruleform.code = "";
								this.getSuccess("核销成功");
							}
						});
					}
				});
			},
			scan() {
				wx.scanCode({
					onlyFromCamera: true,
					success: (res) => {
						this.getError(res.result);
						this.ruleform.code = res.result;
						this.toSubmit();
					},
					fail:res=>{
						console.log(res);
					}
				})
			},
		}
	}
</script>
