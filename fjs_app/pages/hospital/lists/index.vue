<template>
	<view>
		<page :parentData="data" :formAction="formAction" ref="page"></page>
		
		<view class="bg-f" v-if="data.show">
			<navBtn :data="data" :fclass="fclass"></navBtn>
			<view class="block-nav" v-if="data.class[selectKey].children.length">
				<view :class="['nav',fclass == children.value ? 'act':'']" @click="search(children)" v-for="(children,key) in data.class[selectKey].children">{{children.label}}</view>
			</view>
			<hospitalLists :data="data"></hospitalLists>
		</view>
	</view>
</template>

<script>
	import "./index.css";
	import hospitalLists from '@/components/hospitalLists';
	import navBtn from "@/components/navBtn";
	export default {
		components:{
			hospitalLists,
			navBtn
		},
		data() {
			return {
				formAction: '/wapindex',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				fclass:0
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
			this.getMyAddress(this).then(msg=>{
				this.ajax();
			});;
		},
		
		onShow() {
			this.onShow(this);
		},
		methods: {
			search(v) {
				console.log(v);
				this.fclass = v.value;
				this.ajax()
			},
			ajax() {
				this.getAjax(this,{	fclass: this.fclass}).then(msg => {
					//let desc = "当八周年庆典遇上双“十一”活动，全年仅此一次，不容错过，11元开团，可2-5人组团报名，低至六折";
					//this.$refs.page.share('嫣艺舞蹈','https://yy-dance.doxinsoft.com/upload/images/product/G5UVwKktkv.jpeg',desc);
				});
			}
		}
	}
</script>
