(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),o=n.n(c),i=(n(12),n(2)),s=n(3),l=n(5),u=n(4),d=n(0),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:this.props.title?this.props.title:"Please leave feedback"}),this.props.children]})}}]),n}(r.Component),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,r=e.bad;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:t,children:"Good"}),Object(d.jsx)("button",{onClick:n,children:"Neutral"}),Object(d.jsx)("button",{onClick:r,children:"Bad"})]})}}]),n}(r.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.props.message?this.props.message:"No information "}}]),n}(r.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Good,n=e.Neutral,r=e.Bad,a=e.total;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Statistics"}),a?Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Good: ",t]}),Object(d.jsxs)("li",{children:["Neutral: ",n]}),Object(d.jsxs)("li",{children:["Bad: ",r]}),Object(d.jsxs)("li",{children:["Total: ",this.props.total]}),Object(d.jsxs)("li",{children:["Positive feedback:"," ",this.props.positivePercentage?this.props.positivePercentage:0,"%"]})]}):Object(d.jsx)(b,{message:"No feedback given"})]})}}]),n}(r.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={Good:0,Neutral:0,Bad:0},e.handleGood=function(){e.setState((function(e){return{Good:e.Good+1}}))},e.handleNeutral=function(){e.setState((function(e){return{Neutral:e.Neutral+1}}))},e.handleBad=function(){e.setState((function(e){return{Bad:e.Bad+1}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.Good,n=e.Neutral,r=e.Bad,a=t+n+r;return Object(d.jsxs)(j,{title:"Please leave feedback",children:[Object(d.jsx)(h,{good:this.handleGood,neutral:this.handleNeutral,bad:this.handleBad}),Object(d.jsx)(p,{Good:t,Neutral:n,Bad:r,total:a,positivePercentage:Math.round(t/a*100)})]})}}]),n}(r.Component);o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a71c7412.chunk.js.map