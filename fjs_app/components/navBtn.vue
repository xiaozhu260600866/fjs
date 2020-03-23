<template>
	<view>
		<view class="nav_btn mb12">
			<view class="item"   @click="changeKey('')">
				<view>
					<view class="nav_img">
						<image :src="getSiteName + '/images/all.png'" :class="['img']" />
					</view>
					<view class="txt"><span>全部</span></view>
				</view>
			</view>
			<view class="item" v-for="(v,key) in data.class" v-if="v.can_show" @click="changeKey(v,key)">
				<view>
					<view class="nav_img">
						<image :src=" v.cover " :class="['img']" />
					</view>
					<view class="txt"><span>{{v.label}}</span></view>
				</view>
			</view>
		</view>
		<view class="block-nav" v-if="data.class[selectKey].children.length">
			<view :class="['nav',fclass == children.value ? 'act':'']" @click="search(children)" v-for="(children,childrenKey) in data.class[selectKey].children">{{children.label}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['data',"fclass"],
		data(){
			return {
				getSiteName: this.getSiteName(),
				selectKey:-1
			}
		},
		methods:{
			ajax(){
				this.getParent(this).ajax();
			},
			changeKey(item,key){
				if(item  && item.children.length){
					console.log(1);
					this.getParent(this).fclass  = item.value;
					this.selectKey = key;
					this.ajax();
				}else if(item &&  item.children.length == 0){
					console.log(2);
					this.getParent(this).fclass  = item.value;
					this.selectKey = -1;
					this.ajax();
				}else{
					console.log(3);
					this.getParent(this).fclass = "";
					this.selectKey = -1;
					this.ajax();
				}
				
			},
			search(v) {
				console.log(v);
				this.getParent(this).fclass = v.value;
				this.ajax()
			},
		}
	}
</script>