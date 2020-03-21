export default {
    data: {
        "listsAction": "",
        "pageSize": 15,
        "canCreate": 0,
        "canEdit": 0,
        "tableName": "coupon_users",
        "createAction": "/admin/doctor/create",
        "editAction": "/admin/doctor/edit",
        "checkAll": true,
        "searchFields": [
         {
            "name": "",
            "prop": "name",
            "type": "text",
            "label": "优惠券名称"
        },
        {
            "name": "",
            "prop": "hospital_name",
            "type": "text",
            "label": "医院名称"
        },
        
        ],
        "tarbars": {
            "prop": "status",
            "data": [{
                "name": "",
                "value": "0",
                "count": 0,
                "label": "使用中"
            }, {
                "name": "",
                "value": "1",
                "count": 0,
                "label": "已使用"
            }, ]
        },
        "tableFields": [

           {
            "name": "",
            "prop": "name",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "优惠券名称"
        },
        {
            "name": "",
            "prop": "user.nickname",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "领取会员"
        },
        {
            "name": "",
            "prop": "status_message",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "使用状态"
        },

        {
            "name": "",
            "prop": "date",
            "minWidth": "180",
            "width": "",
            "append_table_date": 1,
            "label": "使用日期"
        },
        {
            "name": "",
            "prop": "hospital_name",
            "minWidth": "180",
            "width": "",
            "label": "医院名称"
        },
        {
            "name": "",
            "prop": "created_at",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "领券日期"
        },


        ],
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
                "prop": "line_phone",
                "datatype": "require",
                "type": "text",
                "append_form_": 0,
                "label": "电话"
            },
           {
            "name": "",
            "prop": "phone",
            "datatype": "require|phone",
            "type": "text",
            "append_form_": 0,
            "label": "手機"
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
