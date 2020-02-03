<template>
    <div>
        <dx-table :data="data" :globalData="globalData" @submitBeforeCallBack="submitBeforeCallBack" :operateWidth="280">
            <div slot="operate" slot-scope="scope">
                <div>

                </div>
            </div>
            <div slot="append_table_date" slot-scope="scope">
                {{scope.row.getCoupon.start_at}} ~  {{scope.row.getCoupon.end_at}}
            </div>
         </dx-table>
         <qrcode ref="qrcode"></qrcode>
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/couponUser.js";

    export default {
        data() {
            return {
                formAction: "/admin/couponUser/lists",
                data: this.formatData(this),
                siteName: this.getSiteName(),
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
            submitBeforeCallBack(ruleform){
                delete ruleform.api_token;
                console.log(ruleform);
                this.$set(ruleform,"role",7);
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
