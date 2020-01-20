<template>
    <el-dialog title="新建\编辑" :visible.sync="dialogFormVisible" :top="top" :before-close="handleClose">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm create-box" style="width: 60%;">

            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="身份证" prop="cardID">
                <el-input v-model="ruleForm.cardID"></el-input>
            </el-form-item>
            <el-form-item label="伙伴人" prop="idCard">
                <el-select v-model="ruleForm.partner_id" placeholder="请选择">
                    <el-option v-for="item in partner" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <div v-for="(v,key) in ruleForm.company">
                <h1>企业{{key+1}}</h1>
                <el-form-item label="名称" prop="name">
                    <el-input v-model="v.name"></el-input>
                </el-form-item>
                <el-form-item label="法人" prop="legalPerson" :rules="[{ required: true, message: 'URL地址不能为空'},]">
                    <el-input v-model="v.legalPerson"></el-input>
                </el-form-item>

                <div class="el-form-item">
                    <label class="el-form-item__label" style="width:100px">法人图片</label>
                    <my-upload upurl="article" :uploadLength="1" :fileList="v.license" :sizearr="300"></my-upload>
                </div>
                <div class="el-form-item">
                    <label class="el-form-item__label" style="width:100px">其他图片</label>
                    <my-upload upurl="article" :uploadLength="1" :fileList="v.license" :sizearr="300"></my-upload>
                </div>
            </div>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>


        </el-form>
    </el-dialog>
</template>
<script>
    export default {
        props: ['top'],
        data() {
            return {
                ruleForm: {company:[]},
                formAction: '',
                dialogFormVisible: false,
                integral: 0,
                partner: [],
                type: 0,
            };
        },
        methods: {
            submitForm(formName) {
                this.postAjax("/admin/user/edit", this.ruleForm, msg => {
                    if (msg.data.status == 2) {
                        this.dialogFormVisible = false;
                        this.$parent.ajax();
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            ajax: function(params, partner) {
                this.partner = partner;
                params.getCompany.forEach(msg => {
                    if (msg.otherFile) {
                        msg.otherFile = msg.otherFile ? this.splitCover(msg.otherFile, "article") : []
                    }
                    if (msg.license) {
                        msg.license = msg.license ? this.splitCover(msg.license, "article") : []
                    }
                });
                this.$set(this.ruleForm,"name",params.userInfo.name);
                this.$set(this.ruleForm,"id",params.id);
                this.$set(this.ruleForm,"phone",params.userInfo.phone);
                this.$set(this.ruleForm,"cardID",params.userInfo.cardID);
                this.$set(this.ruleForm,"partner_id",params.partner_id);
                this.$set(this.ruleForm,"company",params.getCompany);


                this.dialogFormVisible = true;

            },
            handleClose() {
                this.dialogFormVisible = false;
            }
        },
    }
</script>
