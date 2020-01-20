<template>
    <div>
        <dx-table :data="data" :globalData="globalData">
            <div slot="append_table_product_name" slot-scope="scope">
                {{scope.row.getOrder.course_str}}
            </div>
        </dx-table>

       <!--  <el-dialog title="佣金" :visible.sync="dialogOrderVisible" size="large" append-to-body>
            <my-order-info ref="myOrder"> </my-order-info>
        </el-dialog> -->
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/groups.js";
    export default {
        data() {
            return {
                formAction: "/admin/group/lists",
                data: this.formatData(this),
                siteName: this.getSiteName(),
                dialogOrderVisible:false,
                globalData: globalData,
            }
        },
        mounted() {
            this.ajax();
        },
        watch: {
            "$route": "ajax"
        },
        methods: {
            changeOrder(res, status) {
                this.getConfirm("是否确认收货？", msg => {
                    this.postAjax("/admin/order/change-order-status", {
                        id: res.id,
                        status: status
                    }, msg => {
                        if (msg.data.status == 2) {
                            this.ajax();
                        }
                    });
                });
            },
            ajax() {
                this.getAjax(this, {}, msg => {});
            },
        },
        components: {
            "dx-table": resolve => require(["xiaozhu/vue/components/admin/dx_table.vue"], resolve),
        }
    }
</script>
