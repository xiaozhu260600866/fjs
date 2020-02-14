import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
var role = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).role : '';
Vue.use(Router)
export default new Router({
	//mode: 'history',
	routes: [{
			path: '*',
			redirect: '/vueadmin/user/lists',
			hidden: true,
		},
		{
			path: '/vueadmin',
			name: '常用',
			url: '/vueadmin',
			iconCls: 'iconfont icon8', //图标样式class
			component: resolve => require(['../default'], resolve),
			children: [

                {
                	path: 'user*',
                	url: 'user',
                	name: '会员管理',
                	open: false,
                	iconCls: 'iconfont icon-fjs-vip', //图标样式class
                	component: resolve => require(['../p'], resolve),
                	children: [{
                			path: 'lists*',
                			url: '/vueadmin/user/lists',
                			name: '会员管理',
                			iconCls: 'iconfont icon8', //图标样式class
                			component: resolve => require(['../pages/user/lists'], resolve),
                			permission: [],
                		},
                	]
                },
                {
                	path: 'hospital*',
                	url: 'hospital',
                	name: '医院管理',
                	open: false,
                	iconCls: 'iconfont icon-fjs-hospital', //图标样式class
                	component: resolve => require(['../p'], resolve),
                	children: [{
                			path: 'lists*',
                			url: '/vueadmin/hospital/lists',
                			name: '医院管理',
                			iconCls: 'iconfont icon8', //图标样式class
                			component: resolve => require(['../pages/hospital/lists'], resolve),
                			permission: [],
                		},
                	]
                },
                {
                	path: 'doctor*',
                	url: 'doctor',
                	name: '医生管理',
                	open: false,
                	iconCls: 'iconfont icon-fjs-doctor', //图标样式class
                	component: resolve => require(['../p'], resolve),
                	children: [{
                			path: 'lists*',
                			url: '/vueadmin/doctor/lists',
                			name: '医生管理',
                			iconCls: 'iconfont icon8', //图标样式class
                			component: resolve => require(['../pages/doctor/lists'], resolve),
                			permission: [],
                		},
                	]
                },
                {
                	path: 'coupon*',
                	url: 'coupon',
                	name: '优惠券管理',
                	open: false,
                	iconCls: 'iconfont icon-fjs-coupon', //图标样式class
                	component: resolve => require(['../p'], resolve),
                	children: [
                        {
                			path: 'lists*',
                			url: '/vueadmin/coupon/lists',
                			name: '优惠券管理',
                			iconCls: 'iconfont icon8', //图标样式class
                			component: resolve => require(['../pages/coupon/lists'], resolve),
                			permission: [],
                		},
                        {
                        	path: 'record*',
                        	url: '/vueadmin/coupon/record?status=0',
                        	name: '领取记录',
                        	iconCls: 'iconfont icon8', //图标样式class
                        	component: resolve => require(['../pages/couponUser/lists'], resolve),
                        	permission: [],
                        },
                	]
                },
                {
                	path: 'article*',
                	url: 'article',
                	name: '文章管理',
                	open: false,
                	iconCls: 'iconfont icon-fjs-article', //图标样式class
                	component: resolve => require(['../p'], resolve),
                	children: [
                        {
                			path: 'lists*',
                			url: '/vueadmin/article/lists',
                			name: '文章管理',
                			iconCls: 'iconfont icon8', //图标样式class
                			component: resolve => require(['../pages/article/lists'], resolve),
                			permission: [],
                		},
                        {
                        	path: 'create*',
                        	url: '/vueadmin/article/create',
                        	name: '文章新建',
                            hidden:true,
                        	iconCls: 'iconfont icon8', //图标样式class
                        	component: resolve => require(['../pages/article/create_edit'], resolve),
                        	permission: [],
                        },
                       {
                       	path: 'edit*',
                       	url: '/vueadmin/article/edit',
                       	name: '文章新建',
                           hidden:true,
                       	iconCls: 'iconfont icon8', //图标样式class
                       	component: resolve => require(['../pages/article/create_edit'], resolve),
                       	permission: [],
                       },
                	]
                },



				{
					path: 'system*',
					url: '/vueadmin/system',
					name: '系统管理',
					open: false,
					iconCls: 'iconfont icon-fjs-config', //图标样式class
					component: resolve => require(['../p'], resolve),
					children: [
						{
							path: 'config*',
							url: '/vueadmin/system/config',
							name: '基本设置',
							iconCls: 'iconfont icon8', //图标样式class
							component: resolve => require(['../pages/system/config'], resolve),
							permission: []
						},
						{
							path: 'password*',
							name: '修改密码',
							permission: [],
							url: '/vueadmin/system/password',
							component: resolve => require(['../pages/system/password'], resolve),
						},
                        {
                        	path: 'poster*',
                        	name: '广告位管理',
                        	permission: [],
                        	url: '/vueadmin/system/poster',
                        	component: resolve => require(['../pages/poster/lists'], resolve),
                        },

					]
				},
			]
		},
		{
			path: '/login/index',
			name: 'login',
			hidden: true,
			component: resolve => require(['../pages/login/index'], resolve)
		},
		{
			path: '/model',
			name: 'login',
			hidden: true,
			component: resolve => require(['../pages/model'], resolve)
		},
		{
			path: '/login/ip-allow',
			name: 'login',
			hidden: true,
			component: resolve => require(['../pages/login/allow_ip'], resolve)
		}


	]
})
