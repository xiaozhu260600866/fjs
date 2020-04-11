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
            {prop:'hospital_name',label:'使用医院',minWidth:"200"},
            {prop:'amount',label:'优惠券金额',minWidth:"200"},
            {prop:'orderCount',label:'领取数量',minWidth:"200"},
            {prop:'num',label:'数量',minWidth:"200"},
            {prop:'start_at',label:'开始日期',minWidth:"200"},
            {prop:'end_at',label:'结束日期',minWidth:"200"},
            {prop:'putaway',label:'上架/下架',minWidth:"200",append_table_putaway:true},

        ],
        searchFields:[
            {prop:'name',label:'优惠券名称'},
            {prop:'hospital_name',label:'医院名称'},
        ],
        formFields:[
            {prop:'name',label:'优惠券名称',type:'text',datatype:'require'},
            {prop:'num',label:'优惠券数量',type:'text',datatype:'require'},


            {prop:'start_at',label:'开始日期',type:'date',datatype:'require'},
            {prop:'end_at',label:'结束日期',type:'date',datatype:'require'},
            {prop:'amount',label:'金额',type:'text',datatype:'require|price'},
            {prop:'hospital_userid',name:'hospital_name',rowName:'company_name',label:'选择医院',defaultValue:0,type:"searchRadio",url:'/admin/user/lists?role=7',tableFields:[
                  {prop:'userInfo.company_name',label:'医院',minWidth:"150"},
                  {prop:'userInfo.phone',label:'电话',minWidth:"150"},
                  {prop:'userInfo.address',label:'住址',minWidth:"150"},

            ],searchFields:[
                  {prop:'company_name',label:'医院名称'},
            ]},
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
              {prop:'need_remark',label:'使用需知',type:'textarea'},
              {prop:'remark',label:'备注',type:'editor'},
           /*  {prop:'pic',label:'图片',type:'upload',allowUpLoadNum:1,upurl:'user'}, */
        ]
    }
}
