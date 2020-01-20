<template>
	<section >
		<div class="coupon-lists" v-for="(v,key) in data.lists.data">
			<div class="weui-media-box weui-media-box_appmsg bgf" form-type="submit">
				<div class="weui-media-box__hd mr15"  @click="goto('/pages/coupon/show/index?id='+v.id,1)">
					<img class="weui-media-box__thumb m img" :src="getSiteName+ '/upload/images/coupon/300_'+v.logo"/>
				</div>
				<div class="weui-media-box__bd"  @click="goto('/pages/coupon/show/index?id='+v.id,1)">
					<p class="weui-media-box__title">{{ v.name }}</p><!-- 优惠券名称 -->
					<p class="weui-media-box__desc">剩余数量：<span class="Arial pr20">{{ v.getLeftNum }}</span>已领：<span class="Arial">{{ v.getOrderNum }}</span></p>
					<div class="bot">
						<p class="fs13 fs-color">￥<span class="fs16 Arial">{{ v.amount }}</span></p><!-- 优惠券面额 -->
					</div>
				</div>
				<div class="weui-media-box__ft pl10" v-if="data.user.id == v.hospital_userid">
					<button hover-class="none" class="dx-btn-sm dx-btn-orange mb10 plr15" @click="goto('/pages/hospital/coupon/create_edit/index?id='+v.id,1)">编辑</button>
					<button class="dx-btn-sm dx-btn-orange-o plr15" @click="del(v.id,key)">删除</button>
				</div>
			</div>
		</div>
	</section>
</template>
<script type="text/javascript">
export default{
	props:["data",'type'],
	data(){
		return {
			getSiteName:this.getSiteName()
		}
	},
	methods:{
		del(id,key){
			this.getConfirm("是否确认删除？",()=>{
				this.postAjax("/hospital/coupon-del",{id:id}).then(msg=>{
					    this.getParent(this).data.lists.data.splice(key,1);
						
				});
			});
		}
	}
}	
</script>
<style type="text/css">
.coupon-lists .weui-media-box{padding: 15px;}
.coupon-lists .weui-media-box_appmsg{align-items: initial;-webkit-box-align:initial;text-align: left;}
.coupon-lists .weui-media-box_appmsg .weui-media-box__hd{width: 70px;height: 70px;border-radius: 5px;}
.coupon-lists .weui-media-box_appmsg .weui-media-box__hd .img{border-radius: 5px;}
.coupon-lists .weui-media-box_appmsg .weui-media-box__bd{position: relative;flex: 1;overflow: hidden;}
.coupon-lists .weui-media-box__title{margin-top: 0;color: #333;font-size: 15px;height: 20px;line-height: 20px;margin-bottom: 8px;}
.coupon-lists .cprice{margin-top: 8px;}
.coupon-lists .cprice span{background:#ff4e36;color: #fff;padding: 3px 10px;border-radius: 5px;}
.coupon-lists .bot{color: #666;position: absolute;bottom: 0;left: 0px;right: 0;font-size: 12px;height: 24px;line-height: 24px;display: flex;justify-content: space-between;}
.coupon-lists .bot .textThrough{padding-left: 8px;color: #888;}
.coupon-lists .bot .o{padding-left: 8px;color: #888;text-decoration: line-through;font-weight: normal;}
.coupon-tag{background:#fa7000;color: #fff;padding: 3px 5px;border-radius: 3px;}
	
</style>
