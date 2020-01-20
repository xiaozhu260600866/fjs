<template>
	<!-- 上传规格 -->
	<el-dialog title="发送留言" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
		<div v-show="listDialog">
			<!-- 列表 -->
			<table class="table table-hover">
				<tr>
					<th width="100">发送者</th>
					<th width="50">接收人</th>
					<th width="50">留言内容</th>
					<th width="70" class="text-center">操作</th>
				</tr>
				<tr v-for="(item,key) in data.lists" v-if="data.lists.length>0" style="height:40px">
					<td>{{ item.getUser ? item.getUser.userInfo.name :'' }}</td>
					<td>{{ item.toUser ? item.toUser.userInfo.name :'' }}</td>
					<td>{{ item.content }}</td>
					<td>
						<el-button size="small" @click="editInfo(item)">编辑</el-button>
						<el-button type="danger" size="small" @click="delInfo(key,item.id)">删除</el-button>
					</td>
				</tr>
			</table>
			<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="addInfo">添 加</el-button>
			<el-button @click="handleClose">取 消</el-button>
		  </span>
		</div>
		<div v-show="addEditDialog">
			<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin:20px;width:60%;min-width:300px;">
				<el-form-item label="留言内容" prop="content" :rules="[{ required: true, message: '留言内容不能为空'},]">
					<el-input v-model="ruleForm.content" type="textarea"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer pull-right">
				<el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
				<el-button @click="addEditDialog=false;listDialog=true">取 消</el-button>
			</span>
		</div>
	</el-dialog>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			listDialog: true,
			addEditDialog: false,
			ruleForm: { num: 0, cover: [] },
            data: this.formatData(this),
			tableName: 'user_feedbacks',
			formAction: "/admin/user/feedback",
            editAction:'/admin/user/feedback-create',
			dialogVisible: false,
			to_userid: '',
			infolists: []
		}
	},
	methods: {
		ajax(user_id){
          this.to_userid  = user_id;
		  this.getAjax(this,{to_userid:user_id}, msg => {
              console.log(this.data);
          });
		  this.dialogVisible = true;
          this.listDialog = true;
          this.addEditDialog = false;

		},
		handleClose: function(done) {
			this.$parent.ajax();
			this.dialogVisible = false;
		},
		addInfo: function() {
			this.ruleForm = { num: 0,cover:[] },
			this.listDialog = false;
			this.addEditDialog = true;
			this.editAction = "/admin/user/feedback-create";
		},
		editInfo: function(item) {
			this.listDialog = false;
			this.addEditDialog = true;
			this.ruleForm = item;

			this.listDialog = false;
			this.addEditDialog = true;
			this.editAction = "/admin/user/feedback-edit";
		},
		delInfo: function(index, id) {
			this.getConfirm("此操作将永久删除该文件, 是否继续?",msg=>{
			   this.postAjax("/ajax/mydel",{id:id,tablename:this.tableName},msg=>{
				  this.ajax();
			   });
			});
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.ruleForm.to_userid = this.to_userid;
					this.postAjax(this.editAction, this.ruleForm, msg=> {
						if (msg.data.status == 2) {
                            this.ajax(this.to_userid);
						}
					})
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		/*商品规格结束*/
	},
	components: {

	}

}

</script>
