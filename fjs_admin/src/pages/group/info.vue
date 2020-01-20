<template>
    <div class="pt20">
        <el-col :span="24" class="">
            <el-form :inline="true" id="search" :model="data.query">
                <el-form-item>
                    <el-input placeholder="请输入订单号" name="order_no" v-model="data.query.order_no" class="input-w300"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入姓名" name="addr_name" v-model="data.query.addr_name" class="input-w300"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入电话" name="addr_phone" v-model="data.query.addr_phone" class="input-w300"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入课程名称" name="course_str" v-model="data.query.course_str" class="input-w300"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="data.nextPage = 1;ajax()">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table :data="data.lists" :span-method="objectSpanMethod" border class="w-b100">

            <el-table-column prop="order_group_id" label="ID" width="60"></el-table-column>
            <el-table-column prop="order_no" label="订单号" width="115"></el-table-column>
            <el-table-column prop="course_str" label="课程名称" min-width="200">
                <template scope="scope">{{ scope.row.getOrder.course_str }}</template>
            </el-table-column>
            <el-table-column prop="course_str" label="成团人数" min-width="80">
                <template scope="scope">{{ scope.row.getGroup.group_num }}</template>
            </el-table-column>
            <el-table-column prop="course_str" label="可加人数" min-width="80">
                <template scope="scope">{{ scope.row.getGroup.leftNum }}</template>
            </el-table-column>
            <el-table-column prop="course_str" label="角色" width="60">
                <template scope="scope">{{ scope.row.is_head == 0 ? '团员' :'团长' }}</template>
            </el-table-column>
            <el-table-column prop="course_str" label="姓名" width="80">
                <template scope="scope">{{ scope.row.getOrder.addr_name }}</template>
            </el-table-column>
            <el-table-column prop="course_str" label="电话" width="115">
                <template scope="scope">{{ scope.row.getOrder.addr_phone }}</template>
            </el-table-column>
            <el-table-column prop="course_str" label="年龄" width="115">
                <template scope="scope">{{ scope.row.getOrder.addr_age }}</template>
            </el-table-column>
            <el-table-column prop="created_at" label="日期" width="170"></el-table-column>
            <el-table-column prop="status" label="状态" width="80">
                <template scope="scope">{{ scope.row.getOrder.status_message }}</template>
            </el-table-column>
            <el-table-column label="操作" width="170">
                <template scope="scope">
                    <el-button size="mini" @click.native="changeOrder(scope.row.getOrder,9)" v-if="scope.row.getOrder.status<9">核销</el-button>

                </template>
            </el-table-column>
        </el-table>
        <el-col :span="24" class="toolbar mtb20">
        	<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.thisPage"
        		:page-sizes="[15]" :page-size="15" layout="total, sizes, prev, pager, next, jumper" :total="data.total"
        		style='float: right'>
        	</el-pagination>
        </el-col>
    </div>
</template>
<script type="text/javascript">
    let rowStart = 0;
    export default {
        data() {
            return {
                group_ids: [],
                rowArr: [0],
                formAction: "/admin/group/lists",
                data: this.formatData(this),
                siteName: this.getSiteName(),
            }
        },
        mounted() {
            this.ajax();
        },
        methods: {
            handleSizeChange(val) {
            	this.data.nextPage = val;
            	this.ajax();
            },
            handleCurrentChange(val) {
            	this.data.nextPage = val;
            	this.ajax();
            },
            changeOrder(res, status) {
                this.getConfirm("是否确认收货？", msg => {
                    this.postAjax("/admin/order/change-order-status", {
                        id: res.id,
                        status: status
                    }, msg => {
                        if (msg.data.status == 2) {
                            this.ajax();
                        }
                    });
                });
            },
            ajax() {
                this.getAjax(this, {}).then(msg => {

                });
            },
            objectSpanMethod({
                row,
                column,
                rowIndex,
                columnIndex
            }) {
                if (columnIndex == 0 || columnIndex == 3 || columnIndex == 4) {
                    let infoNum = 0;
                    if (this.in_array(rowIndex, this.data.rowArr)) {
                        this.data.lists.forEach(msg => {
                            if (row.order_group_id == msg.order_group_id) {
                                infoNum++;
                            }
                        });
                        rowStart += infoNum;
                        return {
                            rowspan: infoNum,
                            colspan: 1
                        };
                    } else {
                        console.log(1);
                        return {
                            rowspan: 0,
                            colspan: 0
                        }
                    }
                }
            }
        }
    }
</script>
