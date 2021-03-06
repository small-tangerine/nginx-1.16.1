(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0804917a"],{1364:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-mask",on:{click:e.handleMaskClick}}),n("div",{staticClass:"login-main"},[n("div",{staticClass:"login-tab"},[e._l(e.loginTabs,(function(t,r){return n("span",{key:r,staticClass:"login-tab-item",class:{active:r===e.currentTabIndex},on:{click:function(t){e.currentTabIndex=r}}},[e._v(e._s(t))])})),n("span",{staticClass:"login-close iconfont",on:{click:function(t){return e.setShowLogin(!1)}}},[e._v("")])],2),n(e.componentName,{tag:"component",attrs:{index:e.currentTabIndex}})],1)])},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("cadf"),n("bd86")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-way"},[n("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.rules}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{ref:"username",attrs:{placeholder:"请输入手机号/邮箱",clearable:""},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username","string"===typeof t?t.trim():t)},expression:"loginForm.username"}})],1),2===e.index?n("el-form-item",{staticClass:"code",attrs:{prop:"verifyCode"}},[n("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.loginForm.verifyCode,callback:function(t){e.$set(e.loginForm,"verifyCode","string"===typeof t?t.trim():t)},expression:"loginForm.verifyCode"}}),n("el-button",{attrs:{disabled:e.isDisabled},on:{click:e.sendCode}},[e._v(e._s(e.buttonText))])],1):e._e(),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{ref:"password",attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"===typeof t?t.trim():t)},expression:"loginForm.password"}})],1),0!==e.index?n("el-form-item",{attrs:{prop:"checkPassword"}},[n("el-input",{attrs:{placeholder:"请再次输入密码","show-password":""},model:{value:e.loginForm.checkPassword,callback:function(t){e.$set(e.loginForm,"checkPassword","string"===typeof t?t.trim():t)},expression:"loginForm.checkPassword"}})],1):e._e(),n("el-form-item",{staticClass:"auto-login-item"})],1),n("button",{staticClass:"login-btn",attrs:{disabled:e.isLoading},on:{click:e.handleValidateForm}},[e._v("\n    "+e._s(e.btnText)+"\n  ")])],1)},a=[],c=(n("c5f6"),n("2f62")),l=n("c24f"),u=n("da71"),d=n("5f87");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={props:{index:Number},data:function(){var e=this,t=function(t,n,r){n?n!==e.loginForm.password?r(new Error("两次输入的密码不一致")):r():r(new Error("请再次输入密码"))},n={username:[{required:!0,message:"请输入手机号/邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],checkPassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:t,trigger:"blur"}],verifyCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]};return{isLoading:!1,rules:n,isDisabled:!1,flag:!0,buttonText:"发送验证码",loginForm:{username:"",password:"",checkPassword:"",verifyCode:""}}},mounted:function(){var e=this.$refs.username,t=this.$refs.password;this.loginForm.username?this.loginForm.password||t.focus():e.focus(),window.addEventListener("keyup",this.handleListenKeyup)},methods:p({handleValidateForm:function(){var e=this;this.$refs["loginForm"].validate((function(t){t&&e.handleBtnClick()}))},sendCode:function(){var e=this;this.$refs["loginForm"].validateField("username",(function(t){if(!t){var n=60;if(e.buttonText="重新发送 "+n,e.isDisabled=!0,e.flag){e.flag=!1;var r=setInterval((function(){n--,e.buttonText="重新发送 "+n,0===n&&(clearInterval(r),e.buttonText="重新发送",e.isDisabled=!1,e.flag=!0)}),1e3)}}}))},handleBtnClick:function(){var e=this,t={username:this.loginForm.username,password:this.loginForm.password};0!==this.index&&(t.checkPassword=this.loginForm.checkPassword),2===this.index&&(t.verifyCode=this.loginForm.verifyCode);var n=0===this.index?l["g"]:1===this.index?l["h"]:l["f"],r=0===this.index?"登录":1===this.index?"注册":"重置密码";this.isLoading=!0,n(t).then((function(t){e.isLoading=!1;var n=t.error,o=t.data;if(n!==u["a"])return!1;e.$message.success("".concat(r,"成功")),e.loginForm={},Object(d["d"])(o.token,1800),o.token=void 0,e.setUserInfo(o),e.setShowLogin(!1),location.reload()})).catch((function(t){console.log(t),e.isLoading=!1,e.$message.error("服务器异常")}))},handleListenKeyup:function(e){13===e.keyCode&&this.handleValidateForm()}},Object(c["d"])("login",{setUserInfo:"SET_USER_INFO",setShowLogin:"SET_SHOW_LOGIN"})),watch:{index:function(){this.$refs.loginForm.resetFields()}},computed:{btnText:function(){var e="";return e=0===this.index?this.isLoading?"登录中...":"登录":1===this.index?this.isLoading?"注册中...":"注册":this.isLoading?"提交中...":"重置密码",e}},beforeDestroy:function(){window.removeEventListener("keyup",this.handleListenKeyup)}},m=g,b=(n("bb4c"),n("2877")),h=Object(b["a"])(m,s,a,!1,null,"2d17f47e",null),v=h.exports,w=n("4360"),O=n("6b43");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={data:function(){return{loginTabs:["登录","注册","忘记密码"],currentTabIndex:0,componentName:"login-way"}},created:function(){this.currentTabIndex="login"===this.loginAction?0:1,Object(d["a"])()||(w["a"].commit("login/SET_USER_INFO",void 0),Object(O["d"])())},methods:k({handleMaskClick:function(){this.$emit("maskClick")}},Object(c["d"])({setShowLogin:"login/SET_SHOW_LOGIN"})),computed:k({},Object(c["c"])(["loginAction"])),components:{LoginWay:v}},j=F,x=(n("f762"),Object(b["a"])(j,r,o,!1,null,"774ef6fd",null));t["default"]=x.exports},bb4c:function(e,t,n){"use strict";var r=n("e239"),o=n.n(r);o.a},c24f:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n("a27e");function o(e){return r["a"].post("/api/v2/account/login",e)}function i(e){return r["a"].post("/api/v2/account/register",e)}function s(e){return r["a"].post("/api/v2/account/reset-password",e)}function a(e){return r["a"].post("/api/v2/user/update-account-info",e)}function c(e){return r["a"].post("/api/v2/user/update-base-info",e)}function l(e){return r["a"].post("/api/v2/avatar/upload",e)}function u(e){return r["a"].get("/api/v2/course/user-course",{params:e})}function d(){return r["a"].get("/api/v2/user/learn")}},e239:function(e,t,n){},f0d6:function(e,t,n){},f762:function(e,t,n){"use strict";var r=n("f0d6"),o=n.n(r);o.a}}]);