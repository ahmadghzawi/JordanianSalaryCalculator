(this["webpackJsonpjordanian-salary-calculator"]=this["webpackJsonpjordanian-salary-calculator"]||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),c=t.n(r),m=(t(16),t(6)),o=t(2),s=t(1),i=t.n(s),u=t(3),d=t(7),h=t(8),f=t(10),E=t(9),y=(t(18),function(e){Object(f.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={calculating:!1,amount:"",annualSalary:"",netAnnualSalary:"",monthlySalary:"",netMonthlySalary:"",totalTax:"",monthlyTax:"",totalSS:"",monthlySS:"",msg:"",exemption:{person:!0,family:!1},socialSecurity:{none:!0,.075:!1,.1425:!1,.2175:!1},taxCategoryAmounts:[0,250,750,1500,2500,3750,247500]},e.calculateWithTaxIncluded=function(a,t){var n=e.state,l=n.exemption,r=n.taxCategoryAmounts,c=a/12,m=0,o=0,s=0,i=0,u=a-m,d=u/12,h=0,f=0,E=0;return(a>9e3&&l.person||a>18e3&&l.family)&&(a>1009e3&&l.person||a>1018e3&&l.family?(E=a-(l.person?1009e3:1018e3),m+=r[6]+.3*E):((f=l.person?a-9e3:a-18e3)>25e3?(h=5,m+=.25*(f-25e3)):m+=f%5e3*(.05*((h=Math.floor(f/5e3))+1)),m+=r[h]),o=m/12,d=(u=a-m)/12),"none"!==t&&(i=(s=(a>39936?39936:a)*+t)/12,c=a/12,d=(u-=s)/12),{annualSalary:a,netAnnualSalary:u,monthlySalary:c,netMonthlySalary:d,totalTax:m,monthlyTax:o,totalSS:s,monthlySS:i}},e.calculateWithTaxExcluded=function(){var a=Object(u.a)(i.a.mark((function a(t,n){var l,r,c,m,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l=e.state.exemption,!(t<=9e3&&l.person||t<=18e3&&l.family)){a.next=5;break}return a.abrupt("return",e.calculateWithTaxIncluded(+t,n));case 5:r=1.5*t,c=1e3,m=1e-5,o=0;case 9:if((o=e.calculateWithTaxIncluded(r,n).netAnnualSalary-t)<0?(r+=c,r-=c/=10):r-=c,!(o<-m&&c===m)){a.next=14;break}return a.abrupt("break",16);case 14:a.next=9;break;case 16:return a.abrupt("return",e.calculateWithTaxIncluded(r+m,n));case 17:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e.roundToThreeDecimals=function(e){var a=Math.pow(10,3);return e=parseFloat((e*a).toFixed(11)),+(Math.round(e)/a).toFixed(3)},e.toggleExemption=function(a){var t=e.state.exemption;(t={person:!1,family:!1})[a]=!0,e.setState({exemption:t})},e.selectSocialSecurity=function(a){var t=e.state.socialSecurity;(t={none:!1,.075:!1,.1425:!1,.2175:!1})[a]=!0,e.setState({socialSecurity:t})},e.onChange=function(a){var t,n=a.name,l=a.value;return e.setState((t={},Object(o.a)(t,n,l),Object(o.a)(t,"msg",""),t))},e.onSubmit=function(){var a=Object(u.a)(i.a.mark((function a(t){var n,l,r,c,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=e.state,l=n.amount,r=n.socialSecurity,c=Object.entries(r).filter((function(e){return e[1]}))[0][0],!(l>1e10)){a.next=5;break}return e.setState({msg:"amount must not exceed 10 billion JOD! That is too much for one person per year."}),a.abrupt("return");case 5:return e.setState({calculating:!0}),a.next=8,setTimeout(Object(u.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("included"!==t){a.next=6;break}return a.next=3,e.calculateWithTaxIncluded(+l,c);case 3:o=a.sent,a.next=9;break;case 6:return a.next=8,e.calculateWithTaxExcluded(+l,c);case 8:o=a.sent;case 9:e.setState(Object(m.a)({calculating:!1},o));case 10:case"end":return a.stop()}}),a)}))),100);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.state,a=e.calculating,t=e.amount,n=e.annualSalary,r=e.netAnnualSalary,c=e.monthlySalary,m=e.netMonthlySalary,o=e.totalTax,s=e.monthlyTax,i=e.totalSS,u=e.monthlySS,d=e.exemption,h=e.socialSecurity,f=e.msg,E=this.onChange,y=this.onSubmit,p=this.roundToThreeDecimals,b=this.toggleExemption,N=this.selectSocialSecurity;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container mt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 "},l.a.createElement("hr",null),l.a.createElement("h4",{className:"text-center"},"Jordanian Salary Calculator"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-10 mt-1"},l.a.createElement("div",{className:"row m-0"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"row m-0 d-flex justify-content-around flex-nowrap"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"border-bottom"},"Income Tax Exemption"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"exemption",id:"person",value:"person",checked:d.person,onChange:function(){return b("person")}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"family"},"Person"),l.a.createElement("p",{className:"m-0"},l.a.createElement("small",{className:"text-muted"},"(9,000 JOD)"))),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"exemption",id:"family",value:"family",checked:d.family,onChange:function(){return b("family")}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"family"},"Family"),l.a.createElement("p",{className:"m-0"},l.a.createElement("small",{className:"text-muted"},"(18,000 JOD)")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"border-bottom"},"Social Security Deduction"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"socialSecurity",id:"none",value:"none",checked:h.none,onChange:function(){return N("none")}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"family"},"None")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"socialSecurity",id:"0.075",value:"0.075",checked:h[.075],onChange:function(){return N("0.075")}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"family"},"7.5%")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"socialSecurity",id:"0.1425",value:"0.1425",checked:h[.1425],onChange:function(){return N("0.1425")}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"family"},"14.25%")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"socialSecurity",id:"0.2175",value:"0.2175",checked:h[.2175],onChange:function(){return N("0.2175")}}),l.a.createElement("label",{className:"form-check-label",htmlFor:"family"},"21.75%")))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"form-group mb-0"},l.a.createElement("label",{htmlFor:"amount"},"Amount"),l.a.createElement("input",{id:"amount",type:"number",className:"form-control",name:"amount",placeholder:"Annual Salary in JOD",value:t,onChange:function(e){return E(e.target)}}),l.a.createElement("small",{className:"text-danger",style:{visibility:f?"visible":"hidden"}},l.a.createElement("ul",null,l.a.createElement("li",null,f||"msg")))))),l.a.createElement("div",{className:"row m-0 d-flex justify-content-around flex-column flex-md-row"},l.a.createElement("div",{className:"text-center m-0"},l.a.createElement("button",{className:"btn mt-3",disabled:!t,onClick:function(){return y("included")}},"Calculate, Deductions Included")),l.a.createElement("div",{className:"text-center m-0"},l.a.createElement("button",{className:"btn mt-3",disabled:!t,onClick:function(){return y("excluded")}},"Calculate, Deductions Excluded"))),l.a.createElement("div",{className:"row d-flex justify-content-center mt-2",style:{visibility:a?"visible":"hidden"}},l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Calculating..."))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-10"},l.a.createElement("hr",null),l.a.createElement("div",{className:"row d-flex justify-content-around flex-column flex-lg-row"},l.a.createElement("div",{className:"mt-2"},l.a.createElement("div",{className:" text-center"},l.a.createElement("label",{className:"border-bottom"},"Salaries")),l.a.createElement("pre",{className:"m-1"},l.a.createElement("b",null,"Basic Annual Salary: "),new Intl.NumberFormat("ja-JP").format(p(n))),l.a.createElement("pre",{className:"m-1 mb-3"},l.a.createElement("b",null,"Net Annual Salary: "),new Intl.NumberFormat("ja-JP").format(p(r))),l.a.createElement("pre",{className:"m-1"},l.a.createElement("b",null,"Basic Monthly Salary: "),new Intl.NumberFormat("ja-JP").format(p(c))),l.a.createElement("pre",{className:"m-1"},l.a.createElement("b",null,"Net Monthly Salary: "),new Intl.NumberFormat("ja-JP").format(p(m)))),l.a.createElement("div",{className:"mt-2"},l.a.createElement("div",{className:" text-center"},l.a.createElement("label",{className:"border-bottom"},"Deductions")),l.a.createElement("pre",{className:"m-1"},l.a.createElement("b",null,"Total Income Tax: "),new Intl.NumberFormat("ja-JP").format(p(o))),l.a.createElement("pre",{className:"m-1 mb-3"},l.a.createElement("b",null,"Monthly Income Tax: "),new Intl.NumberFormat("ja-JP").format(p(s))),l.a.createElement("pre",{className:"m-1"},l.a.createElement("b",null,"Total Social Security: "),new Intl.NumberFormat("ja-JP").format(p(i))),l.a.createElement("pre",{className:"m-1"},l.a.createElement("b",null,"Monthly Social Security: "),new Intl.NumberFormat("ja-JP").format(p(u))))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"invisible",style:{fontSize:"10px"}},"margin")),l.a.createElement("div",{className:"mt-5"},l.a.createElement("footer",{className:"page-footer font-small"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"py-3 float-right"},"Developed by:",l.a.createElement("a",{href:"https://www.linkedin.com/in/ahmad-ghzawi-827082139/",target:"_blank",rel:"noopener noreferrer",className:"text-white"}," ","Ahmad Al-Ghzawi"))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.35a7f8c9.chunk.js.map