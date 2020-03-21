<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<view class="nav_btn mb12">
				<view class="item" v-for="(v,key) in data.class" v-if="v.can_show" @click="changeKey(key)">
					<view>
						<view class="nav_img">
							<image :src=" v.cover " :class="['img']" />
						</view>
						<view class="txt"><span>{{v.label}}</span></view>
					</view>
				</view>
			</view>
			<view class="block-nav" v-if="data.class[selectKey].children.length">
				<view :class="['nav',fclass == children.value ? 'act':'']" @click="search(children)" v-for="(children,key) in data.class[selectKey].children">{{children.label}}</view>
			</view>
			<view id="article_list">
				<view class="list" v-for="v in data.lists.data">
					<view class="item bg-f flex p15" @click="goto('/pages/medical_news/show/index?id='+v.id,1)">
						<view class="limg mr15"><img class="img lazy flex" :src="v.firstCover"></view>
						<view class="rt flex1">
							<view class="tt fs-16 nowrap pt5">{{v.title}}</view>
							<view class="td fs-13 mt10 wrap2">{{v.intro}}</view>
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
				selectKey: 0,

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
			changeKey(key){
				this.selectKey = key
			},
			search(v) {
				console.log(v);
				this.fclass = v.value;
				this.ajax()
			},
			ajax() {
				this.getAjax(this, {
					fclass: this.fclass
				}).then(msg => {
					
					//this.setTitle(msg.lists.data[0].fclassname[0]);
				});
			}
		}
	}
</script>
