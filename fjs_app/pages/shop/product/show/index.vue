<template>
	<view >
		<page :parentData="data" :formAction="formAction"></page>
		<div class="pb50" v-if="data.show">
			<!--header-->
			<view class="tui-header-box" :style="{height:height_+'px',background:'rgba(255,255,255,'+opcity+')'}">
				<view class="tui-header" :style="{marginTop:top+'px', opacity:opcity}">
					商品详情
				</view>
				<view class="tui-header-icon" :style="{marginTop:top+'px'}">
					<view class="iconfont icon-left tui-icon-back" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')'}"
					 @tap="back"></view>
				</view>
			</view>
			<myswiper :lists="data.cover" purl="product"></myswiper>
			<div class="pro_infor bg-f pb0">
				<div class="flex-between">
					<div class="pro_name fs-16 pt10 plr15 flex1">{{data.detail.name}}</div>
				</div>
				<div class="cms_price mlr15 mtb10 p0">
					<p class="price fs-28">
						<span class="span lh-16 fs-20">￥</span>
						<span class="span lh-34 fs-35">{{data.detail.price}}</span>
						<!-- <span class="span lh-16 fs-20">.00</span> -->
					</p>
				</div>
			</div>
			<div class="pro_title mt10 bg-f">
				<div class="title-item">
					<span class="cur">商品详情</span>
				</div>
			</div>
			<div class="pro-content bg-f">
				<div class="pro-con-main p15">
					<u-parse :content="data.detail.content" />
				</div>
			</div>
			
		</div>

		<div class="mt10">
			<div id="footer">
				<div class="left plr8">
					<button class="btn-item" hover-class="none" @click="goto('/pages/shop/index/index',2)">
						<p class="iconfont icon-pro-shop"></p>
						<p class="txt">首页</p>
					</button>
					<button class="btn-item" hover-class="none" open-type="share">
						<p class="iconfont icon-share"></p>
						<p class="txt">分享</p>
					</button>
					<button class="btn-item" hover-class="none" @click="phone(data.config.web_phone)">
						<p class="iconfont icon-tel"></p>
						<p class="txt">一键拨号</p>
					</button>
				</div>
				<div class="right flex1 w-b100 pr5">
					<div class="r-nav">
						<button class="r-item r-item-red" hover-class="none" open-type="contact"><span>在线咨询</span></button>
					</div>
				</div>
				
			</div>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components: {
			uParse
		},
		data() {
			return {

				formAction: '/productShow.html',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				width:0,
				height_:64,
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
			

			}
		},
		onReachBottom() {
			console.log('123');
			this.hasMore(this);
		},
		onPullDownRefresh() {
			this.data.nextPage = 1;
			this.ajax();
		},
		onShareAppMessage() {
			if (this.data.dis) this.data.query.distribution = this.data.dis.id;
			this.data.query.shareImg = this.data.product.firstCover;;
			return this.shareSource(this, this.data.product.name,'notShareSource');
		},
		onLoad(options) {
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif
			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height_ = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					this.scrollH = res.windowWidth
					this.width_ = res.windowWidth
					this.height = res.windowHeight
				}
			})
			this.ajax();
		},

		methods: {

			toOpen(){
				if(this.tempFilePath){
				
					this.open(this.tempFilePath);
				}else{
					setTimeout(()=>{
							uni.canvasToTempFilePath({
							canvasId: 'firstCanvas',
							success:res=> {
								console.log(res);
								this.tempFilePath = res.tempFilePath;
								this.open(this.tempFilePath);
							},
							fail:res=>{
								console.log(res);
							}
						})
					},200)
				}
				
				
			},
			
		
			ajax() {
				this.getAjax(this).then(msg => {
					
				});
			},
			
			
		},
		onPageScroll(e) {
			let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
			let opcity = scroll / this.scrollH;
			if (this.opcity >= 1 && opcity >= 1) {
				return;
			}
			this.opcity = opcity;
			this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
		}
	}
</script>