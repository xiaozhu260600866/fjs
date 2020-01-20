<template>
	<section class="index-sec" v-if="data.show">
		
		<div id="desktopGuide" class="dt-box">
			<div class="dt-boxHead"><span class="dt-boxTitle">常用功能</span></div>
			<div class="demo-group">
				<div class="demo start2" style="z-index: 10;" @click="goto('/vueadmin/shop/product/lists')">
					<span><i>1</i></span>
					<label>发布产品</label>
				</div>
				<div class="demo" style="z-index: 9;" @click="goto('/vueadmin/shop/order-lists?status=3')">
					<span><i>2</i></span>
					<label>订单</label>
				</div>
				<div class="demo" style="z-index: 8;" @click="goto('/vueadmin/dis/list-info?status=1')">
					<span><i>3</i></span>
					<label>分销商</label>
				</div>
				<div class="demo" style="z-index: 7;" @click="goto('/vueadmin/dis/come-out-lists?status=0')">
					<span><i>4</i></span>
					<label>提现</label>
				</div>
				<div :class="['demo',data.user.role_type != 0 ? 'end2' : '']" style="z-index: 6;" @click="goto('/vueadmin/user/lists')">
					<span><i>5</i></span>
					<label>客户</label>
				</div>
				<div class="demo end2" style="z-index: 5;" @click="goto('/website/index')" v-if="data.user.role_type == 0">
					<span><i>6</i></span>
					<label>官网</label>
				</div>
			</div>
		</div>

		<div class="state-group" v-if="data.user.role_type == 0" hidden>
			<div class="card-state group-item body-shadow">
				<div class="group-title pt40 plr40 pb20 fs18">名片状态</div>
				<div class="card-body pb30">
					<div class="c-staff cb-item">
						<p class="iconfont icon3 fs30 font_grey mr20"></p>
						<div class="cbR">
							<p class="name lh30 fs16">员工总数</p>
							<p class="num Arial fs30 mt30">{{ data.memberCount }}</p>
						</div>
					</div>
					<div class="c-card cb-item">
						<p class="iconfont icon3 fs30 font_grey mr20"></p>
						<div class="cbR">
							<p class="name lh30 fs16">已开通/可开通名片数</p>
							<p class="num Arial fs30 mt30">{{ data.seeNum }} / {{ data.maxSeeNum }}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="account-state group-item body-shadow">
				<div class="group-title pt40 plr40 pb20 fs18">账号状态</div>
				<div class="account-body plr50">
					<div class="ab-group ptb10">
						<p class="fs16">已使用天数</p>
						<p class="fs14 font_666"><span class="fs20 Arial">{{ data.account_left_date }} </span>天</p>
						<p class="fs14 font_grey">{{ data.account_create_date }}开通</p>
					</div>
					<div class="ab-group ptb10">
						<p class="fs16">剩余可用天数</p>
						<p class="fs14 font_666"><span class="fs20 Arial">{{ data.account_work_date }} </span>天</p>
						<p class="fs14 font_grey">{{ data.account_end_date }}截止</p>
					</div>
					<div class="ab-group ptb10">
						<p class="fs16">已获取客户数</p>
						<p class="fs14 font_666"><span class="fs20 Arial">{{ data.clientCount }} </span>人</p>
						<p class="fs14 font_grey"></p>
					</div>
				</div>
			</div>
		</div>

		<div class="deskTop-container">
			<div class="dt-LBox">
				<div class="dt-box">
					<div>
						<div class="dt-boxHead">
							<span class="dt-boxTitle">数据概览</span>
						</div>
						<div class="pb30 pr50 text-right">
							<el-button-group>
								<el-button :type="LDataTime == 7 ? 'primary': ''" @click="LDataTime = 7;ajax()">近7天</el-button>
								<el-button :type="LDataTime == 15 ? 'primary': ''" @click="LDataTime = 15;ajax()">近30天</el-button>
								<el-button :type="LDataTime == 0 ? 'primary': ''" @click="LDataTime = 0;ajax()">汇总</el-button>
							</el-button-group>
						</div>
						<div class="dt-innerL2 clearfix">
							<div class="dt-warp">
								<div class="dt-btnLink dt-btnLink-h">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/102.png" class="normal">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/102_hover.png" alt="" class="hover">
									<p class="text">支付金额(元)</p>
									<p class="foot">{{ data.data.orderSum }}</p>
								</div>
							</div>
							<div class="dt-warp">
								<div class="dt-btnLink dt-btnLink-h" @click="goto('/vueadmin/shop/order-lists?status=3',1)">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/304.png" class="normal">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/304_hover.png" alt="" class="hover">
									<p class="text">支付订单(数)</p>
									<p class="foot">{{ data.data.orderCount}}</p>
								</div>
							</div>
							<div class="dt-warp">
								<div class="dt-btnLink dt-btnLink-h" @click="goto('/vueadmin/user/lists')">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/103.png" class="normal">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/103_hover.png" alt="" class="hover">
									<p class="text">访客数</p>
									<p class="foot">{{ data.data.orderCount}}</p>
								</div>
							</div>
							<div class="dt-warp">
								<div class="dt-btnLink dt-btnLink-h" @click="goto('/vueadmin/shop/order-lists?status=3',1)">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/305.png" class="normal">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/305_hover.png" alt="" class="hover">
									<p class="text">待发货订单</p>
									<p class="foot">{{ data.data.orderCount5  }}</p>
								</div>
							</div>
							<div class="dt-warp">
								<div class="dt-btnLink dt-btnLink-h" @click="goto('/vueadmin/dis/lists?status=0')">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/306.png" class="normal">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/306_hover.png" alt="" class="hover">
									<p class="text">分销商申请</p>
									<p class="foot">{{ data.data.dis_add  }}</p>
								</div>
							</div>
							<div class="dt-warp">
								<div class="dt-btnLink dt-btnLink-h" @click="goto('/vueadmin/dis/come-out-lists?status=0')">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/201.png" class="normal">
									<img width="36" height="36" src="https://boss.doxinsoft.com/images/admin/icon/201_hover.png" alt="" class="hover">
									<p class="text">提现</p>
									<p class="foot">{{ data.data.dis_withdraw }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="dt-box dt-data">
					<div>
						<div class="dt-boxHead"><span class="dt-boxTitle">数据指标</span></div>
						<div class="pb30 pr50 text-right">
							<el-select v-model="chartShow" placeholder="请选择" class="mlr15">
								<el-option label="商城销量统计" :value="0"></el-option>
								<el-option label="客户新增数" :value="1"></el-option>
								<el-option label="咨询客户数" :value="2"></el-option>
								<el-option label="跟进客户数" :value="3"></el-option>
							</el-select>
							<el-button-group>
								<el-button :type="RDataTime == 1 ? 'primary': ''" @click="RDataTime = 1">7天</el-button>
							</el-button-group>
						</div>

						<div style="width:100%">
							<div id="myChart" :style="{width: '886px', height: '300px'}" v-show="chartShow == 0"></div>
							<div id="myChart2" :style="{width: '886px', height: '300px'}" v-show="chartShow == 1"></div>
							<div id="myChart3" :style="{width: '886px', height: '300px'}" v-show="chartShow == 2"></div>
							<div id="myChart4" :style="{width: '886px', height: '300px'}" v-show="chartShow == 3"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="dt-RBox">
				<div class="dt-box">
					<div>
						<div class="dt-boxHead"><span class="dt-boxTitle">已付订单</span></div>
						<ul class="dt-innerR1">
							<li class="dt-listItem1" v-for="v in data.orderLists"><a href="javascript:;" @click="goto('/vueadmin/shop/order-info?id='+v.id)" class="text5"><strong>{{ v.addr_name}}</strong>{{ v.order_no }}</a></li>
							
						</ul>
					</div>
				</div>
				<div class="dt-box">
					<div>
						<div class="dt-boxHead">
							<span class="dt-boxTitle">分销商审核</span>
							<div class="dt-boxHeadR"><i class="ivu-icon ivu-icon-plus" style="color: rgb(74, 144, 226);"></i></div>
						</div>
						<ul class="dt-innerR2">
							<li class="dt-listItem2" v-for="v in data.disAddLists"><a class="text5">{{ v.name }}</a><span class="dt-itemDate">{{ v.created_at }}</span></li>
						</ul>
					</div>
				</div>
				<div class="dt-box dt-card">
					<div>
						<div class="dt-boxHead">
							<span class="dt-boxTitle">系统运行时间</span>
						</div>
						<ul class="dt-innerR3">
							<li class="dt-listItem3" v-if="data.user.role_type == 0">
								<label>已开通/可开通名片数</label>
								<p class="cp">{{ data.seeNum }} / {{ data.maxSeeNum }}</p>
							</li>
							<li class="dt-listItem3">
								<label>开通时间</label>
								<p class="cp">{{ data.account_create_date }}</p>
								<!-- <p class="rp">剩余<span>{{ data.account_left_date }}</span>天</p> -->
							</li>
							 <li class="dt-listItem3">
								<label>截止时间</label>
								<p class="cp">{{ data.account_end_date }}</p>
								<!-- <p class="rp">剩余<span>{{ data.account_work_date }}</span>天</p> -->
							</li> 
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script type="text/javascript">
import "./index.css";
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
export default {
	name: 'App',
	data() {
		return {
			ruleform: {},
			formAction: '/admin/user/boss-count',
			getSiteName: this.getSiteName(),
			LDataTime: 7,
			data: this.formatData(this),
			RDataTime: 1,
			chartShow:0,
			form: {
				region: '',
			}

		}
	},
	methods: {
		 ajax() {
            this.getAjax(this, {timeType:this.LDataTime}, msg => {
            	this.drawLine();
				this.show = true;

            });
        },
        drawLine: function() {
			setTimeout(() => {
				let myChart = echarts.init(document.getElementById('myChart'))
				let myChart2 = echarts.init(document.getElementById('myChart2'))
				let myChart3 = echarts.init(document.getElementById('myChart3'))
				let myChart4 = echarts.init(document.getElementById('myChart4'))
				// 绘制图表

				myChart.setOption({
					color: ['#3398DB'],
					title: { text: '商城销量统计', textStyle: { fontSize: 15 }, left: 'center', top: "20px" },
					tooltip: {},
					xAxis: {
						data: this.data.data.shop.name
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: this.data.data.shop.value
					}]
				});

				myChart2.setOption({
					color: ['#3398DB'],
					title: { text: '客户新增数', textStyle: { fontSize: 15 }, left: 'center', top: "20px" },
					tooltip: {},
					xAxis: {
						data: this.data.data.memberAdd.name
					},
					yAxis: {},
					series: [{
						name: '数量',
						type: 'bar',
						data: this.data.data.memberAdd.value
					}]
				});

				myChart3.setOption({
					color: ['#3398DB'],
					title: { text: '咨询客户数', textStyle: { fontSize: 15 }, left: 'center', top: "20px" },
					tooltip: {},
					xAxis: {
						data: this.data.data.memberConsult.name
					},
					yAxis: {},
					series: [{
						name: '数量',
						type: 'bar',
						data: this.data.data.memberConsult.value
					}]
				});
				myChart4.setOption({
					color: ['#3398DB'],
					title: { text: '跟进客户数', textStyle: { fontSize: 15 }, left: 'center', top: "20px" },
					tooltip: {},
					xAxis: {
						data: this.data.data.staffConsult.name
					},
					yAxis: {},
					series: [{
						name: '数量',
						type: 'bar',
						data: this.data.data.staffConsult.value
					}]
				});

			}, 1000)

		},
	},
	mounted() {
		this.ajax();
	}
}

</script>
