(this["webpackJsonpreact-samyrai"]=this["webpackJsonpreact-samyrai"]||[]).push([[7],{245:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__I6fdL",dialog_item:"Dialogs_dialog_item__17nja",dialog:"Dialogs_dialog__3NhB0",active:"Dialogs_active__33RkJ",messages_item:"Dialogs_messages_item__3ak0s",messages:"Dialogs_messages__3iCs7"}},256:function(e,a,s){"use strict";s.d(a,"a",(function(){return o}));var t=s(3);function i(e,a){if(null==e)return{};var s,t,i=function(e,a){if(null==e)return{};var s,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)s=n[t],a.indexOf(s)>=0||(i[s]=e[s]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)s=n[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}s(0);var n=s(15),r=s(4),c=s(2),l=function(e){return{isAuth:e.authMe.isAuth}};function o(e){return Object(n.b)(l)((function(a){var s=a.isAuth,n=i(a,["isAuth"]);return s?Object(c.jsx)(e,Object(t.a)({},n)):Object(c.jsx)(r.a,{to:"/login"})}))}},342:function(e,a,s){"use strict";s.r(a);var t=s(3),i=s(29),n=s(30),r=s(32),c=s(31),l=s(0),o=s.n(l),u=s(55),d=s(245),g=s.n(d),j=s(10),b=s(2),m=function(e){var a="/dialogs/"+e.id;return Object(b.jsx)("div",{className:g.a.dialog,children:Object(b.jsx)(j.b,{activeClassName:g.a.active,to:a,children:e.name})})},O=function(e){return Object(b.jsx)("div",{className:g.a.messages,children:Object(b.jsx)("span",{children:e.message})})},v=s(241),f=s(336),h=function(e){var a=Object(v.a)({initialValues:{valueMessage:""},validate:function(e){var a={};return e.valueMessage||(a.valueMessage="Required"),a},onSubmit:function(s){s.valueMessage&&e.sendMessage(s.valueMessage),a.resetForm()}}),s=e.dialogsPage.dialogs.map((function(e){return Object(b.jsx)(m,{id:e.id,name:e.name},e.id)})),i=e.dialogsPage.message.map((function(e){return Object(b.jsx)(O,{message:e.message},e.id)}));return Object(b.jsxs)("div",{className:g.a.dialogs,children:[Object(b.jsx)("div",{className:g.a.dialog_item+" "+g.a.active,children:s}),Object(b.jsxs)("div",{className:g.a.messages_item,children:[i,Object(b.jsx)("form",{onSubmit:a.handleSubmit,children:Object(b.jsxs)("div",{children:[Object(b.jsx)(f.a,Object(t.a)({placeholder:"Enter Message"},a.getFieldProps("valueMessage"))),a.errors.valueMessage?Object(b.jsx)("div",{children:Object(b.jsxs)("b",{children:[" ",a.errors.valueMessage]})}):null,Object(b.jsx)("button",{children:"Send"})]})})]})]})},p=s(15),_=s(256),x=function(e){Object(r.a)(s,e);var a=Object(c.a)(s);function s(){return Object(i.a)(this,s),a.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,Object(t.a)(Object(t.a)({},this.props),{},{dialogsPage:this.props.dialogsPage}))})}}]),s}(o.a.Component);a.default=Object(_.a)(Object(p.b)((function(e){return{dialogsPage:e.dialogs}}),{sendMessage:u.b})(x))}}]);
//# sourceMappingURL=7.43c6b952.chunk.js.map