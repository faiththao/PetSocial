(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{12:function(e,t,n){},20:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(13),o=n.n(s),i=(n(20),n(2)),j=(n(12),n(6)),a=n(0);function u(e){var t=e.setUser,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],o=r[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),b=u[0],l=u[1],h=Object(c.useState)(!1),d=Object(i.a)(h,2),O=d[0],p=d[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify({username:s,password:b})}).then((function(e){p(!1),e.ok?e.json().then((function(e){t(e)})):e.json().then((function(e){console.error(e)}))}))},children:[Object(a.jsx)("h2",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:s,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("h2",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",autoComplete:"current-password",value:b,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("button",{variant:"fill",color:"primary",type:"submit",children:O?"Loading...":"Login"})]})}function b(e){var t=e.signup,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],o=r[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),b=u[0],l=u[1],h=Object(c.useState)(""),d=Object(i.a)(h,2),O=d[0],p=d[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({username:s,password:b,password_confirmation:O}),o(""),l(""),p("")},children:[Object(a.jsx)("h2",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{type:"text",id:"username",value:s,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("h2",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",value:b,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("h2",{htmlFor:"password",children:"Confrim Password"}),Object(a.jsx)("input",{type:"password",id:"password_confirmation",value:O,onChange:function(e){return p(e.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Sign Up"})]})}function l(e){var t=e.setUser,n=Object(c.useState)(!0),r=Object(i.a)(n,2),s=r[0],o=r[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login or Sign Up"}),s?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u,{signup:function(e){fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json().then((function(e){t(e)})):e.json().then((function(e){return Promise.reject(e)}))}))},setUser:t}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Don't have an account? \xa0",Object(a.jsx)("button",{color:"secondary",onClick:function(){return o(!1)},children:"Sign Up"})]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{setUser:t}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Already have an account? \xa0",Object(a.jsx)("button",{color:"secondary",onClick:function(){return o(!0)},children:"Log In"})]})]})]})}var h=n(3);function d(e){var t=e.createComment,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],o=r[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({comment:s,likes:0}),o("")},children:[Object(a.jsx)("input",{type:"text",id:"comment",placeholder:"Add comment...",value:s,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("button",{children:"Post"})]})}function O(e){var t=e.post,n=Object(c.useState)([]),r=Object(i.a)(n,2),s=r[0],o=r[1],j=Object(c.useState)(0),u=Object(i.a)(j,2);u[0],u[1];Object(c.useEffect)((function(){fetch("/api/comments").then((function(e){return e.json()})).then((function(e){return o(e)}))}));var b=t.id,l=t.img_url,h=t.caption,O=t.likes;return Object(a.jsxs)("div",{className:"post-card",children:[Object(a.jsx)("strong",{children:"username"}),Object(a.jsx)("img",{src:l,alt:h}),Object(a.jsx)("strong",{children:h}),Object(a.jsx)("button",{children:"\u2764"}),"Likes: ",O,Object(a.jsx)("div",{children:s.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("h3",{children:e.comment}),Object(a.jsx)("button",{children:"\u2764"}),"Likes: ",O]},e.id)})}))}),Object(a.jsx)(d,{createComment:function(e){return fetch("/api/comments",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){o(s.concat(e))}))}})]},b)}function p(e){var t=e.posts.map((function(e){return Object(a.jsx)(O,{post:e},e.id)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Explore Posts"}),Object(a.jsx)("ul",{children:t})]})}function f(e){var t=e.createPost,n=Object(c.useState)(""),r=Object(i.a)(n,2),s=r[0],o=r[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),b=u[0],l=u[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({img_url:s,caption:b,likes:0}),o(""),l("")},children:[Object(a.jsx)("h2",{children:"Create a New Post"}),Object(a.jsx)("input",{type:"text",id:"img",placeholder:"img url...",value:s,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("input",{type:"text",id:"caption",placeholder:"enter caption",value:b,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Post"})]})}function x(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Profile"}),Object(a.jsx)("h3",{children:"Your Posts"})]})}function m(e){var t=e.user,n=e.setUser,r=Object(h.g)(),s=Object(c.useState)([]),o=Object(i.a)(s,2),u=o[0],b=o[1];Object(c.useEffect)((function(){fetch("/api/posts").then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)(j.b,{to:"/explore",children:"Explore"}),Object(a.jsx)(j.b,{to:"/new-post",children:"New Post"}),Object(a.jsx)(j.b,{to:"/profile",children:"Profile"})]}),Object(a.jsxs)("span",{children:["Welcome, ",t.username," ",Object(a.jsx)("button",{onClick:function(){fetch("/api/logout",{method:"DELETE",headers:{Accept:"*/*","Content-type":"application/json"}}).then((function(e){e.ok&&(n(null),r.push("/"))}))},children:"Logout"})]})]}),Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{path:"/explore",children:Object(a.jsx)(p,{posts:u})}),Object(a.jsx)(h.b,{path:"/new-post",children:Object(a.jsx)(f,{createPost:function(e){return fetch("/api/posts",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){b(u.concat(e))}))}})}),Object(a.jsx)(h.b,{path:"/profile",children:Object(a.jsx)(x,{})})]})]})}function g(e){var t=e.setUser;return Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{exact:!0,path:"/",children:Object(a.jsx)(l,{setUser:t})}),Object(a.jsx)(h.b,{exact:!0,path:"/signup",children:Object(a.jsx)(b,{setUser:t})}),Object(a.jsx)(h.a,{to:"/"})]})}var v=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),o=Object(i.a)(s,2),u=o[0],b=o[1];return Object(c.useEffect)((function(){fetch("/api/me",{credentials:"include"}).then((function(e){e.ok?e.json().then((function(e){r(e),b(!0)})):b(!0)}))}),[]),u?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j.a,{children:n?Object(a.jsx)(m,{setUser:r,user:n}):Object(a.jsx)(g,{setUser:r})})}):Object(a.jsx)(l,{onLogin:r})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),S()}},[[30,1,2]]]);
//# sourceMappingURL=main.0decc375.chunk.js.map