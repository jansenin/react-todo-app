(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(15),r=n.n(c),l=(n(24),n(25),n(18)),u=n(12),i=function(e){return o.a.createElement("div",{className:"todo\n         uk-card \n         uk-card-body \n         uk-card-default \n         uk-margin-top \n         uk-margin-right \n         uk-margin-bottom \n         uk-margin-left \n         uk-flex \n         uk-flex-between \n         uk-flex-middle"},o.a.createElement("div",{className:"uk-flex uk-flex-between"},o.a.createElement("span",null,o.a.createElement("input",{type:"checkbox",checked:e.todo.checked,onChange:function(){return e.onCheck(e.todo.id)},className:"uk-checkbox"})),o.a.createElement("pre",{className:"todo-title break-word uk-margin-left",style:{border:"none",padding:"0",margin:"0",whiteSpace:"pre-wrap"}},e.todo.title)),o.a.createElement("div",{className:"uk-margin-left"},o.a.createElement("button",{className:"delete-button uk-icon-button uk-button-primary",onClick:function(){return e.deleteTodo(e.todo.id)}},o.a.createElement("i",{"uk-icon":"icon: close"}))))},d=function(e){return o.a.createElement("div",{className:"uk-text-center p20px"},"You have no todos")},m=function(e){return o.a.createElement("div",{className:"todo-list"},e.todos.length>0?e.todos.map((function(t){return o.a.createElement(i,{todo:t,key:t.id,deleteTodo:e.deleteTodo,onCheck:e.onCheck})})):o.a.createElement(d,null))},s=function(e){return o.a.createElement("div",{className:"input-field p20px"},o.a.createElement("input",{value:e.value,onChange:e.onChange,onKeyDown:e.onKeyDown,className:"uk-input"}))},k=0,f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),d=i[0],f=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{value:d,onChange:function(e){f(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&d.trim()&&(c([].concat(Object(l.a)(n),[{title:d,id:k++,checked:!1}])),f(""))}}),o.a.createElement(m,{todos:n,deleteTodo:function(e){c(n.filter((function(t){return t.id!==e})))},onCheck:function(e){c(n.map((function(t){return t.id===e&&(t.checked=!t.checked),t})))}}))},p=n(7),h=function(e){return o.a.createElement("div",{className:"p20px uk-flex uk-flex-around"},o.a.createElement(p.b,{to:"/1",className:"uk-button-primary uk-button"},"First list"),o.a.createElement(p.b,{to:"/2",className:"uk-button-primary uk-button"},"Second list"),o.a.createElement(p.b,{to:"/3",className:"uk-button-primary uk-button"},"Third list"))},E=n(5),b=function(e){return o.a.createElement("div",{style:{display:e.display?"block":"none"}},e.children)},g=function(){function e(e){return o.a.createElement(E.a,{path:"/:todoListId",render:function(t){return o.a.createElement(b,{display:t.match.params.todoListId===e},o.a.createElement(f,null))}})}return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(h,null),e("1"),e("2"),e("3")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6886847e.chunk.js.map