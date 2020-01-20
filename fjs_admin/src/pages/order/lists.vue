<template>
    <div>
        <dx-table :data="data" :globalData="globalData" operateWidth="200">
            <div slot="append_table_order_no" slot-scope="scope">
                {{scope.row.order_no}}
            </div>
            <div slot="append_table_getPayMethod" slot-scope="scope">
                <p>{{ scope.row.getPayMethod }}</p>
            </div>
            <div slot="append_table_amount" slot-scope="scope">
                <p>点歌金额：{{scope.row.amount}}</p>
                <p>置顶金额：{{scope.row.top_price}}</p>
                <p>合计：{{parseFloat(scope.row.amount) + parseFloat(scope.row.top_price)}}</p>


            </div>
            <div slot="operate" slot-scope="scope">
                    <el-button type="primary ml20" size="mini" @click.native="changeOrder(scope.row,9)" v-if="scope.row.status>=3 && scope.row.status<9">核销完成</el-button>
            </div>
        </dx-table>

       <!--  <el-dialog title="佣金" :visible.sync="dialogOrderVisible" size="large" append-to-body>
            <my-order-info ref="myOrder"> </my-order-info>
        </el-dialog> -->
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/shop_orders.js";
    export default {
        data() {
            return {
                formAction: "/admin/order/lists",
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
