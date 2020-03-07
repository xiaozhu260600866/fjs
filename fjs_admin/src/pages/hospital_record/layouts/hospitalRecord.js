export default {
	data: {
		"listsAction": "",
		"pageSize": 15,
		"canCreate": 1,
		"canEdit": 1,
		"tableName": "hospital_records",
		"createAction": "/admin/hospital-record/create",
		"editAction": "/admin/hospital-record/edit",
		"checkAll": true,
		"searchFields": [{
			"name": "",
			"prop": "name",
			"type": "text",
			"label": "医生姓名"
		},{
			"name": "",
			"prop": "phone",
			"type": "text",
			"label": "医生电话"
		},{
			"name": "",
			"prop": "city",
			"type": "select",
			"label": "城市",
			"datakey":"city"
		}],
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
				"prop": "hospital_name",
				"minWidth": "100",
				"width": "",
				"append_table_": 0,
				"label": "医院"
			},

		   {
				"name": "",
				"prop": "name",
				"minWidth": "100",
				"width": "",
				"append_table_": 0,
				"label": "姓名"
			},
			{
				"name": "",
				"prop": "phone",
				"minWidth": "120",
				"width": "",
				"append_table_": 0,
				"label": "手机"
			},

		// {
		//     "name": "",
		//     "prop": "city",
		//     "minWidth": "80",
		//     "width": "",
		//     "append_table_": 0,
		//     "label": "城市"
		// },
		// {
		//     "name": "",
		//     "prop": "address",
		//     "minWidth": "260",
		//     "width": "",
		//     "append_table_": 0,
		//     "label": "地址"
		// }, 
		],
		"formFields": [
			{
				"name": "",
				"prop": "hospital_userid",
				"datatype": "require",
				"type": "text",
				"append_form_hospital_userid": 1,
				"label": "医院"
			},
			{
				"name": "",
				"prop": "name",
				"datatype": "require",
				"type": "text",
				"append_form_": 0,
				"label": "姓名"
			},

		   {
				"name": "",
				"prop": "phone",
				"datatype": "require|phone",
				"type": "text",
				"append_form_": 0,
				"label": "手机"
			},
		// {
		//     "name": "",
		//     "prop": "address",
		//     "datatype": "require",
		//     "type": "location",
		//     "append_form_": 0,
		//     "label": "地址"
		// },
		// {
		//     "name": "",
		//     "prop": "city",
		//     "datatype": "require",
		//     "type": "select",
		//     "datakey":'city',
		//     "append_form_": 0,
		//     "label": "城市"
		// },
			{
				"prop": "logo",
				"datatype": "array",
				"type": "upload",
				"append_form_": 0,
				"label": "图片",
				"allowUpLoadNum": "1",
				"upurl": "coupon"
			},

			{
				"name": "",
				"prop": "content",
				"datatype": "",
				"type": "editor",
				"append_form_": 0,
				"label": "详情"
			},

		]
	}
}
