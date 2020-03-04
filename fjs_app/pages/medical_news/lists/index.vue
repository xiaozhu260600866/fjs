<template>
	<view>
		<page :parentData="data" :formAction="formAction"></page>
		<div v-if="data.show">
			<view class="block-nav">
				<view :class="['nav',fnav == 0 ? 'act':'']" @click="fnav = 0">全部</view>
				<view :class="['nav',fnav == 1 ? 'act':'']" @click="fnav = 1">子类别一</view>
				<view :class="['nav',fnav == 2 ? 'act':'']" @click="fnav = 2">子类别二</view>
				<view :class="['nav',fnav == 3 ? 'act':'']" @click="fnav = 3">子类别三</view>
			</view>
			<view id="article_list">
				<view class="list" v-for="v in article"> 
					<view class="item bg-f flex p15" @click="goto('/pages/medical_news/show/index',1)">
						<view class="limg mr15"><img class="img lazy flex" :src="v.firstCover"></view>
						<view class="rt flex1">
							<view class="tt fs-16 nowrap pt5">{{v.name}}</view>
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
				fnav: 0,
				article:[
					{
						firstCover: 'https://fjs.doxinsoft.com/upload/images/coupon/300_nQFSipJT4k.jpg',
						name:'多发性硬化患者的感染风险增加，肾道感染尤甚',
						intro: '一项新的研究结果显示，多发性硬化（MS）患者发生多种类型感染的风险增加，其中与肾道感染相关的风险最高。'
					},
					{
						firstCover: 'https://fjs.doxinsoft.com/upload/images/coupon/300_nQFSipJT4k.jpg',
						name:'急性复视和眼眶疼痛诊治一例，手把手教你病灶定位定性',
						intro: '对于年轻患者出现复视和眼眶疼痛该如何定位定性诊断？最新一期（2月18日）Neurology杂志报道了一例27岁年轻女性患者急发水平复视和眼眶疼痛'
					},
					{
						firstCover: 'https://fjs.doxinsoft.com/upload/images/coupon/300_nQFSipJT4k.jpg',
						name:'临床解惑：阿尔茨海默病和糖尿病的「关系不简单」',
						intro: '很多人会认为糖尿病和阿尔茨海默病（AD）是完全不同的两个疾病，虽然都是老年病，但临床表现完全不一样，糖尿病表现为血糖升高'
					},
					{
						firstCover: 'https://fjs.doxinsoft.com/upload/images/coupon/300_nQFSipJT4k.jpg',
						name:'Circulation综述：在心衰患者中使用SGLT2抑制剂的实用建议',
						intro: '近日，发表在Circulation: Heart Failure上的一篇综述，总结了对伴和不伴糖尿病的射血分数降低的心衰（HFrEF）患者使用SGLT2i的实际考虑。'
					},
					{
						firstCover: 'https://fjs.doxinsoft.com/upload/images/coupon/300_nQFSipJT4k.jpg',
						name:'直播预告 | 国家卫生健康委员会《原发性肝癌诊疗规范（2019年版）',
						intro: '为进一步提升中国肝癌诊疗水平提供权威和规范化的指导，2019年12月7日，国家卫生健康委员会在上海正式发布了'
					}
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
			this.shareSource(this, '商城');
		},
		onLoad(options) {
			this.ajax();
		},
		methods: {
			ajax() {
				this.getAjax(this).then(msg => {
					//this.setTitle(msg.lists.data[0].fclassname[0]);
				});
			}
		}
	}
</script>
