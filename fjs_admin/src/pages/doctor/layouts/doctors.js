export default {
    data: {
        "listsAction": "",
        "pageSize": 15,
        "canCreate": 1,
        "canEdit": 1,
        "tableName": "doctors",
        "createAction": "/admin/doctor/create",
        "editAction": "/admin/doctor/edit",
        "checkAll": true,
        "searchFields": [{
            "name": "",
            "prop": "name",
            "type": "text",
            "label": "医生姓名"
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
            "prop": "name",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "姓名"
        },
        {
            "name": "",
            "prop": "phone",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "电话"
        },
        {
            "name": "",
            "prop": "city",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "城市"
        },
        {
            "name": "",
            "prop": "address",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "地址"
        }, ],
        "formFields": [
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
            "datatype": "require",
            "type": "text",
            "append_form_": 0,
            "label": "电话"
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
            "prop": "logo",
            "datatype": "array",
            "type": "upload",
            "append_form_": 0,
            "label": "logo",
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
