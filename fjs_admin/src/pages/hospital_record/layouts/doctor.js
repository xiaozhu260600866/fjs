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
		"tableFields": [
			{
				"name": "",
				"prop": "name",
				"minWidth": "",
				"width": "120",
				"append_table_": 0,
				"label": "医生姓名"
			},
			{
				"name": "",
				"prop": "phone",
				"minWidth": "",
				"width": "130",
				"append_table_": 0,
				"label": "医生电话"
			},
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
				"prop": "city",
				"minWidth": "",
				"width": "120",
				"append_table_": 0,
				"label": "城市"
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
				"prop": "address",
				"minWidth": "150",
				"width": "",
				"append_table_": 0,
				"label": "地址"
			},
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
				"style": 'width: 200px',
				"label": "医生姓名"
			},
			{
				"name": "",
				"prop": "phone",
				"datatype": "require|phone",
				"type": "text",
				"style": 'width: 200px',
				"append_form_": 0,
				"label": "医生电话"
			},
			{
				"name": "",
				"prop": "position",
				"datatype": "require",
				"type": "text",
				"style": 'width: 200px',
				"append_form_": 0,
				"label": "职称"
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
				"prop": "address",
				"datatype": "require",
				"type": "location",
				"append_form_": 0,
				"label": "地址"
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
