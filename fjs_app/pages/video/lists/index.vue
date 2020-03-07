<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<view class="block-nav">
				<view :class="['nav',fclass == 0 ? 'act':'']" @click="fclass = 0">全部</view>
				<view :class="['nav',fclass == v.value ? 'act':'']" @click="search(v)" v-for="v in data.class">{{v.label}}</view>
			</view>
			<view class="case_list pt15">
				<view class="list p15 pt0" v-for="v in data.lists.data"> 
					<view class="item p15 bg-f bdr3" @click="goto('/pages/video/show/index?id='+v.id,1)">
						<view class="timg mb10"><img class="img lazy flex" :src="v.firstCover" mode="aspectFill"></view>
						<view class="bt">
							<view class="tt fs-16 nowrap lh-20">{{v.name}}</view>
							<view class="td fs-13 fc-9 mt10 wrap2" v-if="v.intro">{{v.intro}}</view>
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
				formAction: '/videoLists.html',
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
