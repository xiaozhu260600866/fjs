export default {
    data: {
        "listsAction": "",
        "pageSize": 15,
        "canCreate": 0,
        "canEdit": 0,
        "tableName": "orders",
        "checkAll": true,
        "searchFields": [{
            "name": "",
            "prop": "order_no",
            "type": "text",
            "label": "订单号"
        }, {
            "name": "",
            "prop": "song_user_id",
            "type": "select",
            "label": "歌手",
            "datakey":"songer"
        },  {
            "name": "",
            "prop": "payed_at",
            "type": "betweenDate",
            "label": "订单日期"
        }],
        "tarbars": {
            "prop": "status",
            "data": [{
                "name": "",
                "value": "12",
                "count": 0,
                "label": "全部",
                "datakey": "statusAll"
            }, {
                "name": "",
                "value": "3",
                "count": 0,
                "label": "已付款",
                "datakey": "status3Num"
            }, {
                "name": "",
                "value": "9",
                "count": 0,
                "label": "已完成",
                "datakey": "status9Num"
            }]
        },
        "tableFields": [{
            "name": "",
            "prop": "order_no",
            "minWidth": "",
            "width": "200",
            "append_table_": 1,
            "label": "订单编号",
            "append_table_order_no": 1
        }, {
            "name": "",
            "prop": "getSong.name",
            "minWidth": "150",
            "width": "",
            "append_table_": 1,
            "label": "歌曲",
            "append_table_product_str": 0
        }, {
            "name": "",
            "prop": "amount_all",
            "minWidth": "",
            "width": "180",
            "append_table_": 0,
            "label": "应付",
            "append_table_amount": 1
        }, {
            "name": "",
            "prop": "getSong.user_name",
            "minWidth": "",
            "width": "90",
            "append_table_": 0,
            "label": "歌手"
        }, {
            "name": "",
            "prop": "table_no",
            "minWidth": "",
            "width": "120",
            "append_table_": 0,
            "append_table_user_id": 0,
            "label": "台号"
        }, {
            "name": "",
            "prop": "remark",
            "minWidth": "150",
            "width": "",
            "append_table_": 0,
            "label": "留言",
            "append_table_address": 0
        },
        {
            "name": "",
            "prop": "payed_at",
            "minWidth": "",
            "width": "200",
            "append_table_": 0,
            "label": "支付时间",
            "append_table_address": 0
        },

        {
            "name": "",
            "prop": "status_message",
            "minWidth": "",
            "width": "80",
            "append_table_": 0,
            "label": "状态"
        }],
        "formFields": []
    }
}
