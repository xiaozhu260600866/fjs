export default {
    data: {
        "listsAction": "",
        "pageSize": 30,
        "canCreate": 1,
        "canEdit": 1,
        "tableName": "products",
        "createAction": "/admin/product/create",
        "editAction": "/admin/product/edit",
         classAction:'/admin/product/',
         classUrl:"/pages/product/lists/index?fclass=",
        "checkAll": true,
        "searchFields": [
          {
            "name": "",
            "prop": "name",
            "type": "text",
            "label": "产品名称"
        },
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
            "prop": "name",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "产品名称"
        },
        {
            "name": "",
            "prop": "fclassName",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "分类名"
        },
        {
            "name": "",
            "prop": "price",
            "minWidth": "180",
            "width": "",
            "label": "价格"
        },
        {
            "name": "",
            "prop": "sort",
            "minWidth": "180",
            "width": "",
            "label": "排序"
        },
        {
            "name": "",
            "prop": "created_at",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "时间"
        }, ],
        "formFields": [
           {
            "name": "",
            "prop": "name",
            "datatype": "require",
            "type": "text",
            "style": "width: 350px;",
            "append_form_": 0,
            "label": "产品名称"
        },
        {
            "name": "",
            "prop": "fclass",
            "datatype": "require",
            "type": "select",
            "datakey":"productClass",
            "append_form_": 0,
            "label": "分类"
        },
        {
            "name": "",
            "prop": "sort",
            "datatype": "require|number",
            "type": "text",
            "defaultValue":0,
            "style": "width: 200px;",
            "append_form_": 0,
            "label": "排序"
        },
        {
            "name": "",
            "prop": "price",
            "datatype": "require|price",
            "type": "text",
            "style": "width: 200px;",
            "append_form_url": 0,
            "label": "金额"
        },
        {
            "prop": "thumb_pic",
            "datatype": "array",
            "type": "upload",
            "append_form_": 0,
            "label": "缩略图",
            "allowUpLoadNum": "1",
            "upurl": "product"
        },
        {
            "prop": "cover",
            "datatype": "array",
            "type": "upload",
            "append_form_": 0,
            "label": "轮播图",
            "allowUpLoadNum": "5",
            "upurl": "product"
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
