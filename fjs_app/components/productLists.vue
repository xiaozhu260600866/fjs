<template>
	<view class="tui-product-list pb15">
		<view class="tui-product-container">
			<block v-for="(item,index) in productList" :key="index" v-if="(index+1)%2!=0 || isList">
				<myform :ruleform="{}" :append="true" :vaildate="{}" :data="item" @callBack="goto('/pages/shop/product/show/index',1)">
					<div slot="content">
						<view class="tui-pro-item">
							<image class="tui-pro-img" :src="'/static/pro/'+item.img+'.jpg'" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit lh-20 mb8">{{item.name}}</view>
								<view class="tui-pro-price lh-20">
									<text class="tui-sale-price">￥{{item.sale}}</text>
								</view>
							</view>
						</view>
					</div>
				</myform>
			</block>
		</view>
		<view class="tui-product-container" v-if="!isList">
			<block v-for="(item,index) in  productList" :key="index" v-if="(index+1)%2==0">
				<myform :ruleform="{}" :append="true" :vaildate="{}" :data="item" @callBack="goto('/pages/shop/product/show/index',1)">
					<div slot="content">
						<view class="tui-pro-item">
							<image class="tui-pro-img" :src="'/static/pro/'+item.img+'.jpg'" mode="widthFix" />
							<view class="tui-pro-content">
								<view class="tui-pro-tit lh-20 mb8">{{item.name}}</view>
								<view class="tui-pro-price lh-20">
									<text class="tui-sale-price">￥{{item.sale}}</text>
								</view>
							</view>
						</view>
					</div>
				</myform>
			</block>
		</view>
	</view>
</template>
<script>
	export default{
		props:["data"],
		data() {
			return {
				getSiteName: this.getSiteName(),
				productList: [{
						img: 1,
						name: "针灸",
						sale: 599
					},
					{
						img: 2,
						name: "三伏贴",
						sale: 29,
						factory: 69
					},
					{
						img: 3,
						name: "艾灸",
						sale: 299
					},
					{
						img: 4,
						name: "中医正骨",
						sale: 1599
					},
					{
						img: 5,
						name: "正骨推拿手法",
						sale: 599
					},
					{
						img: 6,
						name: "拔罐",
						sale: 599
					},
				]
			}
		},
	}
</script>
<style>
/* 商品列表*/
.tui-product-list {display: flex;justify-content: space-between;flex-direction: row;flex-wrap: wrap;box-sizing: border-box;padding: 10px 0 60px;}
.tui-product-container {flex: 1;margin: 0 16upx;}
.tui-product-container:last-child {margin-left: 0;}
.tui-pro-item {width: 100%;margin-bottom: 16upx;background: #fff;box-sizing: border-box;border-radius: 12upx;overflow: hidden;transition: all 0.15s ease-in-out;}
.tui-flex-list {display: flex;margin-bottom: 1upx !important;}
.tui-pro-img {width: 100%;display: block;min-height: ;}
.tui-proimg-list {width: 260upx;height: 260upx;flex-shrink: 0;border-radius: 12upx;}
.tui-pro-content {display: flex;flex-direction: column;justify-content: space-between;box-sizing: border-box;padding: 20upx;}
.tui-pro-tit {color: #2e2e2e;font-size: 28upx;word-break: break-all;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
.dx-pro-group {padding-top: 18upx;}
.tui-sale-price {font-size: 34upx;font-weight: 500;color: #e41f19;}
.tui-unit {font-size: 24upx;color: #999;padding-left: 12upx;}
.tui-factory-price {font-size: 24upx;color: #a0a0a0;text-decoration: line-through;padding-left: 12upx;}
.tui-pro-pay {padding-top: 10upx;font-size: 24upx;color: #999;}
/* 商品列表*/
</style>