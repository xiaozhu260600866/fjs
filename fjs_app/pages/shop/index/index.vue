<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page">
		</page>
		<view v-if="data.show">
			<view class="banner">
				<myswiper :lists="data.silders.data"></myswiper>
			</view>
			
			<view v-if="data.index_link.data.length">
				<view class="fun_button mb12">
					<view class="fun_button_con">
						<view class="a ptb8" v-for="(v,index) in links" :key="index">
							<myform :ruleform="{}" :append="true" :vaildate="{}" :data="v" @callBack="goto('/pages/shop/product/lists/index',1)">
								<view slot="content">
									<view :class="['button-img']">
										<image :src=" v.cover " :class="['img']" />
									</view>
									<view :class="['button-txt','pt5', 'fs-13','fc-3','text-center','lh-20']"><span>{{v.name}}</span></view>
								</view>
							</myform>
						</view>
					</view>
				</view>
			</view>
			
			<view class="ass-title p15 pr0 bg-f" @click="goto('/pages/shop/product/lists/index',1)">
				<view class="name fs-16">商品推荐</view>
				<view class="icon iconfont icon-right fc-9 fs-13 pr15"></view>
			</view>
			<productLists :data="data"></productLists>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import productLists from "@/components/productLists";
	export default {
		components:{
			productLists
		},
		data() {
			return {
				formAction: '/wapindex',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				links:[
					{cover: '/static/inav1.png',name: '推拿'},
					{cover: '/static/inav2.png',name: '拔罐'},
					{cover: '/static/inav3.png',name: '针灸'},
					{cover: '/static/inav4.png',name: '其他'},
				],
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
			return this.shareSource(this, '福加斯大健康信息平台');
		},
		onShow() {
			if (wx.getStorageSync('city')) {
				console.log(11);
				this.otherData.city = wx.getStorageSync('city');
			}else{
				wx.setStorageSync('city', "江门市");
			}
			
		},
		onLoad(options) {
			this.getMyAddress(this).then(msg=>{
				this.ajax();
			});;
			
		},
		
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					//let desc = "当八周年庆典遇上双“十一”活动，全年仅此一次，不容错过，11元开团，可2-5人组团报名，低至六折";
					//this.$refs.page.share('嫣艺舞蹈','https://yy-dance.doxinsoft.com/upload/images/product/G5UVwKktkv.jpeg',desc);
				});
			}
		}
	}
</script>
