<template>
    <div>
        <dx-table :data="data" :globalData="globalData" @submitBeforeCallBack="submitBeforeCallBack" :operateWidth="280">
            <div slot="append_form_hospital_userid" slot-scope="scope">
                <el-button @click="searchSonger(scope.row)">选择医院</el-button>
                <el-tag type="gray" v-if="scope.row.hospital_name">{{ scope.row.hospital_name}}</el-tag>
            </div>
        </dx-table>
        <searchSonger ref="searchSonger" @callBack="searchCallBack" />
    </div>
</template>
<script type="text/javascript">
    import searchSonger from "@/components/searchHospital";
    import globalData from "./layouts/project.js";
    export default {
        data() {
            return {
                formAction: "/admin/hospital-record/lists?type=2",
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
            searchCallBack(rows) {
                if (rows.length) {
                    this.$set(this.ruleForm, 'hospital_name', rows[0].userInfo.company_name);
                    this.$set(this.ruleForm, 'hospital_userid', rows[0].id);

                    console.log(this.ruleForm);
                }
            },
            searchSonger(row) {
                this.ruleForm = row;
                this.$refs.searchSonger.ajax();
            },
            submitBeforeCallBack(ruleform) {
                delete ruleform.api_token;
                this.$set(ruleform, "type", 2);
            },

            ajax() {
                this.getAjax(this, {}, msg => {});
            },
        },
        components: {
            searchSonger,
            "dx-table": resolve => require(["xiaozhu/vue/components/admin/dx_table.vue"], resolve),
        }
    }
</script>
