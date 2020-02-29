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
			<myswiper :lists="covers" purl="product"></myswiper>
			<div class="pro_infor bg-f pb0">
				<div class="flex-between">
					<div class="pro_name fs-16 pt10 plr15 flex1">针灸</div>
				</div>
				<div class="cms_price mlr15 mtb10 p0">
					<p class="price fs-28">
						<span class="span lh-16 fs-20">￥</span>
						<span class="span lh-34 fs-35">599</span>
						<span class="span lh-16 fs-20">.00</span>
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
					<p class="fs-16 fc-6 mb10 lh-24">针灸是一种中国特有的治疗疾病的手段。它是一种“内病外治”的医术。是通过经络、腧穴的传导作用，以及应用一定的操作法，来治疗全身疾病。</p>
					<p class="fs-16 fc-6 mb10 lh-24">在临床上按中医的诊疗方法诊断出病因，找出关键，辨别性质，明确病变属于哪一经脉，哪一脏腑，辨明它是属于表里、寒热、虚实中那一类型，做出诊断。然后进行相应的配穴处方进行治疗。以通经脉，调气血，使阴阳归于相对平衡，脏腑功能趋于调和，从而达到防疾病的目的。</p>
					<p class="fs-16 fc-6 mb10 lh-24">针灸疗法是祖国医学遗产的一部分，也是我国特有的一种民族医疗方法。千百年来，对保卫健康，繁衍民族，有过卓越的贡献，直到如今，仍然担当着这个任务，为广大群众所信赖。</p>
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
	
	export default {
		components: {
			
		},
		data() {
			return {

				formAction: '/wapindex',
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
				covers:[
					{cover: '/static/pro/1.jpg'}
				],

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
			imageLoad(e) {
				
				 var $width = e.detail.width, //获取图片真实宽度
					$height = e.detail.height,
					ratio = $width / $height; //图片的真实宽高比例
				var viewWidth = this.width, //如:375 i6屏宽
					viewHeight = this.width / ratio; //计算的高度值
				var image = [];
				//将图片的datadata-index作为image对象的key,然后存储图片的宽高值
				image[e.target.dataset.index] = {
					width: viewWidth,
					height: viewHeight
				}
				console.log(image);
				this.images = image;
				
				//广告图
				ctx.drawImage(this.posterFilePath, 0, 0, this.width, this.images[0].height)
				
				this.height = this.images[0].height + 120 ;
				//脚部背景
				ctx.setFillStyle('#fff')
				ctx.fillRect(0, this.images[0].height, this.width, 120)
				
				//二维码
				ctx.drawImage(this.qrcodeFilePath, 10, this.images[0].height+10, 100, 100)
				
				//商家名称
				ctx.setFontSize(20)
				ctx.setFillStyle('#F17E2A')
				if(this.data.product.takeMerchant){
					ctx.fillText(this.data.product.takeMerchant.userInfo.company_name, 130, this.images[0].height+42)
				}else{
					ctx.fillText(this.data.siteConfig.web_name, 130, this.images[0].height+42)
				}
				
				//长按扫码抢优惠
				ctx.setFontSize(13)
				ctx.setFillStyle('#333')
				ctx.fillText('长按扫码抢优惠', 130, this.images[0].height+66)
				
				//商家入驻
				ctx.setFontSize(12)
				ctx.setFillStyle('#999')
				//ctx.fillText('商家入驻:'+this.data.siteConfig.web_phone, 130,  this.images[0].height+88)
				
				// 经销商名称
				ctx.setFontSize(12)
				ctx.setFillStyle('#999')
				let nameWidth = this.data.product.name.length*12;
				//ctx.fillText(this.data.dis.name, this.width - nameWidth - 10, this.images[0].height+110)
			
				ctx.draw();
				
			},
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
			open(url){
				uni.hideLoading();
				uni.previewImage({
					current: url, // 当前显示图片的http链接
					urls: [url] // 需要预览的图片http链接列表
				})
			},
			vaild(num){
				console.log(num);
				if(isNaN(num) == true || num < 1){
					this.getError('数据不合法');
					return false;
				}else{
					return true;
				}
			},
			getforMatDate(created_at){
				let date2=created_at.replace(new RegExp(/-/gm) ,"/");
				let date1 = new Date(date2);
				return this.dateToString(date1);
			},
			gotoCart(){
				this.$store.state.mutations.historyUrl=true;
				this.goto('/pages/shop/user/cart/index?historyUrl=del',this.role_type == 2 ? 2 : 1)
			},
			editEvaluate(res){
				console.log(res);
				this.showEvaluate = res;
			},
			bannerChange: function(e) {
				this.bannerIndex = e.detail.current
			},
			previewImage: function(e) {
				let index = e.currentTarget.dataset.index;
				uni.previewImage({
					current: this.banner[index],
					urls: this.banner
				})
			},
			ajax() {
				this.getAjax(this).then(msg => {
					//this.lotusAddressData.visible = true;
					if(msg.product.video_url){
						this.getQQvideoLink(msg.product.video_url,msg=>{
							this.videoUrl = msg.url;
						});
					}
					wx.downloadFile({
						url:this.getSiteName+'/upload/images/product/'+msg.product.poster_cover,
						success:res=>{
							this.posterFilePath = res.tempFilePath;
							
						},
						fail:res=>{
							console.log(res);
						}
					});
					wx.downloadFile({
						url:this.getSiteName+'/upload/images/dis/p'+msg.product.id+'.jpg',
						success:res=>{
							this.qrcodeFilePath = res.tempFilePath;
							this.show = true;
						}
					});
					//this.$refs.productInfo.toggleInfoDiag();
				});
			},
			addCart() {
				if(this.vaild(this.num)){
					uni.setStorageSync('refreshUrl',"/pages/shop/user/cart/index");
					this.$store.state.mutations.cart = true;
					this.$refs.productInfo.showType = 'addCart';
					if (this.data.infoArr.length > 0) {
						this.$refs.productInfo.toggleInfoDiag();
					} else {
						this.$refs.productInfo.addCartAjax({
							id: this.data.product.id,
							num: this.num,
							is_info: 0
						});
					}
				}
			},
			infoCallBack(cartNum) {
				this.data.cartNum = cartNum;
			},
			toBuy() {
				if(this.vaild(this.num)){
					this.$refs.productInfo.showType = '';
					if (this.data.infoArr.length > 0) {
						this.$refs.productInfo.toggleInfoDiag();
					} else {
						this.$refs.productInfo.addCartAjax({
							id: this.data.product.id,
							num: this.num,
							is_info: 0
						});
					}
				}
			},
			addUserCollection() {
				let product_id = this.data.product.id;
				let url = "/shop/product/collection";
				if (this.data.collections) return false;
				this.postAjax(url, {
					id: product_id
				}, msg => {
					if (msg.data.status == 2) {
						this.data.collections = 1;
					}
				});
			},
			change: function(e) {
				this.index = e.index;
				this.current = e.index;
				this.num = e.value
			}
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