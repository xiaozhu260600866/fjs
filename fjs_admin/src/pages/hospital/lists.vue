<template>
    <div>
        <dx-table :data="data" :globalData="globalData" @submitBeforeCallBack="submitBeforeCallBack" :operateWidth="280">
            <div slot="operate" slot-scope="scope">
                <div>
                    <el-button size="mini" @click="qrcode(scope.row)">查看二维码</el-button>
                </div>
            </div>
            <div slot="append_table_putaway" slot-scope="scope">
                 <el-switch v-model="scope.row.putaway " on-text="" off-text="" :active-value="1" :inactive-value="0" @change="editField(scope.row,'putaway')"> </el-switch>
            </div>
         </dx-table>
         <qrcode ref="qrcode"></qrcode>
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/users.js";
    import qrcode from "./layouts/qrcode";
    export default {
        data() {
            return {
                formAction: "/admin/user/lists?role=7",
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
            editField(row,field){
            	this.postAjax("/admin/user/edit-field", { id:row.id,field:field,value:row[field] }, msg => {
            		if (msg.data.status == 3) {
            			row[field] =0;
            		}
                    if(msg.data.status == 2){
                        this.ajax();
                    }
            	});
            },
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
