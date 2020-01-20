<template>
    <section>
        <div>{{name}}</div>
    </section>
</template>
<script>
    export default{
        data(){
            return {
                name:'xiaozhu',
                formAction: '/shop/user',
                data: this.formatData(this),
                siteName: this.getSiteName(),
            }
        },
        mounted(){
           
           this.ajax();
        },
        methods:{
            ajax(){
                this.getAjax(this, {}, msg => {});
            }
        }
    }
</script>
