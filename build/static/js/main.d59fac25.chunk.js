(this["webpackJsonptable2site-page"]=this["webpackJsonptable2site-page"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(6),o=a.n(r),s=(a(39),a(40),a(41),a(7)),c=a(8),l=a(10),d=a(9),m=(i.Component,a(33)),u=a(12),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.e,{md:"4",style:h,key:this.props.CardInfo.key},n.a.createElement(u.c,{className:"card-image",style:{backgroundImage:"url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",height:"auto"}},n.a.createElement("div",{className:"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"},n.a.createElement("div",null,n.a.createElement("h5",{className:"pink-text"},n.a.createElement(u.f,{icon:"chart-pie"})," ",this.props.CardInfo.key),n.a.createElement(u.d,{tag:"h3",className:"pt-2"},n.a.createElement("strong",null,this.props.CardInfo.title)),n.a.createElement("p",null,this.props.CardInfo.description))))))}}]),a}(i.Component),h={padding:"20px"},b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).createLiItem=function(){for(var e=[],t=0;t<i.state.buttonName.length;t++)e.push(n.a.createElement("li",{type:"button",className:"filter__item",style:f,key:i.state.buttonName[t],dataTag:i.state.buttonName[t],onCLick:i.updateSearch(i.dataTag)},i.state.buttonName[t]));return e},i.state={buttonName:["Safety","HealthData","Science","News","COVID19","Virus","Doctors"],buttonNewNames:[]},i}return Object(c.a)(a,[{key:"updateSearch",value:function(e){var t=this.state.buttonName.filter((function(t){return t===e.target.dataTag}));this.setState({buttonName:Object(m.a)(t)}),this.props.onChange(e.target.dataTag)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("a",{name:"list"}),n.a.createElement("h2",{className:"section__title text-center",style:g},"The List"),n.a.createElement("div",{className:"text-center"},n.a.createElement("ul",{className:"filters list-unstyled list-inline"},this.createLiItem())),n.a.createElement(u.j,null,n.a.createElement(p,{CardInfo:{key:"Safety",title:"This is a card Title",description:"This is a brief description of what the article is about"}}),n.a.createElement(p,{CardInfo:{key:"HealthData",title:"This is a card Title",description:"This is a brief description of what the article is about"}}),n.a.createElement(p,{CardInfo:{key:"Science",title:"This is a card Title",description:"This is a brief description of what the article is about"}}),n.a.createElement(p,{CardInfo:{key:"News",title:"This is a card Title",description:"This is a brief description of what the article is about"}}),n.a.createElement(p,{CardInfo:{key:"COVID19",title:"This is a card Title",description:"This is a brief description of what the article is about"}}),n.a.createElement(p,{CardInfo:{key:"Virus",title:"This is a card Title",description:"This is a brief description of what the article is about"}}),n.a.createElement(p,{CardInfo:{key:"Doctors",title:"This is a card Title",description:"This is a brief description of what the article is about"}})))}}]),a}(i.Component),g={fontSize:"2.145em",lineHeight:"1.3",fontWeight:"bold",padding:"70px 0 0 0"},f={display:"inline-block",margin:"10px",padding:"7px 14px",lineHeight:"1",borderRadius:"50px",cursor:"pointer",minWidth:"55px",background:"0 0",textAlign:"center",border:"2px solid #362c2c"},y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:E},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"container-inner",style:x},n.a.createElement("div",{className:"banner-inner",style:k},n.a.createElement("div",{className:"row",style:v},n.a.createElement("div",{className:"column banner-content",style:w},n.a.createElement("h1",{style:N},"Digital Nomad Cities"),n.a.createElement("p",null),n.a.createElement("p",null,"The best cities for digital nomads in one handy list."),n.a.createElement("div",{className:"banner__cta",style:T},n.a.createElement("a",{className:"button",target:"_self",href:"#list",style:C},"View the list"))))))))}}]),a}(i.Component),E={backgroundImage:"url(https://www.storyme.com/hs-fs/hubfs/StoryMe_2017/Image/background_header-01.png?t=1537799461843&width=1920&name=background_header-01.png)",backgroundPosition:"bottom center",backgroundSize:"cover",position:"relative",padding:"60px 0"},x={position:"relative",margin:"0 auto",width:"90%",maxWidth:"1120px",color:"black"},k={padding:"100px 0",boxSizing:"border-box"},v={display:"flex"},w={position:"relative",zIndex:"2",textAlign:"center",width:"100%",maxWidth:"950px",margin:"0 auto",boxSizing:"border-box",padding:"60px 0"},N={fontSize:"2.75em",lineHeight:"1.3",fontWeight:"bold"},T={PaddingTop:"25px"},C={color:"white",background:"#362c2c",padding:".87em 1.7em",borderRadius:"4px",textDecoration:"none",boxSizing:"border-box",transition:"transform .4s cubic-bezier(.374,.019,.035,1.861),-webkit-transform .3s cubic-bezier(.374,.019,.035,1.861)",display:"inline-block",border:"none",cursor:"pointer",outline:"0"};var I=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(y,null),n.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.d59fac25.chunk.js.map