export default {
    data: {
        "listsAction": "",
        "pageSize": 15,
        "canCreate": 1,
        "canEdit": 1,
        "tableName": "users",
        "createAction": "/admin/user/create",
        "editAction": "/admin/user/edit",
        "checkAll": true,
        "searchFields": [{
            "name": "",
            "prop": "name",
            "type": "text",
            "label": "员工姓名"
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
                "prop": "username",
                "minWidth": "180",
                "width": "",
                "append_table_": 0,
                "label": "帐号"
            },
           {
            "name": "",
            "prop": "name",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "姓名"
        }, {
            "name": "",
            "prop": "phone",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "电话"
        }, ],
        "formFields": [
           {
            "name": "",
            "prop": "name",
            "datatype": "require",
            "type": "text",
            "append_form_": 0,
            "label": "员工姓名"
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
            "prop": "password",
            "datatype": "",
            "type": "password",
            "append_form_": 0,
            "label": "密码"
        },
        {
            "name": "",
            "prop": "phone",
            "datatype": "require|phone",
            "type": "text",
            "append_form_": 0,
            "label": "电话"
        }]
    }
}
