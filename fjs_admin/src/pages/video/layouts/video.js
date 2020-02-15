export default {
    data: {
        "listsAction": "",
        "pageSize": 30,
        "canCreate": 1,
        "canEdit": 1,
        "tableName": "videos",
        "createAction": "/admin/video/create",
        "editAction": "/admin/video/edit",
         classAction:'/admin/video/',
         classUrl:"/pages/video/lists/index?fclass=",
        "checkAll": true,
        "searchFields": [
          {
            "name": "",
            "prop": "name",
            "type": "text",
            "label": "视频名称"
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
            "label": "视频名称"
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
            "prop": "url",
            "minWidth": "180",
            "width": "",
            "append_table_": 0,
            "label": "url地址"
        },
        {
            "name": "",
            "prop": "sort",
            "minWidth": "180",
            "width": "",
            "append_table_sort": 1,
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
            "append_form_": 0,
            "label": "视频名称"
        },
        {
            "name": "",
            "prop": "fclass",
            "datatype": "require",
            "type": "select",
            "datakey":"videoClass",
            "append_form_": 0,
            "label": "分类"
        },
        {
            "name": "",
            "prop": "sort",
            "datatype": "require|number",
            "type": "text",
            "defaultValue":0,
            "append_form_": 0,
            "label": "排序"
        },
        {
            "name": "",
            "prop": "url",
            "datatype": "require",
            "type": "text",
            "append_form_url": 0,
            "label": "视频url"
        },
        {
            "prop": "logo",
            "datatype": "array",
            "type": "upload",
            "append_form_": 0,
            "label": "logo",
            "allowUpLoadNum": "1",
            "upurl": "video"
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
