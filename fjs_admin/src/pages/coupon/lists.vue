<template>
    <div>
        <dx-table :data="data" :globalData="globalData" @submitBeforeCallBack="submitBeforeCallBack">
            <div slot="header">

            </div>
            <div slot="append_table_putaway" slot-scope="scope">
               <el-switch v-model="scope.row.putaway " on-text="" off-text="" :active-value="1" :inactive-value="0" @change="editField(scope.row,'putaway')"> </el-switch>
            </div>
            <div slot="append_form_hospital_name" slot-scope="scope">
                <el-button @click="searchSonger(scope.row)">选择医院</el-button>
                <el-tag type="gray"   v-if="scope.row.hospital_name">{{ scope.row.hospital_name}}</el-tag>
            </div>
         </dx-table>
         <searchSonger  ref="searchSonger" @callBack="searchCallBack"/>
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/coupons.js";
    import searchSonger from "@/components/searchHospital";
    export default {
        data() {
            return {
                formAction: "/admin/coupon/lists",
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData,
                ruleForm:{}
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
            	this.postAjax("/admin/coupon/edit-field", { id:row.id,field:field,value:row[field] }, msg => {
            		if (msg.data.status == 3) {
            			row[field] =0;
            		}
            	});
            },
            searchCallBack(rows) {
                if(rows.length){
                    this.$set(this.ruleForm,'hospital_name',rows[0].userInfo.company_name);
                    this.$set(this.ruleForm,'hospital_userid',rows[0].id);

                    console.log(this.ruleForm);
                }
            },
            searchSonger(row){
                this.ruleForm = row;
                this.$refs.searchSonger.ajax();
            },
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
            searchSonger
        }
    }
</script>
