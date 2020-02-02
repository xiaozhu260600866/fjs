export default{
    data:{
        listsAction:'',
        pageSize:'15',
        canCreate:false,
        tableName:'users',
        createAction:'',
        editAction:'',
        //是否需要审核
        //auditAction:'/admin/user/change-status',
        checkAll:true,
        tableFields:[
            {prop:'source',label:'来源',width:"100"},
            {prop:'name',label:'姓名',minwidth:"100"},
            {prop:'nickname',label:'呢称',minwidth:"100"},
            {prop:'phone',label:'电话',width:"120"},
            {prop:'created_at',label:'关注时间',width:"160"}
        ],
        searchFields:[
            {prop:'nickname',label:'呢称'},
            {prop:'name',label:'姓名'},
            {prop:'phone',label:'电话'}
        ],
        /* formFields:[
            {prop:'name',label:'姓名',type:'text',datatype:'require'},
            {prop:'phone',label:'电话',type:'text',datatype:'require|phone'},
            {prop:'sex',label:'性别',type:'select',datatype:'require',datakey:'sexArr'},
            {prop:'address',label:'服务地址',type:'location',datatype:'require'},
            {prop:'remark',label:'备注',type:'textarea'},

        ] */
    }
}
