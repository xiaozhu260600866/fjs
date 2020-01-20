<!--
使用：
1.components: {
        'my-searchStaff':()=>import('xiaozhu/vue/components/admin/searchStaff.vue')
    }
2.   <my-searchStaff  ref="searchStaff" />
3.调用：
this.$refs.searchStaff.ajax(); //函数内为调用的URL
 -->
<template>
    <section>
        <el-dialog :title="'选择歌手' " :visible.sync="dialogVisible" :top="top" :before-close="handleClose" append-to-body>
            <el-col :span="24" class="toolbar">
                <el-form :inline="true" id="search">
                    <el-form-item>
                        <input autocomplete="off" :placeholder="'歌手名称'" v-model="name" type="text" name="name" rows="2"
                            validateevent="true" class="el-input__inner" @keyup="toSearch">
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="toSearch">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleClose">选中关闭</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="19" style="margin-right: 10px;background: white;z-index: 999">
                <el-table ref="multipleTable" :data="data.lists" border tooltip-effect="dark" v-loading="data.listLoading"
                    style="width:100%" @selection-change="selsChange">
                    <el-table-column type="selection" min-width="30"> </el-table-column>
                    <el-table-column label="姓名" min-width="60">
                        <template scope="scope">{{ scope.row.userInfo.name }}</template>
                    </el-table-column>
                    <el-table-column label="电话" min-width="140">
                        <template scope="scope">{{ scope.row.userInfo.phone }}</template>
                    </el-table-column>
                    <el-table-column label="地址" min-width="140">
                        <template scope="scope">{{ scope.row.userInfo.address }}</template>
                    </el-table-column>
                </el-table>
            </el-col>

            <div class="toolbar" style='margin:50px 0' v-if="data.lists">
                <el-pagination @current-change="handleCurrentChange" :current-page="data.current_page" :page-sizes="[15]"
                    :page-size="15" layout="total, sizes, prev, pager, next, jumper" :total="data.total" style='float: right'>
                </el-pagination>
            </div>
        </el-dialog>
    </section>
</template>
<style type="text/css" scoped="">
</style>
<script type="text/javascript">
    export default {
        props: ['top'],
        data() {
            return {
                dialogVisible: false,
                data: this.formatData(this),
                formAction: '/admin/user/lists?role=7',
                page: 1,
                name: '',
                fclassArr: [],
                department: 0,
                classVal: 0,
                sels: [],
            }
        },
        methods: {
            ajax(product_str) {
                this.dialogVisible = true;
                this.getAjax(this, {
                    department: this.department,
                    class: this.classVal,
                    user_name: this.name,
                    page: this.page
                }, msg => {

                    $(".el-dialog").css({
                        height: '100%',
                    });
                    if (this.fclassArr.length == 0) {
                        this.fclassArr = msg.department;
                    }
                    if (product_str) {
                        this.$nextTick(() => {
                            product_str = product_str.split(",");
                            msg.lists.forEach(v => {
                                if (this.in_array(v.id, product_str)) {
                                    this.sels.push(v);
                                    this.$refs.multipleTable.toggleRowSelection(v, checked);
                                };
                            });
                        });
                        let checked = true;
                    }
                });
            },
            selsChange(sels) {
                console.log(this.$refs.multipleTable);
                this.sels = sels;
            },
            handleClose() {
                this.dialogVisible = false;
                this.$emit('callBack', this.sels, this.data.warehouse);
            },
            handleCurrentChange(val) {
                this.page = val;
                this.ajax();
            },
            toSearch() {
                this.ajax();
            },
            handleNodeClick(data, e, b) {
                if (e.childNodes.length == 0) {
                    if (e.level == 1) {
                        this.department = data.value;
                    } else {
                        this.department = data.value;
                    }
                    this.ajax();
                }

            },
        }
    }
</script>
