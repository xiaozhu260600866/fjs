<template>
    <div>
        <dx-table :data="data" :globalData="globalData" operateWidth="350">
            <div slot="append_table_order_no" slot-scope="scope">
                {{scope.row.order_no}}
            </div>
            <div slot="append_table_getPayMethod" slot-scope="scope">
                <p>{{ scope.row.getPayMethod }}</p>
            </div>
            <div slot="append_table_amount" slot-scope="scope">
                <p><span class="Arial">￥{{ scope.row.amount }}</span></p>
            </div>
         
        </dx-table>

       <!--  <el-dialog title="佣金" :visible.sync="dialogOrderVisible" size="large" append-to-body>
            <my-order-info ref="myOrder"> </my-order-info>
        </el-dialog> -->
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/return_orders.js";
    export default {
        data() {
            return {
                formAction: "/admin/order/return",
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
                this.getConfirm("是否退款给用户？", msg => {
                    this.postAjax("/admin/order/return", {
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
