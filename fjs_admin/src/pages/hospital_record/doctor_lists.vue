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
    import globalData from "./layouts/hospitalRecord.js";
    export default {
        data() {
            return {
                formAction: "/admin/hospital-record/lists?type=1",
                data: this.formatData(this),
                siteName: this.getSiteName(),
                globalData: globalData,
            }
        },
        mounted() {
            this.globalData.data.searchFields[0].label = "医生姓名";
            this.globalData.data.searchFields[1].label = "医生电话";
            this.globalData.data.tableFields[1].label = "医生电话";
            this.globalData.data.tableFields[2].label = "医生电话";
            this.globalData.data.formFields[2].label = "医生电话";
            this.globalData.data.formFields[1].label = "医生姓名";
            this.globalData.data.formFields.push(
                    {datatype:'require',label:"职称",prop:'position',type:'text'}
            );
            this.ajax();
        },
        watch: {
            "$route": "ajax"
        },
        methods: {
            searchCallBack(rows) {
                if (rows.length) {
                    this.$set(this.ruleForm, 'hospital_name', rows[0].name);
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
                this.$set(ruleform, "type", 1);
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
