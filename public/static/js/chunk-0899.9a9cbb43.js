(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0899"],{5913:function(e,t,a){"use strict";var s=a("Q8Ng");a.n(s).a},AygI:function(e,t,a){},BOeb:function(e,t,a){"use strict";var s=a("vDqi"),n=a.n(s),r={props:{value:{type:String}},data:function(){return{currentValue:this.value,uploadData:{token:""}}},methods:{getToken:function(){var e=this;n.a.get("http://upload.yaojunrong.com/getToken").then(function(t){200==t.data.code?e.uploadData={token:t.data.data}:e.$message.info(t.data.msg)})},uploadSuccess:function(e){console.log(e),this.currentValue=e.url}},created:function(){this.getToken()},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}}},i=(a("5913"),a("KHd+")),l=Object(i.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com",data:this.uploadData,"show-file-list":!1,"on-success":this.uploadSuccess}},[this.currentValue?t("img",{staticClass:"avatar",attrs:{src:this.currentValue,alt:""}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},[],!1,null,null,null);l.options.__file="index.vue";t.a=l.exports},"FWo/":function(e,t,a){"use strict";a.r(t);var s=a("P2sY"),n=a.n(s),r=a("t3Un");function i(e){return r.a.post("/maintain/update",e)}var l={data:function(){return{page:1,size:6,count:0,list:[{repairsId:{},user:{}}],month:"",status:"",pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},dialogVisible:!1,memberForm:{user:{},repairsId:{user:{},type:{},images:""},images:""},isShowing:!1,options:[{value:"",label:"全部"},{value:"2",label:"未审核"},{value:"0",label:"已驳回"},{value:"3",label:"已通过"},{value:"4",label:"已评价"}],isMax:!1}},components:{uploadAvatar:a("BOeb").a},methods:{handleCurrentChange:function(e){this.page=e},imgMax:function(){this.isMax=!0},imgMin:function(){this.isMax=!1},getData:function(){var e=this,t={};if(t.status=this.status,""!==this.month){var a=new Date(this.month);t.month=a.getTime()}(function(e){return r.a.get("/maintain/get",e)})(t).then(function(t){200===t.code&&(e.list=t.data,e.count=e.list.length)})},showDetail:function(e){this.dialogVisible=!0,this.isShowing=!1,this.memberForm=n()({},e)},handlePass:function(e){var t=this;i({_id:e,status:3}).then(function(e){200===e.code&&(t.$message.success(e.msg),t.dialogVisible=!1,t.getData())})},handleReject:function(e,t){var a=this;"1"==t?this.$prompt("请输入驳回理由","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var s=t.value;a.updateM(e,s)}).catch(function(){a.$message({type:"info",message:"取消输入"})}):(this.isShowing=!0,this.memberForm.rejectMsg&&(this.updateM(e,this.memberForm.rejectMsg),this.dialogVisible=!1))},updateM:function(e,t){var a=this;i({_id:e,status:0,rejectMsg:t}).then(function(e){200===e.code&&(a.$message.success(e.msg),a.getData())})},getSearch:function(){this.getData()}},created:function(){this.getData()}},o=(a("J1wj"),a("KHd+")),u=Object(o.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"card-wrap-table"},[a("div",{staticClass:"title-wrap clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"title fll"},[e._v("\n        维修记录\n      ")]),e._v(" "),a("el-date-picker",{staticClass:"flr",staticStyle:{"margin-left":"20px"},attrs:{type:"month","picker-options":e.pickerOptions,placeholder:"选择月"},on:{change:e.getSearch},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}}),e._v(" "),a("el-select",{staticClass:"flr",attrs:{placeholder:"请选择"},on:{change:e.getSearch},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-table",{attrs:{data:e.list.slice((e.page-1)*e.size,e.page*e.size),"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"维修单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.code)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"报修人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.repairsId.user.name)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"维修员",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.user.name)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"报修时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.repairsId.createdTime.split("T")[0])+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"接单时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.createdTime.split("T")[0])+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1===t.row.status?"danger":0===t.row.status?"danger":"success","disable-transitions":""}},[e._v("\n            "+e._s(1===t.row.status?"未提交":0===t.row.status?"已驳回":2===t.row.status?"未审核":3===t.row.status?"已通过":"已评价")+"\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[2===t.row.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handlePass(t.row._id)}}},[e._v("\n            通过\n          ")]):e._e(),e._v(" "),2===t.row.status?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.handleReject(t.row._id,"1")}}},[e._v("\n            驳回\n          ")]):e._e(),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.showDetail(t.row)}}},[e._v("\n            查看\n          ")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"memberForm",attrs:{model:e.memberForm,"label-position":"left","label-width":"150px"}},[a("el-form-item",{attrs:{label:"报修人姓名"}},[a("span",[e._v(e._s(e.memberForm.repairsId.user.name))])]),e._v(" "),a("el-form-item",{attrs:{label:"报修人电话"}},[a("span",[e._v(e._s(e.memberForm.repairsId.user.phone))])]),e._v(" "),a("el-form-item",{attrs:{label:"报修类型"}},[a("span",[e._v(e._s(e.memberForm.repairsId.type.name))])]),e._v(" "),a("el-form-item",{attrs:{label:"报修图片"}},e._l(e.memberForm.repairsId.images.split(","),function(e,t){return a("img",{key:t,staticClass:"pic",attrs:{src:e}})})),e._v(" "),a("el-form-item",{attrs:{label:"报修地址"}},[a("span",[e._v(e._s(e.memberForm.repairsId.address))])]),e._v(" "),a("el-form-item",{attrs:{label:"报修备注"}},[a("span",[e._v(e._s(e.memberForm.repairsId.remark))])]),e._v(" "),0===e.memberForm.repairsId.status?a("el-form-item",{attrs:{label:"驳回理由"}},[a("span",[e._v(e._s(e.memberForm.repairsId.rejectMsg))])]):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"维修员姓名"}},[a("span",[e._v(e._s(e.memberForm.user.name))])]),e._v(" "),a("el-form-item",{attrs:{label:"维修员电话"}},[a("span",[e._v(e._s(e.memberForm.user.phone))])]),e._v(" "),a("el-form-item",{attrs:{label:"维修图片"}},e._l(e.memberForm.images.split(","),function(t,s){return a("img",{key:s,staticClass:"pic",attrs:{src:t},on:{click:e.imgMax}})})),e._v(" "),0===e.memberForm.status?a("el-form-item",{attrs:{label:"驳回理由"}},[a("span",[e._v(e._s(e.memberForm.rejectMsg))])]):e._e(),e._v(" "),4===e.memberForm.status?a("el-form-item",{attrs:{label:"评价星级"}},[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900",value:e.memberForm.level}})],1):e._e(),e._v(" "),e.isShowing?a("el-form-item",{attrs:{label:"驳回理由"}},[a("el-input",{model:{value:e.memberForm.rejectMsg,callback:function(t){e.$set(e.memberForm,"rejectMsg",t)},expression:"memberForm.rejectMsg"}})],1):e._e()],1),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),2===e.memberForm.status?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){e.handleReject(e.memberForm._id,"2")}}},[e._v("驳 回")]):e._e(),e._v(" "),2===e.memberForm.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.handlePass(e.memberForm._id)}}},[e._v("通 过")]):e._e()],1),e._v(" "),e.isMax?a("div",{staticClass:"imgMax clearfix",on:{click:e.imgMin}},e._l(e.memberForm.images.split(","),function(e,t){return a("img",{key:t,attrs:{src:e}})})):e._e()],1)],1),e._v(" "),a("el-pagination",{staticClass:"flr",staticStyle:{"margin-top":"20px"},attrs:{"page-size":e.size,"current-page":e.page,layout:"prev, pager, next",total:e.count},on:{"current-change":e.handleCurrentChange}})],1)},[],!1,null,"4baa2d4f",null);u.options.__file="index.vue";t.default=u.exports},J1wj:function(e,t,a){"use strict";var s=a("AygI");a.n(s).a},Q8Ng:function(e,t,a){}}]);