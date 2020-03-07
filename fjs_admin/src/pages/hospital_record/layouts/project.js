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
			"label": "项目名称"
		},{
			"name": "",
			"prop": "hospital_name",
			"type": "text",
			"label": "所属医院"
		}],
		"tableFields": [
			{
				"name": "",
				"prop": "name",
				"minWidth": "100",
				"width": "",
				"append_table_": 0,
				"label": "项目名称"
			},
			{
				"name": "",
				"prop": "hospital_name",
				"minWidth": "100",
				"width": "",
				"append_table_": 0,
				"label": "所属医院"
			},
			{
				"name": "",
				"prop": "created_at",
				"minWidth": "",
				"width": "180",
				"append_table_": 0,
				"label": "发布时间"
			},


		// {
		//		"name": "",
		//		"prop": "city",
		//		"minWidth": "80",
		//		"width": "",
		//		"append_table_": 0,
		//		"label": "城市"
		// },
		// {
		//		"name": "",
		//		"prop": "address",
		//		"minWidth": "260",
		//		"width": "",
		//		"append_table_": 0,
		//		"label": "地址"
		// },
		],
		"formFields": [
			{
				"name": "",
				"prop": "name",
				"datatype": "require",
				"type": "text",
				"append_form_": 0,
				"label": "项目名称"
			},
			{
				"name": "",
				"prop": "hospital_userid",
				"datatype": "require",
				"type": "text",
				"append_form_hospital_userid": 1,
				"label": "所属医院"
			},


		// {
		//		"name": "",
		//		"prop": "address",
		//		"datatype": "require",
		//		"type": "location",
		//		"append_form_": 0,
		//		"label": "地址"
		// },
		// {
		//		"name": "",
		//		"prop": "city",
		//		"datatype": "require",
		//		"type": "select",
		//		"datakey":'city',
		//		"append_form_": 0,
		//		"label": "城市"
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
