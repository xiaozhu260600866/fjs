<template>
    <div>
        <dx-table :data="data" :globalData="globalData" @submitBeforeCallBack="submitBeforeCallBack">
            <div slot="header">

            </div>
         </dx-table>
    </div>
</template>
<script type="text/javascript">
    import globalData from "./layouts/users.js";
    export default {
        data() {
            return {
                formAction: "/admin/user/lists?role=3",
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
                this.$set(ruleform,"role",3);
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
