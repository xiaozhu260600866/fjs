<template>
    <section v-if="data.show">
        <el-form :model="ruleForm" ref="ruleForm" label-width="110px" class="demo-ruleForm create-box">
            <!-- 基础设置开始 -->
            <el-form-item label="新闻标题" prop="title" :rules="[{ required: true, message: '新闻标题不能为空'},]">
                <el-input v-model="ruleForm.title" style="width:40%"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="intro" >
                <el-input v-model="ruleForm.intro" style="width:40%" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="请选择分类" prop="fclass" :rules="[{ required: true, message: '分类不能为空'},]">
                <el-cascader placeholder="请输入分类" expand-trigger="hover" :options="data.fclass" v-model="ruleForm.fclass"></el-cascader>
            </el-form-item>
            <el-form-item label="发表时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.published_at" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
           <div class="el-form-item">
              <label class="el-form-item__label" style="width:100px">缩略图</label>
              <my-upload upurl="article" :uploadLength="1" :fileList="ruleForm.thumb_pic" :sizearr="300"></my-upload>
           </div>
            <div class="el-form-item" style="padding-left: 100px">
                <div class="el-form-item__content" style="">
                    <myeditor :content="ruleForm.content ? ruleForm.content : ''" ref="editor"></myeditor>
                </div>
            </div>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>
<script>
import myeditor from "@/components/editor.vue";

export default {
    mounted: function() {
        if (this.getOptions("id")) {
            this.formAction = '/admin/article/edit?id=' + this.getOptions("id");

        } else {
            this.formAction = '/admin/article/create';
        }
        this.ajax();
    },
    data() {
        return {
            ruleForm: {
                fclass: [],
                published_at: new Date(),
                sort: 0,
                cover: [],
                thumb_pic:[]
            },
            formAction: '',
            getSiteName: this.getSiteName(),
            data: this.formatData(this)
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.ruleForm.content = this.$refs.editor.getContent();
                    this.postAjax(this.formAction, this.ruleForm, msg => {
                        if (msg.data.status == 2) {
                            this.$router.push({ path: '/vueadmin/article/lists' });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        ajax: function() {
            this.getAjax(this, {}, msg => {
                if ("detail" in msg) {
                    this.ruleForm = msg.detail;
                    this.ruleForm.cover = this.ruleForm.cover ? this.splitCover(this.ruleForm.cover, "article") : [];
                    this.ruleForm.thumb_pic = this.ruleForm.thumb_pic ? this.splitCover(this.ruleForm.thumb_pic, "article") : [];
                    this.ruleForm.fclass = this.ruleForm.fclassArr;
                    this.$nextTick(()=>{
                         this.$refs.editor.setContent(this.ruleForm.content,1);
                    })

                }else{
                    this.$nextTick(()=>{
                        this.$refs.editor.setContent("",1);
                    });
                }
            });
        },
    },
    components: {
        myeditor,

    }
}

</script>
