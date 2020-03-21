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
						<view class="info flex1">
							<p class="clist fs-16 lh-20 mb5">{{v.name}}</p>
							<p class="ccon fs-13 fc-5 lh-20 wrap2 mtb8">医生备注医生备注医生备注医生备注医生备注医生备注医生备注医生备注医生备注医生备注</p>
							<p class="clist w-b100 fs-13 fc-5 lh-20">{{v.getHospital.company_name || ""}}</p>
						</view>
						<view class="location flex flex-wrap text-center">
							<p class="name w-b100 fs-12 lh-18 h-18">距离</p>
							<view class="w-b100 fs-12 lh-20"><filterKim v-model="v.location"></filterKim></view>
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