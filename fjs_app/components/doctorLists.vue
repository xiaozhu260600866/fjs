<template>
	<view class="doctor_lists">
		<view class="doctor-box" v-for="(v,key) in data.doctor_lists.data">
			<myform :ruleform="{}" :append="true" :vaildate="{}" :data="item" @callBack="goto('/pages/doctor/show/index?id='+v.id,1)">
				<view slot="content" class="list_item p15 bd-be flex">
					<view class="limg pr10">
						<image class="img" mode="aspectFill"
						 :src="v.logo ? getSiteName+ '/upload/images/coupon/300_'+v.logo : 'https://boss.doxinsoft.com/images/wap/nouser-3.png'" />
					</view>
					<view class="rinfo flex1 flex">
						<view class="info flex1 flex-wrap">
							<p class="clist w-b100 fs-16 lh-20 mb5">{{v.name}}</p>
							<p class="clist w-b100 fs-13 fc-6 lh-20">主任医师</p><!-- 职称 -->
							<p class="ccon w-b100 fs-13 fc-6 lh-20 wrap2">介绍：从事整形美容临床工作近20年，曾任职于上海九院整形外科。屡次受邀参与国内外高等学术交流大会，共同探讨国内外整形潮流新方向，多次远赴日本、韩国、美国等地与国内外整形医生同台进行高难度整形手术</p>
						</view>
						<view class="location flex flex-wrap text-center">
							<p class="name w-b100 fs-12 lh-18 h-18 fc-9">距离</p>
							<view class="w-b100 fs-12 fc-9 lh-20"><filterKim v-model="v.location"></filterKim></view>
						</view>
					</view>
				</view>
			</myform>
		</view>
	</view>
</template>
<script>
	import filterKim from "@/components/filterKm";
	export default{
		props:["data"],
		components:{
			filterKim
		},
		data() {
			return {
				getSiteName: this.getSiteName(),
			}
		},
	}
</script>