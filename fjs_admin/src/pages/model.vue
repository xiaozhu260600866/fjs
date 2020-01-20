<template>
    <section>
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm create-box" style="width: 60%;">

            <el-form-item label="tableName" prop="tableName" :rules="[{ required: true, message: '名称不能为空'},]">
                <el-input v-model="ruleForm.tableName" class="width200px"></el-input>
            </el-form-item>
            <!-- formFields start -->
            <el-form-item label="formFields" prop="formField" :rules="[{ required: true, message: '名称不能为空'},]">
                <el-switch v-model="ruleForm.formField" on-text="" off-text="" :active-value="1" :inactive-value="0"
                    style="width: 100px"> </el-switch>
                <el-button size="mini" v-if="ruleForm.formField" @click="addFormField">增加</el-button>
            </el-form-item>
            <el-table :data="ruleForm.formFields" style="width: 100%" v-if="ruleForm.formFields && ruleForm.formField">

                <el-table-column label="field" width="180">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.field" placeholder="field"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="default" width="180">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.default" placeholder="default"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="comment" width="180">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.comment" placeholder="comment"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="是否为空" width="180">
                    <template slot-scope="scope">
                      <el-select v-model="scope.row.isNull" placeholder="请选择类型">
                          <el-option  label="是" value="1"> </el-option>
                          <el-option  label="否" value="0"> </el-option>
                      </el-select>
                    </template>
                </el-table-column>
                <el-table-column label="是否索引" width="180">
                    <template slot-scope="scope">
                      <el-select v-model="scope.row.isIndex" placeholder="请选择类型">
                          <el-option  label="是" value="1"> </el-option>
                          <el-option  label="否" value="0"> </el-option>
                      </el-select>
                    </template>
                </el-table-column>
                <el-table-column label="验证规则" min-width="180">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.datatype" placeholder="请选择验证类型" multiple>
                            <el-option v-for="item in datatypeArr" :label="item" :value="item"> </el-option>
                        </el-select>
                    </template>
                </el-table-column>

                <el-table-column label="type" min-width="180">
                    <template slot-scope="scope">
                        <el-select v-model="scope.row.type" placeholder="请选择类型">
                            <el-option v-for="item in typeArr" :label="item" :value="item"> </el-option>
                        </el-select>
                         <el-input v-model="scope.row.num" placeholder="数据大小" v-if="scope.row.type == 'string' || scope.row.type == 'decimal'"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="ruleForm.formFields.splice(scope.$index,1)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- searchFields end -->


            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                typeArr: [
                    "text",
                    "integer",
                    "string",
                    'date',
                    'dateTime',
                    "decimal"
                ],
                datatypeArr:[
                  "required",
                  "phone",
                  "integer",
                  "price",
                  "array"
                ],
                ruleForm: {
                    pageSize: 15,
                    formField:1,
                    searchFields:[],
                    objectPath:'D:/object/hykvip_2019/resources/hykvip_admin/src/pages/badminton'
                },
            };
        },
        onLoad(){
           this.addFormField();
          console.log(1);
        },
        methods: {


            addFormField(){
                if (!this.ruleForm.formFields) {
                    this.$set(this.ruleForm, "formFields", []);
                };
                this.ruleForm.formFields.push({
                    field: '',
                    isNull:'0',
                    num:255,
                    default:"-1",
                    comment:"",
                    isIndex:'0',
                    datatype:[],
                    type:'string'
                }, );
            },


            submitForm(formName) {
                //this.appendData();
                //return false;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                       this.postAjax("/ajax/create-model",this.ruleForm).then(msg=>{
                           console.log(msg);
                       });

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            ajax: function(params) {

            },
            handleClose() {

            }
        },
    }
</script>
<style scoped="">
 .width100px{
     width:100px;
 }
 .width200px{
     width:200px;
 }
</style>
