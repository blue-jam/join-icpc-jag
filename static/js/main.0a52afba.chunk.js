(window["webpackJsonpjoin-icpc-jag"]=window["webpackJsonpjoin-icpc-jag"]||[]).push([[0],{4:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=a(1),i=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),u=i[0],m=i[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),s=b[0],p=b[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),h=f[0],v=f[1],g=Object(n.useState)(""),j=Object(o.a)(g,2),O=j[0],C=j[1],w=Object(n.useState)(""),y=Object(o.a)(w,2),k=y[0],x=y[1],S=Object(n.useState)({problem:!1,staff:!1,affair:!1}),F=Object(o.a)(S,2),I=F[0],J=F[1],P=Object(n.useState)(""),A=Object(o.a)(P,2),G=A[0],B=A[1];return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"\u6c0f\u540d\uff08\u672c\u540d\uff09"),l.a.createElement("input",{type:"text",id:"name",value:a,onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"organization"},"\u6240\u5c5e"),l.a.createElement("input",{type:"text",id:"organization",placeholder:"\u5b66\u6821\u540d\u307e\u305f\u306f\u4f01\u696d\u540d",value:u,onChange:function(e){return m(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"handle"},"\u30cf\u30f3\u30c9\u30eb\u30cd\u30fc\u30e0"),l.a.createElement("input",{type:"text",id:"handle",value:s,onChange:function(e){return p(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"icpc-year"},"ICPC\u306b\u53c2\u52a0\u3057\u305f\u5e74"),l.a.createElement("input",{type:"text",id:"icpc-year",value:h,onChange:function(e){return v(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"icpc-school"},"ICPC\u53c2\u52a0\u6642\u306e\u6240\u5c5e"),l.a.createElement("input",{type:"text",id:"icpc-school",value:O,onChange:function(e){return C(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"icpc-team"},"\u30c1\u30fc\u30e0\u540d"),l.a.createElement("input",{type:"text",id:"icpc-team",value:k,onChange:function(e){return x(e.target.value)}}))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"JAG\u306b\u5165\u3063\u3066\u3084\u308a\u305f\u3044\u3053\u3068"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:I.problem,onChange:function(e){J(Object.assign({},I,{problem:e.target.checked}))}}),"\u554f\u984c\u4f5c\u6210\uff08\u539f\u6848\u3001\u554f\u984c\u6587\u4f5c\u6210\u30fb\u6821\u6b63\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u4f5c\u6210\u3001\u30c6\u30b9\u30bf\u30fc\u306a\u3069\uff09"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:I.staff,onChange:function(e){J(Object.assign({},I,{staff:e.target.checked}))}}),"\u73fe\u5730\u30b9\u30bf\u30c3\u30d5\uff08\u590f\u5408\u5bbf\u3084ICPC\u30a2\u30b8\u30a2\u5730\u533a\u4e88\u9078\uff09"),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:I.affair,onChange:function(e){J(Object.assign({},I,{affair:e.target.checked}))}}),"\u4e8b\u52d9")),l.a.createElement("button",{onClick:function(e){if(e.preventDefault(),a)if(u){var t="\u3053\u3093\u306b\u3061\u306f\n\n";t+="".concat(u,"\u306e").concat(a,"\u3067\u3059\u3002ICPC OBOG\u306e\u4f1a\u3078\u306e\u5165\u4f1a\u3092\u5e0c\u671b\u3057\u307e\u3059\u3002\n"),t+="\u5fc5\u8981\u60c5\u5831\u306f\u4e0b\u8a18\u306e\u3068\u304a\u308a\u3067\u3059\u3002\n\n",t+="\u6c0f\u540d: ".concat(a,"\n"),s&&(t+="\u30cf\u30f3\u30c9\u30eb\u30cd\u30fc\u30e0: ".concat(s,"\n")),(h||O||k)&&(t+="ICPC\u7d4c\u9a13: ",h&&(t+=h&&"".concat(h,"\u5e74\u306b"),t+=O&&"".concat(O,"\u306e"),t+=k&&"".concat(k,"\u3068\u3044\u3046"),(O||k)&&(t+="\u30c1\u30fc\u30e0\u3067"),t+="\u53c2\u52a0\u3057\u307e\u3057\u305f\u3002\n")),t+="JAG\u3067\u62c5\u5f53\u3057\u305f\u3044\u3053\u3068:\n",I.problem&&(t+=" - \u554f\u984c\u4f5c\u6210\n"),I.staff&&(t+=" - \u5408\u5bbf\u30fb\u5927\u4f1a\u306e\u73fe\u5730\u30b9\u30bf\u30c3\u30d5\n"),I.affair&&(t+=" - \u4e8b\u52d9\u4ed5\u4e8b\n"),Object.values(I).every((function(e){return!e}))&&(t+=" - \u30e1\u30fc\u30ea\u30f3\u30b0\u30ea\u30b9\u30c8\u306e\u53d7\u4fe1\u306e\u307f\n"),t+="\n\u4ee5\u4e0a\u3067\u3059\u3002\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3057\u307e\u3059\u3002\n\n",t+="".concat(a),B(t)}else window.alert("\u6240\u5c5e\u306f\u5fc5\u9808\u3067\u3059");else window.alert("\u6c0f\u540d\u306f\u5fc5\u9808\u3067\u3059")}},"\u52a0\u5165\u30e1\u30fc\u30eb\u3092\u751f\u6210")),l.a.createElement("hr",null),l.a.createElement("h2",null,"\u751f\u6210\u7d50\u679c"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("textarea",{id:"email-body",value:G,readOnly:!0,cols:100,rows:18})),l.a.createElement("div",null,l.a.createElement("button",{disabled:!G,onClick:function(e){e.preventDefault();var t=document.querySelector("#email-body");t&&(t.select(),document.execCommand("copy"),window.alert("\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f"))}},"\u30b3\u30d4\u30fc"))))},u=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"JAG\u52a0\u5165\u30e1\u30fc\u30eb\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc"),l.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[4,1,2]]]);
//# sourceMappingURL=main.0a52afba.chunk.js.map