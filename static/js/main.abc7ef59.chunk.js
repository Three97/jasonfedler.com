(this.webpackJsonpjfcom=this.webpackJsonpjfcom||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"title":"JasonFedler.com","subtitle":"Senior Software Engineer","skills":[{"skill":"C#","site":"","color":"#512bd4","proficiency":75},{"skill":".NET","site":"","color":"#512bd4","proficiency":70},{"skill":"SQL Server","site":"","color":"#0078d4","proficiency":65},{"skill":"EF","site":"","color":"#512bd4","proficiency":65},{"skill":"Git","site":"","color":"#512bd4","proficiency":55},{"skill":"JavaScript","site":"","color":"#ff8d00","proficiency":50},{"skill":"HTML","site":"","color":"#ff8d00","proficiency":75},{"skill":"CSS","site":"","color":"#ff8d00","proficiency":65},{"skill":"Sass","site":"","color":"#bf4080","proficiency":35},{"skill":"React","site":"","color":"#61dafb","proficiency":25},{"skill":"Imposter Syndrome","site":"https://en.wikipedia.org/wiki/Impostor_syndrome","color":"#005236","proficiency":99}],"footer":"","cards":[{"title":"Ramblings","subtitle":"I write about stuff occasionally","links":[{"name":"Nerd Blog","url":"https://blog.jasonfedler.com","tooltip":"Nerd blog"},{"name":"Cycling Blog","url":"https://cycling.jasonfedler.com","tooltip":"Cycling blog"}]},{"title":"Professional Socials","subtitle":"My presence on the interwebs","links":[{"name":"GitHub","url":"https://github.com/Three97","tooltip":"All my sh*t is online"},{"name":"Linked In","url":"https://www.linkedin.com/in/jason-fedler-35b33a8/","tooltip":"21st century resume that I don\'t keep up with near as much as I should"}]},{"title":"Personal Socials","subtitle":"I do other stuff, too","links":[{"name":"Strava","url":"https://www.strava.com/athletes/16406695","tooltip":"Strava is a service that keeps up with athletic activities"},{"name":"Instragram","url":"https://instagram.com/threeninet7","tooltip":"I share photos occasionally"}]}]}')},,,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var c=i(1),l=i.n(c),s=i(4),r=i.n(s),n=(i(9),i(10),i(2)),o=i(0),a=function(e){var t=e.title,i=e.subtitle;return Object(o.jsx)("header",{role:"banner",children:Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsx)("h1",{className:"text-center fs-1 text-monospace",children:t}),Object(o.jsx)("h2",{className:"text-center fs-5 text-monospace",children:i})]})})},d=function(e){var t=e.skill,i=e.site,c=e.proficiency,l=e.color,s={height:"1.5rem",width:c.toString()+"%",backgroundColor:l};return Object(o.jsxs)("div",{className:"row mb-1",children:[Object(o.jsx)("div",{className:"col-md-4 text-end code",children:Object(o.jsx)("a",{href:i,children:t})}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("div",{className:"bg-light w-100",children:Object(o.jsx)("div",{className:"text-start proficiency",style:s,children:Object(o.jsxs)("div",{className:"ms-1 text-white",children:[c,"%"]})})})})]})},j=function(e){var t=e.props;return Object(o.jsxs)("div",{className:"container mb-5",children:[Object(o.jsxs)("div",{className:"row mb-1",children:[Object(o.jsx)("div",{className:"col-md-4 text-end fw-bold",children:"Skill"}),Object(o.jsx)("div",{className:"col-md-6 text-start fw-bold",children:"Proficiency"})]}),t.map((function(e,t){return Object(o.jsx)(d,{site:e.site,skill:e.skill,proficiency:e.proficiency,color:e.color},++t)}))]})},h=function(e){var t=e.name,i=e.url,c=e.tooltip;return Object(o.jsx)("div",{className:"mb-2",children:Object(o.jsxs)("a",{href:i,rel:"noreferrer",target:"_blank",title:c,children:[t,Object(o.jsx)("span",{role:"img","aria-label":"follow",children:Object(o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",focusable:"false",role:"presentation",children:Object(o.jsxs)("g",{fill:"currentColor",fillRule:"evenodd",children:[Object(o.jsx)("path",{d:"M11.031 7A1.03 1.03 0 0 0 10 8.036a1.05 1.05 0 0 0 1.044 1.045l3.121.014.014 3.121a1.05 1.05 0 0 0 1.045 1.044 1.03 1.03 0 0 0 1.036-1.035l-.019-4.161a1.053 1.053 0 0 0-1.045-1.045L11.035 7h-.004z"}),Object(o.jsx)("path",{d:"M13.364 8.292l-7.072 7.071a1.002 1.002 0 0 0 0 1.415c.39.39 1.024.39 1.415 0l7.071-7.071A1.002 1.002 0 0 0 14.071 8a1 1 0 0 0-.707.292z"})]})})})]})})},b=function(e){var t=e.title,i=e.subtitle,c=e.links;return Object(o.jsxs)("div",{className:"card card-equal-height p-5 bg-highlight-muted",children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("em",{children:i})}),c.map((function(e,t){return Object(o.jsx)(h,{name:e.name,url:e.url,tooltip:e.tooltip},++t)}))]})},m=function(e){var t=e.props,i="";return 1===t.length?i="col-sm-12 mb-2 text-center":2===t.length?i="col-lg-6 col-sm-12 mb-2 text-center":3===t.length&&(i="col-lg-4 col-md-6 col-sm-12 mb-2 text-center"),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(o.jsx)("div",{className:i,children:Object(o.jsx)(b,{title:e.title,subtitle:e.subtitle,links:e.links},++t)},++t)}))})})},u=function(){var e=(new Date).getFullYear(),t=2021===e?"2021":"2021 - ".concat(e);return Object(o.jsx)("footer",{className:"mt-5 p-3 text-center fg-highlight3",role:"contentinfo",children:Object(o.jsx)("div",{className:"mt-3",children:Object(o.jsxs)("em",{children:["(c) ",t," Copyright JasonFedler.com"]})})})};var f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a,{title:n.title,subtitle:n.subtitle}),Object(o.jsx)(j,{props:n.skills}),Object(o.jsx)(m,{props:n.cards}),Object(o.jsx)(u,{})]})},p=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(t){var i=t.getCLS,c=t.getFID,l=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),l(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),p(console.log)}],[[12,1,2]]]);
//# sourceMappingURL=main.abc7ef59.chunk.js.map