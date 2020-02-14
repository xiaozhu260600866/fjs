<template>
	<view class="hospital_item">
		<view v-for="(v,key) in data.lists.data">
			<myform :ruleform="{}" :append="true" :vaildate="{}" :data="item" @callBack="goto('/pages/hospital/show/index?id='+v.id,1)">
				<view slot="content" class="item_box flex p15 bd-be">
					<view class="limg pr10">
						<image class="img" mode="aspectFill" :src="v.userInfo.company_logo ? getSiteName+ '/upload/images/user/300_'+v.userInfo.company_logo :
						 'https://boss.doxinsoft.com/images/nopic.jpg'" />
					</view>
					<view class="rinfo flex1 flex">
						<view class="info flex1 pr10 flex-wrap">
							<p class="ctitle w-b100 fs-16 lh-22 pb15">{{v.userInfo.company_name}}</p>
							<view class="w-b100">
								<p class="clist fs-12 fc-9 lh-20">电话：{{ v.userInfo.phone }}</p>
								<p class="clist fs-12 fc-9 lh-20">地址：{{ v.userInfo.address }}</p>
							</view>
							<!-- <p class="ccon fs-12 fc-6 lh-18 wrap2">{{v.content}}</p> -->
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
<style>
.hospital_item .limg .img{width: 100px;height: 100px;display: flex;}
.hospital_item .rinfo .info{display: flex;align-content: space-between;height: 100px;}
.hospital_item .rinfo .location{align-content: center;text-align: right;}
</style>