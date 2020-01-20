export default {
		data: {
				"listsAction": "",
				"pageSize": 15,
				"canCreate": 0,
				"canEdit": 0,
				"tableName": "order_groups",
				"checkAll": true,
				"searchFields": [{
						"name": "",
						"prop": "order_no",
						"type": "text",
						"label": "订单号"
				},  {
						"name": "",
						"prop": "created_at",
						"type": "betweenDate",
						"label": "订单日期"
				}],
				"tarbars": {
						"prop": "status",
						"data": [{
								"name": "",
								"value": "0",
								"label": "进行中",
						}, {
								"name": "",
								"value": "3",
								"label": "已完成",
						}]
				},
				"tableFields":
				[
					 {
						 "name": "",
						 "prop": "order_no",
						 "minWidth": "",
						 "width": "115",
						 "append_table_": 1,
						 "label": "订单号",
					 },
					{
						"name": "",
						"prop": "getOrder.course_str",
						"minWidth": "200",
						"width": "",
						"append_table_": 1,
						"label": "产品名称",

					},
					{
						"name": "",
						"prop": "getGroup.group_num",
						"minWidth": "",
						"width": "80",
						"append_table_": 1,
						"label": "成团人数",
					},
					{
						"name": "",
						"prop": "getGroup.leftNum",
						"minWidth": "",
						"width": "80",
						"append_table_": 1,
						"label": "剩余人数",
					},
					{
						"name": "",
						"prop": "getOrder.addr_name",
						"minWidth": "",
						"width": "100",
						"append_table_": 1,
						"label": "姓名",
					},
					{
						"name": "",
						"prop": "getOrder.addr_phone",
						"minWidth": "",
						"width": "115",
						"append_table_": 1,
						"label": "电话",
					},
					{
						"name": "",
						"prop": "created_at",
						"minWidth": "",
						"width": "170",
						"append_table_": 1,
						"label": "日期",

					},
				],

		}
}
