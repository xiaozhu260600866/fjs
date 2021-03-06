export default {
	data: {
		"listsAction": "",
		"pageSize": 15,
		"canCreate": 1,
		"canEdit": 1,
		"tableName": "users",
		"createAction": "/admin/user/create",
		"editAction": "/admin/user/edit",
         classAction:'/admin/user/',
		"checkAll": true,
		"searchFields": [
		 {
			"name": "",
			"prop": "company_name",
			"type": "text",
			"label": "医院名称"
		},
		// {
		// 	"name": "",
		// 	"prop": "phone",
		// 	"type": "text",
		// 	"label": "电话"
		// },
		{
			"name": "",
			"prop": "city",
			"type": "select",
			"label": "城市",
			"datakey":"city"
		}

		],
	   /* "tarbars": {
			"prop": "type",
			"data": [{
				"name": "",
				"value": "1",
				"count": 0,
				"label": "首页幻灯片"
			}, {
				"name": "",
				"value": "2",
				"count": 0,
				"label": "首页广告位"
			}, {
				"name": "",
				"value": "3",
				"count": 0,
				"label": "首页导航"
			}]
		}, */
		"tableFields": [
			{
				"name": "",
				"prop": "company_name",
				"minWidth": "180",
				"width": "",
				"append_table_": 0,
				"label": "医院名称"
			},
            {
            	"name": "",
            	"prop": "fclassName",
            	"minWidth": "180",
            	"width": "",
            	"append_table_": 0,
            	"label": "医院类别"
            },
			{
				"name": "",
				"prop": "username",
				"minWidth": "",
				"width": "150",
				"append_table_": 0,
				"label": "帐号"
			},
			{
				"name": "",
				"prop": "name",
				"minWidth": "",
				"width": "100",
				"append_table_": 0,
				"label": "联系人"
			},
			{
				"name": "",
				"prop": "line_phone",
				"minWidth": "",
				"width": "150",
				"append_table_": 0,
				"label": "联系电话"
			},
			{
				"name": "",
				"prop": "phone",
				"minWidth": "",
				"width": "150",
				"append_table_": 0,
				"label": "手机"
			},
            {
            	"name": "",
            	"prop": "putaway",
            	"minWidth": "",
            	"width": "120",
            	"append_table_putaway": 1,
            	"label": "上架/下架"
            },
            {
            	"name": "",
            	"prop": "sort",
            	"minWidth": "",
            	"width": "120",
            	type:'sort',
                url:'/admin/user/edit-field',
            	"label": "排序"
            },
			{
				"name": "",
				"prop": "city",
				"minWidth": "",
				"width": "120",
				"append_table_": 0,
				"label": "所在城市"
			},
		],
		"formFields": [
			{
				"name": "",
				"prop": "company_name",
				"datatype": "require",
				"type": "text",
				"append_form_": 0,
				"label": "医院名称"
			},
		   {
			"name": "",
			"prop": "name",
			"datatype": "require",
			"type": "text",
			"append_form_": 0,
			"label": "联系人"
		},
        {
        	"name": "",
        	"prop": "fclass",
        	"type": "select",
        	"label": "分类",
        	"datakey":"class"
        },
        {
        	"name": "",
        	"prop": "username",
        	"datatype": "require",
        	"type": "text",
        	"append_form_": 0,
        	"label": "帐号"
        },


		{
			"name": "",
			"prop": "phone",
			"datatype": "",
			"type": "text",
			"append_form_": 0,
			"label": "手机"
		},
		{
			"name": "",
			"prop": "password",
			"datatype": "",
			"type": "password",
			"append_form_": 0,
			"label": "密码"
		},
		{
			"name": "",
			"prop": "line_phone",
			"datatype": "require",
			"type": "text",
			"append_form_": 0,
			"label": "联系电话"
		},
        {
        	"name": "",
        	"prop": "remark",
        	"datatype": "require",
        	"type": "text",
        	"append_form_": 0,
        	"label": "备注"
        },

		{
			"name": "",
			"prop": "address",
			"datatype": "require",
			"type": "location",
			"append_form_": 0,
			"label": "地址"
		},
		{
			"name": "",
			"prop": "city",
			"datatype": "require",
			"type": "select",
			"datakey":'city',
			"append_form_": 0,
			"label": "城市"
		},

		{
			"name": "",
			"prop": "company_logo",
			"datatype": "array",
			"type": "upload",
			"append_form_": 0,
			"label": "医院log",
			"allowUpLoadNum": "5",
			"upurl": "user"
		},


		{
			"name": "",
			"prop": "mien_pic",
			"datatype": "array",
			"type": "upload",
			"append_form_": 0,
			"label": "展示图片",
			"allowUpLoadNum": "5",
			"upurl": "user"
		},
		{
			"name": "",
			"prop": "swiper",
			"datatype": "array",
			"type": "upload",
			"append_form_": 0,
			"label": "滚动图片",
			"allowUpLoadNum": "5",
			"upurl": "user"
		},
		{
			"name": "",
			"prop": "content",
			"datatype": "",
			"type": "editor",
			"append_form_": 0,
			"label": "基本介绍"
		},



		]
	}
}
