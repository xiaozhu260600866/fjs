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
							<div class="w-b100">
								<p class="clist fs-16 lh-20 mb5">{{v.name}}</p>
								<p class="ccon fs-13 fc-6 lh-20 wrap2">{{v.position || ""}}</p>
							</div>
							<p class="clist w-b100 fs-13 fc-6 lh-20">{{v.getHospital.company_name || ""}}</p><!-- 职称 -->
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