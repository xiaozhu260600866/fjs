<template>
	<view class="container">
		<view class="tui-searchbox">
			<view class="tui-search-input">
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="search" :size='13' color='#333'></icon>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view>
					<tui-icon name="search" :size='16' color='#333'></tui-icon>
				</view>
				<!-- #endif -->
				<input confirm-type="search" placeholder="请输入要搜索的内容" :focus="true" auto-focus placeholder-class="tui-input-plholder"
				 class="tui-input" v-model.trim="key"  @confirm="search"/>
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="clear" :size='13' color='#bcbcbc' @tap="cleanKey" v-show="key"></icon>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view @tap="cleanKey" v-show="key">
					<tui-icon name="close-fill" :size='16' color='#bcbcbc'></tui-icon>
				</view>
				<!-- #endif -->
			</view>
			<view class="tui-searchnav tui-tnav" @click="search">搜索</view>
			<!-- <view class="tui-cancle tui-tnav" @tap="back">取消</view> -->
		</view>

		<view class="tui-search-history" v-if="history.length>0">
			<view class="tui-history-header">
				<view class="tui-search-title">搜索历史</view>
				<tui-icon name="delete" :size='14' color='#333' @tap="openActionSheet" class="tui-icon-delete"></tui-icon>
			</view>
			<view class="tui-history-content">
				<block v-for="(item,index) in history" :key="index">
					<tui-tag type="gray" shape="circle" @click="goto('/pages/medical_news/lists/index?name='+item.name,1)">{{item.name}}</tui-tag>
				</block>
			</view>
		</view>

		<tui-actionsheet :show="showActionSheet" :tips="tips" @click="itemClick" @cancel="closeActionSheet"></tui-actionsheet>
	</view>

</template>

<script>
	import "./index.css";
	import tuiIcon from "xiaozhu/uniapp/thorui/components/icon/icon"
	import tuiTag from "xiaozhu/uniapp/thorui/components/tag/tag"
	import tuiActionsheet from "xiaozhu/uniapp/thorui/components/actionsheet/actionsheet"
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiActionsheet
		},
		data() {
			return {
				history: [],
				key: "",
				showActionSheet: false,
				tips: "确认清空搜索历史吗？"
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'history',
				success: res => {
					this.history = res.data;
				}

			});

		},
		methods: {
			 search(){
				   let history = uni.getStorageSync('history') ? uni.getStorageSync('history') : [];
					if (!this.cleanRepeat(history, this.key)) {
						history.push({ name: this.key });
						uni.setStorageSync('history', history);
					}
					this.goto("/pages/medical_news/lists/index?name=" + this.key,1);
			 },
			 cleanRepeat(arr, val) {
				var res = false;
				arr.forEach((v, i) => {
					if (v.name == val) {
						res = true;
					}
				});
				return res;
			},
			back: function() {
				uni.navigateBack();
			},
			cleanKey: function() {
				this.key = ''
			},
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet: function() {
				this.showActionSheet = true
			},
			itemClick: function(e) {
				let index = e.index;
				if (index == 0) {
					this.showActionSheet = false;
					uni.setStorageSync('history', []);
					this.history = []
				}
			}
		}
	}
</script>
