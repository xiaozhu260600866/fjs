<template>
	<div>
		<!-- 如果是商城+登陆版本start -->
		<section v-if="data.show">
			<dx-table :data="data" :globalData="globalData" :operateWidth="430">
				<div slot="operate" slot-scope="scope">

				</div>
				<div slot="header" slot-scope="scope">

				</div>
			</dx-table>
		</section>
		
		<!-- 如果是商城+登陆版本end -->
	</div>
</template>

<script type="text/javascript">
	import globalData from "./layouts/users.js";
	import company from "./layouts/company";
	import feedback from "./layouts/feedback";
	export default {
		data() {
			return {
				formAction: '/admin/user/lists?role=2',
				data: this.formatData(this),
				siteName: this.getSiteName(),
				globalData: globalData,
				activeName: 'first'
			}
		},
		mounted() {
			this.ajax();
		},
		methods: {
			showFeedback(row){
				 this.$refs.feedback.ajax(row.id);
			},
			showCompany(row){
				this.$refs.company.ajax(row,this.data.partner);
				console.log(row);
			},
			ajax() {
				this.getAjax(this, {}, msg => {
					this.data.sexArr = this.sexArr_();
				});
			},

		},
		components: {
			'dx-table': resolve => require(['xiaozhu/vue/components/admin/dx_table.vue'], resolve),
			

		}

	}
</script>
