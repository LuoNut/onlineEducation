(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/teacher/course-detail/course-detail"],{521:function(e,o,t){"use strict";(function(e,o){var s=t(4);t(26),t(27);s(t(25));var n=s(t(522));e.__webpack_require_UNI_MP_PLUGIN__=t,o(n.default)}).call(this,t(1)["default"],t(2)["createPage"])},522:function(e,o,t){"use strict";t.r(o);var s=t(523),n=t(525);for(var c in n)["default"].indexOf(c)<0&&function(e){t.d(o,e,(function(){return n[e]}))}(c);t(527);var r,u=t(46),i=Object(u["default"])(n["default"],s["render"],s["staticRenderFns"],!1,null,null,null,!1,s["components"],r);i.options.__file="pages/teacher/course-detail/course-detail.vue",o["default"]=i.exports},523:function(e,o,t){"use strict";t.r(o);var s=t(524);t.d(o,"render",(function(){return s["render"]})),t.d(o,"staticRenderFns",(function(){return s["staticRenderFns"]})),t.d(o,"recyclableRender",(function(){return s["recyclableRender"]})),t.d(o,"components",(function(){return s["components"]}))},524:function(e,o,t){"use strict";var s;t.r(o),t.d(o,"render",(function(){return n})),t.d(o,"staticRenderFns",(function(){return r})),t.d(o,"recyclableRender",(function(){return c})),t.d(o,"components",(function(){return s}));try{s={uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,698))},uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(t.bind(null,780))},"u-Textarea":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--textarea/u--textarea")]).then(t.bind(null,788))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,794))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,770))},"u-Input":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--input/u--input")]).then(t.bind(null,803))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var e=this,o=e.$createElement;e._self._c},c=!1,r=[];n._withStripped=!0},525:function(e,o,t){"use strict";t.r(o);var s=t(526),n=t.n(s);for(var c in s)["default"].indexOf(c)<0&&function(e){t.d(o,e,(function(){return s[e]}))}(c);o["default"]=n.a},526:function(e,o,t){"use strict";(function(e,s){var n=t(4);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c,r=n(t(28)),u=n(t(11)),i=n(t(31));function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){(0,u.default)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var d=e.database(),f={data:function(){return{courseId:"",oldcourseData:{},courseData:{},courseTypeShow:!1,columns:[["计算机","理学，工学，农学","外语","心理学","音乐与艺术","文史哲学","医学与保健 ","教育教学"],["计算机基础","软件工程","网络与安全技术","硬件系统及应用","前端开发"]],columnData:[["计算机基础","软件工程","网络与安全技术","硬件系统及应用","前端开发"],["力学","机械","材料","电气信息","土木","工学","化学","数学"],["听力口语","语法阅读","写作翻译","四六级","雅思","其它语言"],["心理学"],["文学文化","新闻传播","哲学","历史","政治"],["设计，创作","艺术学","美术学","戏剧与影视","设计学","音乐与舞蹈"],["体育教育","基础医学","临床医学","公共卫生","口腔医学","中医药医学","药学","护理学","老年医学","儿医学","妇产科学","急诊与灾难医学"],["教学方法","教学能力","信息化教学","职业素养","学科教学","素质教育","体育教学","学前教育"]],cId:1,classList:[],oldClassList:[],Vid:1,currentIndex:0,courseTotalTime:[],totalTime:null,courseNum:null}},onLoad:function(e){console.log(e.courseId),this.courseId=e.courseId,this.getCourseData()},watch:{},methods:(c={getCourseData:function(){var e=this;return(0,i.default)(r.default.mark((function o(){var t,s;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,d.collection("course_video").where('"'.concat(e.courseId,'" == _id')).field("course_name,subject_type_one,subject_type_two,course_intro,courseware,courseCover,course_video,course_time,course_video_num").get();case 2:return t=o.sent,e.courseData=t.result.data[0],e.oldcourseData=JSON.parse(JSON.stringify(t.result.data[0])),e.Vid=e.courseData.course_video.length,console.log(e.courseData.course_video),console.log(e.courseData),o.next=10,d.collection("teacher_course").where('"'.concat(e.courseId,'" == course && user_id == $cloudEnv_uid')).field("class").get();case 10:s=o.sent,console.log(s.result.data),s.result.data.forEach((function(o,t){console.log(o.class),e.classList.push({id:t,courseClass:o.class}),e.cId=e.classList.length,e.oldClassList=JSON.parse(JSON.stringify(e.classList))}));case 13:case"end":return o.stop()}}),o)})))()},selectionType:function(){this.courseTypeShow=!0},changeHandler:function(e){var o=e.columnIndex,t=(e.value,e.values,e.index),s=e.picker,n=void 0===s?this.$refs.uPicker:s;0===o&&n.setColumnValues(1,this.columnData[t])},confirm:function(e){console.log("confirm",e.value),this.courseData.subject_type_one=e.value[0],this.courseData.subject_type_two=e.value[1],this.courseTypeShow=!1},onCancel:function(){this.courseTypeShow=!1},addItem:function(){var e={id:parseInt(this.cId)+1,courseClass:""};this.classList.push(e),this.cId=parseInt(this.cId)+1,console.log(this.cId)},delItem:function(e){if(1==e.cId)return s.showToast({title:"不能删除第1个",icon:"none"}),!1;this.classList=this.classList.filter((function(o){return o!=e}))},addItemVideo:function(){var e={id:parseInt(this.Vid)+1,section:"",videoSrc:[]};this.oldcourseData.course_video.push(e),this.courseData.course_video.push(JSON.parse(JSON.stringify(e))),this.Vid=parseInt(this.Vid)+1}},(0,u.default)(c,"delItem",(function(e){if(1==e.Vid)return s.showToast({title:"不能删除第1个",icon:"none"}),!1;this.courseData.course_video=this.courseData.course_video.filter((function(o){return o!=e}))})),(0,u.default)(c,"coursewareUpload",(function(){this.$refs.coursewareFiles.upload()})),(0,u.default)(c,"courseCoverUpload",(function(){this.$refs.courseCoverFiles.upload()})),(0,u.default)(c,"upload",(function(e){console.log(e),this.currentIndex=e,console.log(this.currentIndex),this.$refs.files[e].upload()})),(0,u.default)(c,"select",(function(e){console.log(e),this.courseTotalTime.push({cloudPath:e.tempFiles[0].file.cloudPath,duration:e.tempFiles[0].file.duration}),console.log(this.courseTotalTime),console.log(this.courseData)})),(0,u.default)(c,"deleteFile",(function(e){var o=this;console.log(e),this.courseTotalTime.forEach((function(t,s){t.cloudPath==e.tempFile.cloudPath&&o.courseTotalTime.splice(s,1)})),this.courseData.course_video.forEach((function(t,s){t.videoSrc.forEach((function(t,n){t.src==e.tempFile.src&&o.courseData.course_video[s].videoSrc.splice(s,1)}))})),this.courseData.course_video_num-=1,console.log(this.courseTotalTime)})),(0,u.default)(c,"progress",(function(e){console.log("上传进度：",e),console.log(this.courseData)})),(0,u.default)(c,"success",(function(e){var o=this;console.log(e);var t={};console.log(this.courseData),console.log(this.oldcourseData),e.tempFiles.forEach((function(e){t.name=e.name.substring(0,e.name.indexOf(".")),t.src=e.url,t.size=e.size,o.courseData.course_video[o.currentIndex].videoSrc.push(t),console.log(t),t={}})),this.courseData.course_video_num+=1})),(0,u.default)(c,"fail",(function(e){console.log("上传失败：",e)})),(0,u.default)(c,"upCoursewareSelect",(function(e){console.log("选择文件：",e)})),(0,u.default)(c,"upCoursewareSuccess",(function(e){var o=this;console.log(e);var t={};e.tempFiles.forEach((function(e){t.name=e.name.substring(0,e.name.indexOf(".")),t.src=e.url,t.size=e.size,o.courseData.courseware.push(t)}))})),(0,u.default)(c,"upCourseCoverSuccess",(function(e){console.log(e.tempFilePaths[0]),this.courseData.courseCover=e.tempFilePaths[0]})),(0,u.default)(c,"courseToTime",(function(){var e=this;this.courseNum=this.courseTotalTime.length,this.courseTotalTime.forEach((function(o){e.totalTime+=o.duration})),console.log(this.totalTime),this.courseData.course_time+=this.totalTime})),(0,u.default)(c,"uniformHeading",(function(){var e=this;this.oldcourseData.course_video.forEach((function(o,t){e.courseData.course_video[t].section=o.section}))})),(0,u.default)(c,"onAccomplish",(function(){this.uniformHeading(),this.courseToTime(),this.upCourseData(),console.log(this.courseData),console.log(this.oldcourseData),console.log(this.classList)})),(0,u.default)(c,"upCourseData",(function(){var e=this;return(0,i.default)(r.default.mark((function o(){var t;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return s.showLoading({title:"上传中...",mask:!0}),delete e.courseData._id,o.next=4,d.collection("course_video").where('"'.concat(e.courseId,'" == _id')).update(l({},e.courseData));case 4:t=o.sent,console.log(t),e.courseVideoId=t.result.id,e.upTeacherClass(),s.hideLoading(),s.showToast({title:"修改成功"}),s.reLaunch({url:"/pages/tabbar/teacher/teacher"});case 11:case"end":return o.stop()}}),o)})))()})),(0,u.default)(c,"upTeacherClass",(function(){var e=this;console.log(this.classList),console.log(this.oldClassList),this.classList.length==this.oldClassList.length?this.classList.forEach((function(o,t){e.oldClassList[t].class!=o.class&&e.upTeacherClassFun()})):(console.log("1"),this.upTeacherClassFun())})),(0,u.default)(c,"upTeacherClassFun",(function(){var e=this;return(0,i.default)(r.default.mark((function o(){var t;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log(e.classList),console.log(e.courseId),o.next=4,d.collection("teacher_course").where('"'.concat(e.courseId,'" == course')).remove();case 4:t=o.sent,console.log(t),e.classList.forEach((function(o,t){console.log(1,o.courseClass),d.collection("teacher_course").add({course:e.courseId,class:o.courseClass}).then((function(e){console.log(e)}))}));case 7:case"end":return o.stop()}}),o)})))()})),(0,u.default)(c,"ondelectCourse",(function(){var e=this;s.showModal({title:"是否确定删除?",success:function(o){console.log(o),o.confirm&&d.collection("course_video").where('"'.concat(e.courseId,'" == _id')).remove().then((function(e){console.log(e),console.log("111"),s.showToast({title:"删除成功!"}),setTimeout((function(){s.reLaunch({url:"/pages/tabbar/teacher/teacher"})}),700)}))}})})),c)};o.default=f}).call(this,t(27)["default"],t(2)["default"])},527:function(e,o,t){"use strict";t.r(o);var s=t(528),n=t.n(s);for(var c in s)["default"].indexOf(c)<0&&function(e){t.d(o,e,(function(){return s[e]}))}(c);o["default"]=n.a},528:function(e,o,t){}},[[521,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/teacher/course-detail/course-detail.js.map