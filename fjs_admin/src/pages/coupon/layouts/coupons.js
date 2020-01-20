export default{
    data:{
        listsAction:'',
        pageSize:'15',
        canCreate:true,
        canEdit:true,
        tableName:'coupons',
        createAction:'/admin/coupon/create',
        editAction:'/admin/coupon/edit',
        //是否需要审核
        //auditAction:'/admin/userLev/change-status',
        checkAll:true,
       /* tarbars:{
            prop:'status',
            data:[
                {label:'使用中',value:'0'},
                {label:'已使用',value:'1'},
            ]
        }, */
        tableFields:[
            {prop:'name',label:'优惠券名称',minWidth:"150"},
            {prop:'start_at',label:'开始日期',minWidth:"200"},
            {prop:'amount',label:'金额',minWidth:"200"},
            {prop:'end_at',label:'结束日期',minWidth:"200"},
            {prop:'hospital_name',label:'医院',minWidth:"200"},
        ],
        searchFields:[
            {prop:'name',label:'优惠券名称'},
        ],
        formFields:[
            {prop:'name',label:'优惠券名称',type:'text',datatype:'require'},
            {prop:'num',label:'优惠券数量',type:'text',datatype:'require'},
            {prop:'discount',label:'折扣',type:'text',datatype:'require'},
            {prop:'need_remark',label:'使用需知',type:'textarea',datatype:'require'},
            {prop:'start_at',label:'开始日期',type:'date',datatype:'require'},
            {prop:'end_at',label:'结束日期',type:'date',datatype:'require'},
            {prop:'amount',label:'金额',type:'text',datatype:'require|price'},
            {prop:'hospital_name',label:'升级条件',defaultValue:0,append_form_hospital_name:true},
            {
                "prop": "logo",
                "datatype": "array",
                "type": "upload",
                "append_form_": 0,
                "label": "优惠券log",
                "allowUpLoadNum": "1",
                "upurl": "coupon"
            },
            {
                "prop": "cover",
                "datatype": "array",
                "type": "upload",
                "append_form_": 0,
                "label": "展示图片",
                "allowUpLoadNum": "5",
                "upurl": "coupon"
            },
           /*  {prop:'pic',label:'图片',type:'upload',allowUpLoadNum:1,upurl:'user'}, */
        ]
    }
}
