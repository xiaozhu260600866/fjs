<template>
	<section>
		<el-dialog title="选择地址" :visible.sync="dialogFormVisible" top="141px" :before-close="handleClose">
			  <iframe data-v-3f05b4e6="" id="mapPage" width="100%" height="500px" frameborder="0" src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=LT6BZ-ZAOC6-KUFSB-MR4F4-OOMX5-S6BTW&referer=myapp"></iframe>
		</el-dialog>
	</section>
</template>
<script type="text/javascript">
export default{
	data(){
		return {
			dialogFormVisible:true,
		}
	},
	mounted(){
		window.addEventListener('message',event=>{
    // 接收位置信息
   			 this.$emit("callBack",event.data);
		}, false);
	},
	methods:{
		handleClose(){
			this.dialogFormVisible = false;
		},
		ajax(){
			this.dialogFormVisible = true;
		}
	}
}	
</script>