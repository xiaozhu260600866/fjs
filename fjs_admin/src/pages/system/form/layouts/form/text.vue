<!-- 企业简介 -->
<template>
	<section>
		<el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
			<el-form-item label="标题：" prop="title">
				<el-radio v-model="ruleForm.title" label="姓名">姓名</el-radio>
  				<el-radio v-model="ruleForm.title" label="联系电话">联系电话</el-radio>
  				<el-radio v-model="ruleForm.title" label="邮箱">邮箱</el-radio>
  				<el-radio v-model="ruleForm.title" label="自定义文本">自定义文本</el-radio>
			</el-form-item>
			<el-form-item label="提示语：" prop="title">
				<el-input style="width:60%" maxlength="32" v-model="ruleForm.title" :disabled="in_array(ruleForm.title,['姓名','联系电话','邮箱'] )"></el-input>
			</el-form-item>
			<el-checkbox v-model="ruleForm.isRequire" :checked="ruleForm.isRequire ? true :false">设为必填项</el-checkbox>
		</el-form>
	</section>
</template>
<script type="text/javascript">
export default {
	props: ["ruleForm"],
	data() {
		return {
			siteName: this.getSiteName(),
		}
	},
}

</script>
