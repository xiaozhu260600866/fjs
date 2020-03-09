<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<view class="block-nav">
				<view :class="['nav',fclass == 0 ? 'act':'']" @click="fclass = 0">全部</view>
				<view :class="['nav',fclass == v.value ? 'act':'']" @click="search(v)" v-for="v in data.class">{{v.label}}</view>
			</view>
			<view id="article_list">
				<view class="list" v-for="v in data.lists.data"> 
					<view class="item bg-f flex p15" @click="goto('/pages/medical_news/show/index?id='+v.id,1)">
						<view class="limg mr15"><img class="img lazy flex" :src="v.firstCover"></view>
						<view class="rt flex1">
							<view class="tt fs-16 nowrap pt5">{{v.title}}</view>
							<view class="td fs-13 mt10 wrap2" >{{v.intro}}</view>
						</view>
					</view>
				</view>
				<hasMore :parentData="data"></hasMore>
			</view>
		</div>
	</view>
</template>

<script>
	import "./index.css";
	export default {
		data() {
			return {
				formAction: '/newLists.html',
				mpType: 'page', //用来分清父和子组件
				data: this.formatData(this),
				getSiteName: this.getSiteName(),
				fclass: 0,
				
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
			this.shareSource(this, '商城');
		},
		onLoad(options) {
			this.ajax();
		},
		methods: {
			search(v){
				this.fclass = v.value;this.ajax()
			},
			ajax() {
				this.getAjax(this,{fclass:this.fclass}).then(msg => {
					//this.setTitle(msg.lists.data[0].fclassname[0]);
				});
			}
		}
	}
</script>
