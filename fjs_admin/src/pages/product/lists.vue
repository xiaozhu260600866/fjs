<template>
    <div>
        <dx-table :data="data" :globalData="globalData" @submitBeforeCallBack="submitBeforeCallBack">
            <div slot="header">
            </div>
              <div slot="append_table_putaway" slot-scope="scope">
                   <el-switch v-model="scope.row.putaway " on-text="" off-text="" :active-value="1" :inactive-value="0" @change="editField(scope.row,'putaway')"> </el-switch>
              </div>
        </dx-table>
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/product.js";
    export default {
        data() {
            return {
                formAction: "/admin/product/lists",
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData,
                ruleForm: {}
            }
        },
        mounted() {
            this.ajax();
        },
        watch: {
            "$route": "ajax"
        },
        methods: {
            editField(row, field) {
                this.postAjax("/admin/product/edit-field", {
                    id: row.id,
                    field: field,
                    value: row[field]
                }, msg => {
                    if (msg.data.status == 3) {
                        row[field] = 0;
                    }
                    if (msg.data.status == 2) {
                        this.ajax();
                    }
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
