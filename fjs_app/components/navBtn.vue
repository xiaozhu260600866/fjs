<template>
	<view>
		<view class="nav_btn mb12" v-if="type == 'parent' || type == 'all'">
			<slot name="LnavBtn" />
			<view :class="['item', myclass ? myclass : '']" v-for="(v,index) in data.index_link.data" :key="index">
				<myform :ruleform="{}" :append="true" :vaildate="{}" :data="v" @callBack="goto(v.url,1)">
					<view slot="content">
						<view class="nav_img">
							<image :src=" v.cover " :class="['img']" />
						</view>
						<view class="txt"><span>{{v.name}}</span></view>
					</view>
				</myform>
			</view>
			<slot name="RnavBtn" />
		</view>
		<view class="block-nav" v-if="type == 'son' || type == 'all'">
			<slot name="LnavBtn" />
			<!-- <view :class="['nav',fclass == 0 ? 'act':'']" @click="fclass = 0">全部</view> -->
			<view :class="['nav',fclass == v.value ? 'act':'']" @click="search(v)" v-for="v in data.class">{{v.label}}</view>
			<slot name="RnavBtn" />
		</view>
	</view>
</template>

<script>
	export default{
		props:['data','type'],
		data(){
			return {
				
			}
		}
	}
</script>