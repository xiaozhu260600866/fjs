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
			"label": "案例名称"
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
				"label": "案例名称"
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
		],
		"formFields": [
			{
				"name": "",
				"prop": "name",
				"datatype": "require",
				"type": "text",
				"append_form_": 0,
				"label": "案例名称"
			},
			{
				"name": "",
				"prop": "hospital_userid",
				"datatype": "require",
				"type": "text",
				"append_form_hospital_userid": 1,
				"label": "所属医院"
			},
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
