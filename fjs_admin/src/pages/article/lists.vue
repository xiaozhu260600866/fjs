<template>
    <section>
        <el-col :span="24" class="toolbar t-search float-r">
            <el-form :inline="true" id="search" :model="searchFields">
                <el-col :span="12">
                    <el-form-item>
                        <el-input placeholder="请输入新闻名称" name="title" v-model="searchFields.title" style="width: 300px;"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="searchFields.fclass" placeholder="请输入分类">
                            <el-option v-for="v in data.fclass" :label="v.label" :value="v.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="toSearch">查询</el-button>
                        <el-button type="primary" @click="$refs.category.ajax()" v-if="data.auth.canClass">类别</el-button>
                    </el-form-item>
                </el-col>
                <el-form-item>
                    <el-button type="primary" @click="$router.push({path: '/vueadmin/article/create'})" v-if="data.auth.canCreate">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table ref="multipleTable" :data="data.lists" border tooltip-effect="dark" style="width: 100%"
            @selection-change="selsChange" v-loading="data.listLoading">
            <el-table-column type="selection" width="50"> </el-table-column>
            <el-table-column prop="title" label="新闻标题" min-width="100"> </el-table-column>
            <el-table-column prop="fclassname" label="分类名称" width="100"> </el-table-column>
            <el-table-column label="连接" width="160">
                <template scope="scope">/pages/news/show/main?id={{scope.row.id}}</template>
            </el-table-column>
            <el-table-column label="日期" width="160">
                <template scope="scope">{{ scope.row.created_at }}</template>
            </el-table-column>
            <el-table-column prop="views" label="点击量" width="80"> </el-table-column>
            <el-table-column align="center" label="是否上架" width="80">
            	<template scope="scope">
            		 <el-switch v-model="scope.row.putaway " on-text="" off-text="" :active-value="1" :inactive-value="0" @change="editField(scope.row,'putaway')"> </el-switch>
            	</template>
            </el-table-column>
            <el-table-column label="操作" width="170">
                <template scope="scope">
                    <el-button type="primary" size="mini" @click="$router.push({path:'/vueadmin/article/edit?id='+scope.row.id})"
                        v-if="data.auth.canEdit">编辑</el-button>
                    <el-button size="mini" @click="handleDel(scope.$index, scope.row)" v-if="data.auth.canDel">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="toolbar foot-tool">
            <el-button type="danger" @click="delAll" :disabled="this.sels.length===0 " v-if="data.auth.canDel">批量删除</el-button>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.thisPage"
                :page-sizes="[15]" :page-size="15" layout="total, sizes, prev, pager, next, jumper" :total="data.total">
            </el-pagination>
        </div>
        <my-class top="2%"  ref="category" :type="0" :formAction="'/admin/article/'" :sizearr="300" :canupload="1" pageUrl="/pages/news/lists/index?fclass="></my-class>
    </section>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                formAction: '/admin/article/lists',
                data: this.formatData(this),
                siteName: this.getSiteName(),
                tableName: 'articles',
                sels: [], //列表选中列,
                searchFields: {
                    name: '',
                }
            }
        },
        mounted() {
            this.ajax();
        },
        methods: {
            editField(row,field){
            	this.postAjax("/admin/article/edit-field", { id:row.id,field:field,value:row[field] }, msg => {
            		if (msg.data.status == 3) {
            			row[field] =0;
            		}
                    if(msg.data.status == 2){
                        this.ajax();
                    }
            	});
            },
            ajax() {
                this.getAjax(this, {}, msg => {});
            },
            selsChange: function(sels) {
                this.sels = sels;
            },
            toSearch() {
                this.searchField(this);
            },
            handleSizeChange(val) {
                this.data.nextPage = val;
                this.ajax();
            },
            handleCurrentChange(val) {
                this.data.nextPage = val;
                this.ajax();
            },
            handleDel(index, item) {
                this.del_vuex(item, index, this)
            },
            delAll() { /*批量删除*/
                this.deleteAll(this);
            },
            searchCallBack(res) {
                this.searchFields.user_id = res.id;
            }
        },
        components: {
            "my-class": resolve => require(['xiaozhu/vue/components/admin/class.vue'], resolve),
        }

    }
</script>
