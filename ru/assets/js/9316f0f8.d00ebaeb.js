"use strict";(self.webpackChunkdoc_server=self.webpackChunkdoc_server||[]).push([[6542],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1683:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:6,title:"users"},u="\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",l={unversionedId:"documentation/server/routes/users",id:"documentation/server/routes/users",isDocsHomePage:!1,title:"users",description:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u043e\u0443\u0442\u0435\u0440 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438",source:"@site/docs/documentation/server/routes/users.md",sourceDirName:"documentation/server/routes",slug:"/documentation/server/routes/users",permalink:"/ru/docs/documentation/server/routes/users",editUrl:"https://github.com/EcoTrain/newmed_docs/tree/master/docs/docs/documentation/server/routes/users.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"users"},sidebar:"documentation",previous:{title:"chats",permalink:"/ru/docs/documentation/server/routes/chats"}},p=[{value:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",id:"\u043f\u043e\u0438\u0441\u043a-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",children:[],level:2},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u043e\u0443\u0442\u0435\u0440 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438 ",(0,a.kt)("strong",{parentName:"p"},"\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432")," \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"),(0,a.kt)("h2",{id:"\u043f\u043e\u0438\u0441\u043a-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,a.kt)("p",null,"URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/users/find")),(0,a.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u0411\u0414.",(0,a.kt)("br",{parentName:"p"}),"\n","\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u043f\u043e\u043b\u044f\u043c: ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"personal.FirstName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"personal.MiddleName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"personal.LastName"),"\n\u0412 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u0443\u044e \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u0441\u0435 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0437 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044f\u0445."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] request body"',title:'"[POST]',request:!0,'body"':!0},'{ "value": "<find_text_string>" }\n\n// \u0412\u043e \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0439\n// \u0411\u043e\u043b\u0435\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u0432\u044b\u0431\u043e\u0440\u043a\u0443\nex: { "value": "vulf33 \u0438\u043b\u044c\u044f \u043a\u0440\u0438\u043a\u0443\u043d\u043e\u0432" }\nex: { "value": "vulf \u0438\u043b \u043a\u0440\u0438" }\n')),(0,a.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u043f\u043e\u0438\u0441\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u0411\u0414 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0446\u0435\u043b\u0438\u043a\u043e\u043c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] response body"',title:'"[POST]',response:!0,'body"':!0},'{\n  "obj_field": "<value>",\n  ...\n  "obj_field": "<value>"\n}\n')),(0,a.kt)("h2",{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),(0,a.kt)("p",null,"URL: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/users/delete")),(0,a.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0437 \u0411\u0414.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u0435\u0442\u044c ",(0,a.kt)("strong",{parentName:"p"},"\u043f\u0440\u0430\u0432\u0430 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] request body"',title:'"[POST]',request:!0,'body"':!0},'{ "email": "<string>" }\n')),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f ",(0,a.kt)("strong",{parentName:"p"},"\u0441\u0432\u043e\u0435\u0433\u043e")," \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0414\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f ",(0,a.kt)("strong",{parentName:"p"},"\u0447\u0443\u0436\u043e\u0433\u043e")," \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u043c\u0435\u0442 \u043f\u0440\u0430\u0432\u0430 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 (role = 0)"))}d.isMDXComponent=!0}}]);