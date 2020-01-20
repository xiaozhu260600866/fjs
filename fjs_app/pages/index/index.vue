<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		<view v-if="data.show">
			<view class="banner">
				<myswiper :lists="data.silders.data"></myswiper>
			</view>
			
			<view v-if="data.index_link.data.length">
				<view class="fun_button mb12">
					<view class="fun_button_con">
						<view class="a ptb8" v-for="(v,index) in data.index_link.data" :key="index">
							<myform :ruleform="{}" :append="true" :vaildate="{}" :data="v" @callBack="goto(v.url,v.redirect_type)">
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
			
			<view class="hospital bg-f mb12">
				<view class="ass-title p15 pr0 bg-f" @click="goto('/pages/hospital/lists/index',2)">
					<view class="name fs-16">医院推荐</view>
					<view class="icon iconfont icon-right fc-9 fs-13 pr15"></view>
				</view>
				<!-- 循环开始 -->
				<hospitalLists :data="data"></hospitalLists>
			</view>
			
			<view class="doctor bg-f mb12">
				<view class="ass-title p15 pr0 bg-f" @click="goto('/pages/doctor/lists/index',2)">
					<view class="name fs-16">医生推荐</view>
					<view class="icon iconfont icon-right fc-9 fs-13 pr15"></view>
				</view>
				<!-- 循环开始 -->
				<doctorLists :data="data"></doctorLists>
			</view>
			
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import hospitalLists from '@/components/hospitalLists';
	import doctorLists from '@/components/doctorLists';
	export default {
		components:{
			hospitalLists,
			doctorLists
		},
		data() {
			return {
				formAction: '/wapindex',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
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
		onLoad() {
			this.ajax();
		},
		onShow() {
			this.onShow(this);
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
