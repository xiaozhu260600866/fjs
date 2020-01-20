<template>
    <div class="bg-f pb30">
        <div class="flex-right top flex-middle plr20">

            <span>日期：</span>
            <el-date-picker v-model="data.query.start_date" type="date" placeholder="选择开始日期">
            </el-date-picker>&nbsp;&nbsp;至&nbsp;&nbsp;
            <el-date-picker v-model="data.query.end_date" type="date" placeholder="选择结束日期">
            </el-date-picker>
         <!--   <div class="btn-group" role="group" aria-label="...">
                <a :class="data.query.type == 'yesterday' ? 'btn btn-primary goods_class' :'btn btn-white goods_class'"
                    @click="data.query.type = 'yesterday'">昨天</a>
                <a :class="data.query.type == 'today' ? 'btn btn-primary goods_class' :'btn btn-white goods_class'"
                    @click="data.query.type = 'today'">今天</a>
                <a :class="data.query.type == 'thismonth' ? 'btn btn-primary goods_class' :'btn btn-white goods_class'"
                    @click="data.query.type = 'thismonth'">本月</a>
                <a :class="data.query.type == 'thisyear' ? 'btn btn-primary goods_class' :'btn btn-white goods_class'"
                    @click="data.query.type = 'thisyear'">本年</a>
            </div> -->
            <button class="btn btn-primary ml12 h40" type="submit" @click="search()"><i class="icon-search bigger-110"
                    ></i>查询</button>

        </div>
        <div class=" count-item1 flex-center mt20">
            <div class="count-color1 count-color flex flex-middle flex-wrap">
                <div class="count-header w-b100 text-center">
                    <span class="fc-white">营业额</span>
                </div>
                <div class="span-right w-b100 text-center"><span class="fs-30 Arial fc-white">{{parseFloat(data.amount) + parseFloat(data.top_price)}}</span></div>
            </div>
            <div class="count-color1 count-color flex flex-middle flex-wrap">
                <div class="count-header w-b100 text-center">
                    <span class="fc-white">点歌金额</span>
                </div>
                <div class="span-right w-b100 text-center"><span class="fs-30 Arial fc-white">{{parseFloat(data.amount) }}</span></div>
            </div>
            <div class="count-color1 count-color flex flex-middle flex-wrap">
                <div class="count-header w-b100 text-center">
                    <span class="fc-white">置顶金额</span>
                </div>
                <div class="span-right w-b100 text-center"><span class="fs-30 Arial fc-white">{{parseFloat(data.top_price) }}</span></div>
            </div>
            <div class="count-color2 count-color flex flex-middle flex-wrap">
                <div class="count-header w-b100 text-center">
                    <span class="fc-white">点歌数量</span>
                </div>
                <div class="span-right w-b100 text-center"><span class="fs-30 Arial fc-white">{{data.count}}</span></div>
            </div>
            <div class="count-color3 count-color flex flex-middle flex-wrap">
                <div class="count-header w-b100 text-center">
                    <span class="fc-white">置顶数量</span>
                </div>
                <div class="span-right w-b100 text-center"><span class="fs-30 Arial fc-white">{{data.top_count}}</span></div>
            </div>
        </div>
        <!-- <div class="section_m flex mt50">
            <div class="col-md-6 col-xs-6 s_module" style="padding-right: 8px;width:50%">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <span class="title-nav">待唱曲目</span>
                    </div>
                    <div class="ibox-content ibox-item ibox1" style="padding: 15px;">
                        <table class="table table-hover margin bottom" style="margin-bottom: 0;">
                            <thead class="thin-border-bottom">
                                <tr class="ta_th_tr">
                                    <th>歌曲</th>
                                    <th>歌手</th>
                                    <th>时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="ta_tb_tr" v-for="v in data.ordering">
                                    <td align="center">{{v.getSong.name}}</td>
                                    <td align="center">{{v.getSong.user_name}}</td>
                                    <td align="center">{{v.created_at}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xs-6 s_module" style="padding: 0 0 0 8px;width:50%">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <span class="title-nav">已唱曲目</span>
                    </div>
                    <div class="ibox-content ibox-item ibox2" style="padding: 15px;">
                        <table class="table table-hover margin bottom" style="margin-bottom: 0;">
                            <thead class="thin-border-bottom">
                                <tr class="ta_th_tr">
                                    <th>歌曲</th>
                                    <th>歌手</th>
                                    <th>时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="ta_tb_tr" v-for="v in data.ordered">
                                    <td align="center">{{v.getSong.name}}</td>
                                    <td align="center">{{v.getSong.user_name}}</td>
                                    <td align="center">{{v.created_at}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formAction: "/admin/order/count",
                data: this.formatData(this),
                siteName: this.getSiteName(),
                start_date: new Date(),
                end_date: new Date(),
            }
        },
        mounted() {
            this.$set(this.data.query,"start_date",new Date());
            this.$set(this.data.query,"end_date",new Date());

            this.ajax();
        },
        methods: {
            search(){

               this.ajax();
            },
            ajax() {
                if (this.data.query.start_date && typeof this.data.query.start_date ==
                	"object") {
                     this.data.query.start_date = this.dateToString(this.data.query.start_date);
                }
                if (this.data.query.end_date && typeof this.data.query.end_date ==
                	"object") {
                     this.data.query.end_date = this.dateToString(this.data.query.end_date);
                }
                this.getAjax(this, {}, msg => {
                    this.data.query.start_date = msg.start_date;
                    this.data.query.end_date = msg.end_date;
                    this.$set(this.data.query,"start_date",msg.start_date);
                    this.$set(this.data.query,"end_date",msg.end_date);
                });
            },
        },
    }
</script>

<style scoped="">
.top {height: 60px;}
.count-color1 {background-color: #ee6665;border-radius: 5px;}
.count-color {width: 206px !important;height: 100px;margin: 0 30px;}
.count-color2 {background-color: #be62a5;border-radius: 5px;}
.count-color3 {background-color: green;border-radius: 5px;}
.ibox.float-e-margins {border: 1px #ddd solid;}
.ibox-title {padding: 0 10px;border-bottom: 1px #ddd solid;height: 40px;line-height: 40px;}
.ibox-title .title-nav {border-bottom: 2px #20a0ff solid;padding: 9px 15px;}
.btn-primary.goods_class{color: #fff;margin: 0 5px;}
</style>
