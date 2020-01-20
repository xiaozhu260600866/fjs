<template>
    <div>
        <dx-table :data="data" :globalData="test">
             <div slot="append_table_created_at" slot-scope="scope">{{scope.row.created_at}}</div>
             <div slot="operate" slot-scope="scope">
                 <el-dropdown class="ml10">
                     <el-button type="primary" size="mini">操作<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                     <el-dropdown-menu slot="dropdown">
                         <el-dropdown-item @click.native="$refs.pay.ajax(scope.row)">交费</el-dropdown-item>
                     </el-dropdown-menu>
                 </el-dropdown>
             </div>
             <!-- 头部 -->
             <div slot="header">
                 <el-button type="success" @click="exportExcel">导出</el-button>
             </div>
        </dx-table>
        <my-pay ref="pay"></my-pay>
    </div>
</template>
<script>
    import test from "@/table/appointment.js";
    export default {
        props: ["data"],
        data(){
          	return {
                test:test,
                siteName: this.getSiteName()
            }
        },
        mounted(){

        },
        methods: {
            exportExcel() {
            	let url = this.urlApendOpenid("/admin/appointment/export", this);
            	window.open(this.siteName + url,"_blank");
            },
            ajax(){
              this.$parent.ajax();
            },
        },
        components: {
            'my-pay': resolve => require(['../pay'], resolve),
            'dx-table': resolve => require(['xiaozhu/vue/components/admin/dx_table.vue'], resolve),
        }
    }
</script>
