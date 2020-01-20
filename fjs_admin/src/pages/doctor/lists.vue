<template>
    <div>
        <dx-table :data="data" :globalData="globalData" @submitBeforeCallBack="submitBeforeCallBack" :operateWidth="280">
            <div slot="operate" slot-scope="scope">
                <div>
                    <el-button size="mini" @click="qrcode(scope.row)">查看二维码</el-button>
                </div>
            </div>
         </dx-table>
         <qrcode ref="qrcode"></qrcode>
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/doctors.js";
    import qrcode from "./layouts/qrcode";
    export default {
        data() {
            return {
                formAction: "/admin/doctor/lists",
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
            qrcode(row){
                this.postAjax("/admin/user/qrcode",{id:row.id}).then(msg=>{
                    if(msg.data.status == 2){
                        this.$refs.qrcode.ajax(msg.data.imgPath);
                    }
                });
            },

            ajax() {
                this.getAjax(this, {}, msg => {});
            },
        },
        components: {
            qrcode,
            "dx-table": resolve => require(["xiaozhu/vue/components/admin/dx_table.vue"], resolve),
        }
    }
</script>
