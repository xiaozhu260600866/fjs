<template>
    <el-dialog title="新建\编辑" :visible.sync="dialogFormVisible" :top="top" :before-close="handleClose">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm create-box" style="width: 60%;">
            <el-form-item label="交费状态" prop="pay">
                <el-select v-model="ruleForm.pay" placeholder="请选择">
                    <el-option  label="已交" :value="1"></el-option>
                    <el-option  label="未交" :value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="付款金额" prop="pay_amount" :rules="[{ required: true, message: '付款金额不能为空'},]" v-if="ruleForm.pay == 1">
                <el-input v-model="ruleForm.pay_amount"></el-input>
            </el-form-item>
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
                ruleForm: {},
                formAction: '',
                dialogFormVisible: false,
                integral: 0,
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.ruleForm.type = this.getOptions('type');
                        this.postAjax(this.formAction, this.ruleForm, msg => {
                            if (msg.data.status == 2) {
                                this.dialogFormVisible = false;
                                this.$parent.ajax();
                            }

                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            ajax: function(params) {
                this.dialogFormVisible = true;
                if (params) {
                    this.formAction = '/admin/appointment/edit?id=' + params.id;
                    this.ruleForm = params;
                    //this.ruleForm.cover = this.ruleForm.pic ? this.splitCover(this.ruleForm.pic, "appointment") : []
                } else {
                    this.ruleForm = {
                        cover: [],
                        sort: 0
                    };
                    this.formAction = '/admin/appointment/create';
                }
            },
            handleClose() {
                this.dialogFormVisible = false;
            }
        },
    }
</script>
