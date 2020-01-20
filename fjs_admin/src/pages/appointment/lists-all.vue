<template>
	<section>
        <lists :data="data"></lists>
	</section>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			formAction: '/admin/appointment/lists',
			data: this.formatData(this),
			siteName: this.getSiteName(),
		}
	},
    components: {
        'lists': resolve => require(['./layouts/lists'], resolve),
    },
	mounted() {
		this.ajax();
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		"$route": "ajax"
	},
	methods: {
		ajax() {
			this.getAjax(this, { status: this.getOptions('status'),pay: this.getOptions('pay')}, msg => {});
		},
	},


}

</script>
