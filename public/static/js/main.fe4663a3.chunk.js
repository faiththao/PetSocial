(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(18),o=n.n(r),i=(n(27),n(3)),a=(n(17),n(6)),j=n(0);function u(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),l=u[0],b=u[1],d=Object(c.useState)(!1),h=Object(i.a)(d,2),p=h[0],O=h[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(!0),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify({username:r,password:l})}).then((function(e){O(!1),e.ok?e.json().then((function(e){t(e)})):e.json().then((function(e){console.error(e)}))}))},className:"login",children:[Object(j.jsx)("h2",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:r,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("h2",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",autoComplete:"current-password",value:l,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("button",{variant:"fill",color:"primary",type:"submit",children:p?"Loading...":"Login"})]})}function l(e){var t=e.signup,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),l=u[0],b=u[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),p=h[0],O=h[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({username:r,password:l,password_confirmation:p})},className:"signup",children:[Object(j.jsx)("h2",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",id:"username",value:r,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("h2",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",value:l,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("h2",{htmlFor:"password",children:"Confrim Password"}),Object(j.jsx)("input",{type:"password",id:"password_confirmation",value:p,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Sign Up"})]})}function b(e){var t=e.setUser,n=Object(c.useState)(!0),s=Object(i.a)(n,2),r=s[0],o=s[1],a=function(e){fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json().then((function(n){t(n),console.log(e)})):e.json().then((function(e){return Promise.reject(e)}))}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"\ud83d\udd78Login or Sign Up\ud83d\udd78"}),r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{signup:a,setUser:t}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["Don't have an account? \xa0",Object(j.jsx)("button",{color:"secondary",onClick:function(){return o(!1)},children:"Sign Up"})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{setUser:t,signup:a}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["Already have an account? \xa0",Object(j.jsx)("button",{color:"secondary",onClick:function(){return o(!0)},children:"Log In"})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{classname:"login-page",children:" Happy Halloween \ud83d\udc7b "}),Object(j.jsx)("img",{src:"https://www.multivu.com/players/English/8946051-petsmart-halloween-costume-collection/image/PetsinCostumes_1630521797367-HR.jpg",alt:"spooky pets"})]})}var d=n(2);function h(e){var t=e.createComment,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({comment:r,likes:0}),o("")},children:[Object(j.jsx)("input",{type:"text",id:"comment",placeholder:"Add comment...",value:r,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("button",{children:"Post"})]})}function p(e){var t=e.o_comment,n=t.id,c=t.comment,s=t.likes;return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:Object(j.jsxs)("p",{children:[c," Likes: ",s," ",Object(j.jsx)("button",{children:"\u2764"})]})},n)})}function O(e){var t=e.post,n=e.updateLikes,c=e.comments,s=e.createComment,r=t.id,o=t.user,i=t.img_url,a=t.caption,u=t.likes;return Object(j.jsxs)("div",{className:"post-card",children:[Object(j.jsx)("strong",{className:"post-user",children:o.username}),Object(j.jsx)("button",{className:"delete-button",children:"X"}),Object(j.jsx)("img",{src:i,alt:a}),Object(j.jsxs)("div",{className:"post-container",children:[Object(j.jsxs)("strong",{className:"caption",children:[o.username,": ",a]}),Object(j.jsxs)("p",{children:["Likes: ",u," ",Object(j.jsx)("button",{onClick:function(){return n(r)},children:"\u2764"})]})]}),Object(j.jsx)("div",{className:"comments-container",children:c.map((function(e){return Object(j.jsx)(p,{o_comment:e},e.id)}))}),Object(j.jsx)(h,{createComment:s})]},r)}function m(e){var t=e.posts,n=(e.handleDelete,e.comments),c=e.createComment,s=t.map((function(e){return Object(j.jsx)(O,{post:e,comments:n,createComment:c},e.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Explore Posts"}),Object(j.jsx)("ul",{children:s})]})}function x(e){var t=e.createPost,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),l=u[0],b=u[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({img_url:r,caption:l,likes:0}),o(""),b("")},children:[Object(j.jsx)("h2",{children:"Create a New Post"}),Object(j.jsx)("input",{type:"text",id:"img",placeholder:"img url...",value:r,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("input",{type:"text",id:"caption",placeholder:"enter caption",value:l,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Post"})]})}function f(e){var t=e.user;e.posts;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Profile"}),Object(j.jsx)("h2",{className:"username",children:t.username}),Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:"Your Posts"})})]})}var g,v,y,C=n(9),S=n(10),w=S.a.nav(g||(g=Object(C.a)(["\n    height: 50px;\n    display: flex;\n    justify-content: space-between;\n    padding-right:0.5rem calc((100vw - 700px) / 2);\n    z-index: 10;\n    // border: solid;\n    width: 100%;\n"]))),P=Object(S.a)(a.b)(v||(v=Object(C.a)(["\n    display: inline-flex;\n    align-items: left;\n    text-decoration: none;\n    // padding: 0 1rem;\n    padding-right: 10px;\n    height: 100%\n    cursor: pointer;\n    font-size: 20px;\n    &.active {\n        color: #000;\n    }\n"])));S.a.div(y||(y=Object(C.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n"])));function k(e){var t=e.user,n=e.handleLogoutClick;return Object(j.jsxs)(w,{children:[Object(j.jsx)(P,{calssname:"logo-nav",to:"/",children:"\ud83d\udc3e Pet Social"}),Object(j.jsxs)("menubar",{children:[Object(j.jsx)(P,{to:"/explore",children:"Explore"}),Object(j.jsx)(P,{to:"/profile",children:"Profile"}),Object(j.jsx)(P,{to:"/new-post",children:"New Post"}),"Welcome, ",t.username,Object(j.jsx)("button",{onClick:function(){return n()},children:"Logout"})]})]})}function N(e){var t=e.user,n=e.setUser,s=(Object(d.g)(),Object(c.useState)([])),r=Object(i.a)(s,2),o=r[0],a=r[1],u=Object(c.useState)([]),l=Object(i.a)(u,2),b=l[0],h=l[1];Object(c.useEffect)((function(){fetch("/api/posts").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);Object(c.useEffect)((function(){fetch("/api/comments").then((function(e){return e.json()})).then((function(e){return h(e)}))}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{children:Object(j.jsx)(k,{user:t,handleLogoutClick:function(){fetch("/api/logout",{method:"DELETE",headers:{Accept:"*/*","Content-type":"application/json"}}).then((function(e){e.ok&&n(null)}))}})}),Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/explore",children:Object(j.jsx)(m,{posts:o,updateLikes:function(e){fetch("/api/posts",{method:"PATCH",headers:{Accept:"*/*","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log(e)}))},comments:b,createComment:function(e){return fetch("/api/comments",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){h(b.concat(e))}))}})}),Object(j.jsx)(d.b,{path:"/new-post",children:Object(j.jsx)(x,{createPost:function(e){return fetch("/api/posts",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){a(o.concat(e))}))}})}),Object(j.jsx)(d.b,{path:"/profile",children:Object(j.jsx)(f,{user:t,posts:o})})]})]})}function L(e){var t=e.setUser;return Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{exact:!0,path:"/",children:Object(j.jsx)(b,{setUser:t})}),Object(j.jsx)(d.b,{exact:!0,path:"/signup",children:Object(j.jsx)(l,{setUser:t})}),Object(j.jsx)(d.a,{to:"/"})]})}var U=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),u=o[0],l=o[1];return Object(c.useEffect)((function(){fetch("/api/me",{credentials:"include"}).then((function(e){e.ok?e.json().then((function(e){s(e),l(!0)})):l(!0)}))}),[]),u?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(a.a,{children:n?Object(j.jsx)(N,{setUser:s,user:n}):Object(j.jsx)(L,{setUser:s})})}):Object(j.jsx)(b,{onLogin:s})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root")),T()}},[[39,1,2]]]);
//# sourceMappingURL=main.fe4663a3.chunk.js.map