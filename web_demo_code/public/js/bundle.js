!function(){"use strict";function n(){}function v(n){return n()}function t(){return Object.create(null)}function e(n){n.forEach(v)}function o(n){return"function"==typeof n}function i(n,v){return n!=n?v==v:n!==v||n&&"object"==typeof n||"function"==typeof n}function r(n,v){n.appendChild(v)}function c(n,v,t){n.insertBefore(v,t||null)}function l(n){n.parentNode.removeChild(n)}function s(n,v){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(v)}function a(n){return document.createElement(n)}function u(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function d(n){return document.createTextNode(n)}function p(){return d(" ")}function f(n,v,t){null==t?n.removeAttribute(v):n.getAttribute(v)!==t&&n.setAttribute(v,t)}function g(n,v,t,e){n.style.setProperty(v,t,e?"important":"")}function h(n){const v={};for(const t of n)v[t.name]=t.value;return v}let m;function $(n){m=n}const x=[],b=[],y=[],_=[],w=Promise.resolve();let k=!1;function E(n){y.push(n)}let A=!1;const j=new Set;function C(){if(!A){A=!0;do{for(let n=0;n<x.length;n+=1){const v=x[n];$(v),M(v.$$)}for($(null),x.length=0;b.length;)b.pop()();for(let n=0;n<y.length;n+=1){const v=y[n];j.has(v)||(j.add(v),v())}y.length=0}while(x.length);for(;_.length;)_.pop()();k=!1,A=!1,j.clear()}}function M(n){if(null!==n.fragment){n.update(),e(n.before_update);const v=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,v),n.after_update.forEach(E)}}const L=new Set;function N(n,v){-1===n.$$.dirty[0]&&(x.push(n),k||(k=!0,w.then(C)),n.$$.dirty.fill(0)),n.$$.dirty[v/31|0]|=1<<v%31}function T(i,r,c,s,a,u,d=[-1]){const p=m;$(i);const f=i.$$={fragment:null,ctx:null,props:u,update:n,not_equal:a,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:r.context||[]),callbacks:t(),dirty:d,skip_bound:!1};let g=!1;if(f.ctx=c?c(i,r.props||{},((n,v,...t)=>{const e=t.length?t[0]:v;return f.ctx&&a(f.ctx[n],f.ctx[n]=e)&&(!f.skip_bound&&f.bound[n]&&f.bound[n](e),g&&N(i,n)),v})):[],f.update(),g=!0,e(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const n=function(n){return Array.from(n.childNodes)}(r.target);f.fragment&&f.fragment.l(n),n.forEach(l)}else f.fragment&&f.fragment.c();r.intro&&((h=i.$$.fragment)&&h.i&&(L.delete(h),h.i(x))),function(n,t,i,r){const{fragment:c,on_mount:l,on_destroy:s,after_update:a}=n.$$;c&&c.m(t,i),r||E((()=>{const t=l.map(v).filter(o);s?s.push(...t):e(t),n.$$.on_mount=[]})),a.forEach(E)}(i,r.target,r.anchor,r.customElement),C()}var h,x;$(p)}let S;function B(n,v,t){const e=n.slice();return e[9]=v[t],e[11]=t,e}function H(n,v,t){const e=n.slice();return e[12]=v[t],e}function O(n,v,t){const e=n.slice();return e[15]=v[t],e}function z(n){let v,t,e,o,i,r;function s(){return n[7](n[12],n[15])}return{c(){v=u("rect"),f(v,"x",t=n[12]),f(v,"y",e=n[15]),f(v,"width","1"),f(v,"height","1"),f(v,"class",o=n[12]==n[1][0]&&n[15]==n[1][1]?"selected":"unselected")},m(n,t){var e,o,l,a;c(n,v,t),i||(o="mouseover",l=s,(e=v).addEventListener(o,l,a),r=()=>e.removeEventListener(o,l,a),i=!0)},p(i,r){n=i,16&r&&t!==(t=n[12])&&f(v,"x",t),32&r&&e!==(e=n[15])&&f(v,"y",e),50&r&&o!==(o=n[12]==n[1][0]&&n[15]==n[1][1]?"selected":"unselected")&&f(v,"class",o)},d(n){n&&l(v),i=!1,r()}}}function P(n){let v,t=n[5],e=[];for(let v=0;v<t.length;v+=1)e[v]=z(O(n,t,v));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();v=d("")},m(n,t){for(let v=0;v<e.length;v+=1)e[v].m(n,t);c(n,v,t)},p(n,o){if(50&o){let i;for(t=n[5],i=0;i<t.length;i+=1){const r=O(n,t,i);e[i]?e[i].p(r,o):(e[i]=z(r),e[i].c(),e[i].m(v.parentNode,v))}for(;i<e.length;i+=1)e[i].d(1);e.length=t.length}},d(n){s(e,n),n&&l(v)}}}function R(n){let v,t,e,o,i,s,u,h,m=n[9].n+"";return{c(){v=a("div"),t=a("div"),e=p(),o=a("div"),i=p(),s=a("div"),u=d(m),h=p(),f(t,"class","sprite"),g(t,"background-image","url("+D+")"),g(t,"width",F+"px"),g(t,"height",F+"px"),g(t,"background-position","-"+F*(n[9].n%G)+"px -"+F*Math.floor(n[9].n/G)+"px"),g(t,"--info",n[9].n),f(o,"class","value"),g(o,"height",F*n[9].v/2+"px"),f(s,"class","dict-text"),f(v,"class","entry")},m(n,l){c(n,v,l),r(v,t),r(v,e),r(v,o),r(v,i),r(v,s),r(s,u),r(v,h)},p(n,v){8&v&&g(t,"background-position","-"+F*(n[9].n%G)+"px -"+F*Math.floor(n[9].n/G)+"px"),8&v&&g(t,"--info",n[9].n),8&v&&g(o,"height",F*n[9].v/2+"px"),8&v&&m!==(m=n[9].n+"")&&function(n,v){v=""+v,n.wholeText!==v&&(n.data=v)}(u,m)},d(n){n&&l(v)}}}function q(v){let t,e,o,i,d,h,m,$,x=v[4],b=[];for(let n=0;n<x.length;n+=1)b[n]=P(H(v,x,n));let y=v[3],_=[];for(let n=0;n<y.length;n+=1)_[n]=R(B(v,y,n));return{c(){t=a("div"),e=a("div"),o=a("div"),i=p(),d=u("svg");for(let n=0;n<b.length;n+=1)b[n].c();m=p(),$=a("div");for(let n=0;n<_.length;n+=1)_[n].c();this.c=n,f(o,"class","image"),g(o,"background-image","url("+v[0]+")"),g(o,"z-index","-10"),f(d,"class","pointer_container"),f(d,"viewBox",h="0 0 "+v[2][0]+" "+v[2][1]),f(e,"class","input_image"),f($,"class","dict"),f(t,"class","figure")},m(n,v){c(n,t,v),r(t,e),r(e,o),r(e,i),r(e,d);for(let n=0;n<b.length;n+=1)b[n].m(d,null);r(t,m),r(t,$);for(let n=0;n<_.length;n+=1)_[n].m($,null)},p(n,[v]){if(1&v&&g(o,"background-image","url("+n[0]+")"),50&v){let t;for(x=n[4],t=0;t<x.length;t+=1){const e=H(n,x,t);b[t]?b[t].p(e,v):(b[t]=P(e),b[t].c(),b[t].m(d,null))}for(;t<b.length;t+=1)b[t].d(1);b.length=x.length}if(4&v&&h!==(h="0 0 "+n[2][0]+" "+n[2][1])&&f(d,"viewBox",h),8&v){let t;for(y=n[3],t=0;t<y.length;t+=1){const e=B(n,y,t);_[t]?_[t].p(e,v):(_[t]=R(e),_[t].c(),_[t].m($,null))}for(;t<_.length;t+=1)_[t].d(1);_.length=y.length}},i:n,o:n,d(n){n&&l(t),s(b,n),s(_,n)}}}"function"==typeof HTMLElement&&(S=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:n}=this.$$;this.$$.on_disconnect=n.map(v).filter(o);for(const n in this.$$.slotted)this.appendChild(this.$$.slotted[n])}attributeChangedCallback(n,v,t){this[n]=t}disconnectedCallback(){e(this.$$.on_disconnect)}$destroy(){!function(n,v){const t=n.$$;null!==t.fragment&&(e(t.on_destroy),t.fragment&&t.fragment.d(v),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=n}$on(n,v){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(v),()=>{const n=t.indexOf(v);-1!==n&&t.splice(n,1)}}$set(n){var v;this.$$set&&(v=n,0!==Object.keys(v).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}});let D="Mixed_6a_fullcopy.jpg",F=128,G=28;function I(n){return Array(n).fill().map(((n,v)=>v))}function J(n,v,t){let e,o,i,r,{image_url:c="mingcroppedcopy.png"}=v,l=[0,0],{activations:s=[[[{n:638,v:0},{n:534,v:0},{n:200,v:0},{n:593,v:0}]]]}=v;console.log(r);return n.$$set=n=>{"image_url"in n&&t(0,c=n.image_url),"activations"in n&&t(6,s=n.activations)},n.$$.update=()=>{64&n.$$.dirty&&t(2,e=[s.length,s[0].length]),66&n.$$.dirty&&t(3,o=s[l[1]][l[0]]),4&n.$$.dirty&&t(4,i=I(e[0])),4&n.$$.dirty&&t(5,r=I(e[1]))},[c,l,e,o,i,r,s,(n,v)=>t(1,l=[n,v])]}class K extends S{constructor(n){super(),this.shadowRoot.innerHTML="<style>.figure{padding:10px;width:fit-content}.input_image{display:inline-block;width:160px;height:160px}.input_image .image{position:absolute;width:160px;height:160px;border-radius:8px}.pointer_container rect{opacity:0}.pointer_container .selected{opacity:1;fill:none;stroke:hsl(24, 100%, 50%);stroke-width:0.1px}.dict{height:128px;display:inline-block;vertical-align:bottom;padding-bottom:64px;margin-left:64px}.entry{margin-top:9px;margin-right:32px;display:inline-block}.value{display:inline-block;width:32px;border-radius:8px;background:#777}.sprite{display:inline-block;border-radius:8px}.dict-text{display:inline-block;font-size:24px;color:#AAA;margin-bottom:20px}</style>",T(this,{target:this.shadowRoot,props:h(this.attributes),customElement:!0},J,q,i,{image_url:0,activations:6}),n&&(n.target&&c(n.target,this,n.anchor),n.props&&(this.$set(n.props),C()))}static get observedAttributes(){return["image_url","activations"]}get image_url(){return this.$$.ctx[0]}set image_url(n){this.$set({image_url:n}),C()}get activations(){return this.$$.ctx[6]}set activations(n){this.$set({activations:n}),C()}}customElements.define("semantic-dictionary",K);new K({target:document.body,props:{name:"world",activations:[[[{n:638,v:1.2119477987289429},{n:534,v:.9686722755432129},{n:200,v:.8925864100456238},{n:593,v:.6916972398757935}],[{n:534,v:1.1927518844604492},{n:881,v:.6424705386161804},{n:698,v:.636234700679779},{n:828,v:.5618767738342285}],[{n:534,v:1.1692402362823486},{n:207,v:1.0404325723648071},{n:247,v:.9340236186981201},{n:8,v:.7692219018936157}],[{n:207,v:1.0908929109573364},{n:302,v:.9701180458068848},{n:881,v:.6618645191192627},{n:700,v:.6489879488945007}],[{n:245,v:.7198323011398315},{n:565,v:.6508071422576904},{n:881,v:.6462623476982117},{n:181,v:.6273221969604492}],[{n:315,v:1.0374670028686523},{n:245,v:.7022839784622192},{n:700,v:.6571571230888367},{n:534,v:.6559796333312988}],[{n:247,v:1.5712738037109375},{n:534,v:1.2442214488983154},{n:700,v:.6537421345710754},{n:881,v:.6429322361946106}],[{n:638,v:1.7556630373001099},{n:534,v:.7051036357879639},{n:698,v:.7020061016082764},{n:881,v:.6274243593215942}]],[[{n:200,v:.6787006855010986},{n:534,v:.6649377346038818},{n:881,v:.6070985198020935},{n:698,v:.6068567037582397}],[{n:698,v:.8873098492622375},{n:27,v:.7913662791252136},{n:881,v:.665759265422821},{n:705,v:.553421139717102}],[{n:151,v:1.289177656173706},{n:698,v:.8873098492622375},{n:302,v:.8798044919967651},{n:315,v:.8274068832397461}],[{n:698,v:.7782648801803589},{n:881,v:.7451295256614685},{n:705,v:.6639024019241333},{n:378,v:.5822460651397705}],[{n:87,v:1.291015625},{n:306,v:.8949054479598999},{n:698,v:.7498296499252319},{n:380,v:.7419127225875854}],[{n:87,v:.7836310863494873},{n:881,v:.7214142084121704},{n:151,v:.7032642960548401},{n:306,v:.6830016374588013}],[{n:151,v:1.2371599674224854},{n:315,v:.877691388130188},{n:530,v:.8224789500236511},{n:81,v:.7669100165367126}],[{n:698,v:.7361286282539368},{n:542,v:.6586855053901672},{n:881,v:.5956207513809204},{n:321,v:.5840291380882263}]],[[{n:705,v:.654505729675293},{n:321,v:.6325685977935791},{n:881,v:.6155419945716858},{n:200,v:.5558680295944214}],[{n:698,v:.8873098492622375},{n:881,v:.7506499290466309},{n:705,v:.654505729675293},{n:422,v:.5969840884208679}],[{n:304,v:1.0712820291519165},{n:220,v:.899205207824707},{n:698,v:.8873098492622375},{n:881,v:.8320335745811462}],[{n:881,v:.8320335745811462},{n:705,v:.8316785097122192},{n:188,v:.7211219072341919},{n:791,v:.7125184535980225}],[{n:52,v:.8063137531280518},{n:881,v:.7868817448616028},{n:705,v:.784925639629364},{n:791,v:.7125184535980225}],[{n:304,v:.8144181966781616},{n:881,v:.8087568283081055},{n:705,v:.7541393041610718},{n:188,v:.7515337467193604}],[{n:304,v:.9707577228546143},{n:698,v:.9416998624801636},{n:471,v:.8717339634895325},{n:881,v:.8087568283081055}],[{n:698,v:.9416998624801636},{n:321,v:.9189650416374207},{n:14,v:.8012840747833252},{n:369,v:.7559158802032471}]],[[{n:705,v:.691926121711731},{n:321,v:.649044394493103},{n:881,v:.6220120787620544},{n:698,v:.6154080033302307}],[{n:132,v:.8562458753585815},{n:881,v:.7057346701622009},{n:705,v:.691926121711731},{n:754,v:.5954096913337708}],[{n:705,v:.7200804352760315},{n:881,v:.7136187553405762},{n:115,v:.6457419395446777},{n:828,v:.6365413069725037}],[{n:705,v:.8316785097122192},{n:230,v:.8079609870910645},{n:202,v:.7718908786773682},{n:828,v:.732089638710022}],[{n:233,v:1.4920547008514404},{n:376,v:1.1414135694503784},{n:163,v:.8597965836524963},{n:160,v:.8226310014724731}],[{n:202,v:1.080345630645752},{n:383,v:.8508040904998779},{n:705,v:.7572901844978333},{n:881,v:.684912919998169}],[{n:220,v:1.5229395627975464},{n:183,v:1.2770196199417114},{n:439,v:.8804219365119934},{n:124,v:.6947817802429199}],[{n:14,v:1.3399120569229126},{n:321,v:1.0102081298828125},{n:193,v:.7146608829498291},{n:705,v:.675693690776825}]],[[{n:705,v:.6751481890678406},{n:698,v:.6154080033302307},{n:881,v:.5963650941848755},{n:828,v:.5830012559890747}],[{n:705,v:.7558619379997253},{n:881,v:.714646577835083},{n:698,v:.6130560636520386},{n:828,v:.6007673740386963}],[{n:881,v:.860508143901825},{n:372,v:.7056317329406738},{n:705,v:.6814097166061401},{n:552,v:.6689503192901611}],[{n:881,v:.8682054281234741},{n:705,v:.7646291255950928},{n:828,v:.732089638710022},{n:721,v:.7228184938430786}],[{n:675,v:.7847268581390381},{n:881,v:.76935875415802},{n:705,v:.7304975986480713},{n:721,v:.7228184938430786}],[{n:881,v:1.005424976348877},{n:172,v:.8351147174835205},{n:705,v:.7933645844459534},{n:524,v:.672167181968689}],[{n:881,v:.9751005172729492},{n:281,v:.8153915405273438},{n:229,v:.7522963881492615},{n:698,v:.6983187198638916}],[{n:705,v:.7494325041770935},{n:881,v:.6978674530982971},{n:828,v:.655242919921875},{n:204,v:.6429334282875061}]],[[{n:200,v:.719430685043335},{n:698,v:.6738606691360474},{n:881,v:.6016810536384583},{n:705,v:.5418123602867126}],[{n:705,v:.7558619379997253},{n:881,v:.6919090151786804},{n:828,v:.6756365299224854},{n:698,v:.6738606691360474}],[{n:173,v:.8613961935043335},{n:881,v:.860508143901825},{n:612,v:.8457403779029846},{n:705,v:.7525310516357422}],[{n:881,v:.8682054281234741},{n:705,v:.7646291255950928},{n:698,v:.7219390869140625},{n:828,v:.6991559267044067}],[{n:135,v:1.1586997509002686},{n:43,v:1.1197330951690674},{n:881,v:.9141075611114502},{n:705,v:.8594005703926086}],[{n:881,v:1.005424976348877},{n:172,v:.8754198551177979},{n:275,v:.8398094177246094},{n:19,v:.8314993381500244}],[{n:881,v:.9751005172729492},{n:547,v:.8873856067657471},{n:698,v:.8182029724121094},{n:705,v:.8067896366119385}],[{n:321,v:.8380953669548035},{n:352,v:.8321860432624817},{n:705,v:.8067896366119385},{n:160,v:.7045962810516357}]],[[{n:534,v:1.0700488090515137},{n:422,v:.96144038438797},{n:698,v:.6738606691360474},{n:369,v:.656775712966919}],[{n:129,v:1.1326645612716675},{n:534,v:.9081845283508301},{n:422,v:.9072480797767639},{n:550,v:.844130277633667}],[{n:550,v:.9804208278656006},{n:881,v:.7592464685440063},{n:705,v:.7525310516357422},{n:698,v:.7219390869140625}],[{n:881,v:.7592464685440063},{n:698,v:.7219390869140625},{n:828,v:.6991559267044067},{n:783,v:.696337103843689}],[{n:75,v:.8549035787582397},{n:705,v:.7926867008209229},{n:881,v:.778205931186676},{n:625,v:.7697356939315796}],[{n:622,v:.8445481061935425},{n:459,v:.8186969757080078},{n:881,v:.8117307424545288},{n:208,v:.767824649810791}],[{n:422,v:.9814856648445129},{n:129,v:.9695433974266052},{n:881,v:.8117307424545288},{n:705,v:.8067896366119385}],[{n:55,v:.8664595484733582},{n:705,v:.8067896366119385},{n:352,v:.7727879285812378},{n:828,v:.6841300129890442}]],[[{n:638,v:1.9752298593521118},{n:398,v:1.1239407062530518},{n:629,v:.959747314453125},{n:534,v:.9203035831451416}],[{n:398,v:1.344071626663208},{n:55,v:1.0182229280471802},{n:322,v:.9725496768951416},{n:251,v:.8391391038894653}],[{n:398,v:1.2387089729309082},{n:629,v:.73555588722229},{n:698,v:.6715431213378906},{n:251,v:.665137529373169}],[{n:629,v:1.563951015472412},{n:634,v:1.2468317747116089},{n:337,v:1.1772435903549194},{n:146,v:1.0207436084747314}],[{n:629,v:1.776336908340454},{n:300,v:1.2962380647659302},{n:298,v:.9735866189002991},{n:432,v:.9376572966575623}],[{n:398,v:1.0200214385986328},{n:629,v:.9859433174133301},{n:102,v:.8503048419952393},{n:419,v:.7682141065597534}],[{n:398,v:1.146770715713501},{n:629,v:1.1223509311676025},{n:698,v:.894989550113678},{n:251,v:.8909865617752075}],[{n:638,v:1.658544659614563},{n:629,v:1.3162040710449219},{n:398,v:.9703230857849121},{n:534,v:.7911806106567383}]]]}}),new K({target:document.body,props:{name:"world",activations:[[[{n:534,v:1.1936841011047363},{n:638,v:1.0991913080215454},{n:593,v:1.005778431892395},{n:200,v:.6522244215011597}],[{n:534,v:1.0425879955291748},{n:593,v:.8646978139877319},{n:881,v:.6302967667579651},{n:698,v:.6103712916374207}],[{n:534,v:.8981897830963135},{n:484,v:.7618547677993774},{n:698,v:.6455830335617065},{n:881,v:.6302967667579651}],[{n:302,v:1.4853993654251099},{n:200,v:.6544705629348755},{n:534,v:.6505606174468994},{n:881,v:.6448887586593628}],[{n:134,v:.8204602003097534},{n:20,v:.7156192660331726},{n:881,v:.6693243980407715},{n:81,v:.6189524531364441}],[{n:134,v:.759995698928833},{n:881,v:.6693243980407715},{n:20,v:.5867844223976135},{n:150,v:.56449955701828}],[{n:534,v:1.0353479385375977},{n:698,v:.8181138634681702},{n:754,v:.6429673433303833},{n:881,v:.63267582654953}],[{n:638,v:1.5854135751724243},{n:534,v:.9102180004119873},{n:698,v:.8181138634681702},{n:369,v:.7169853448867798}]],[[{n:534,v:.9081931114196777},{n:200,v:.6546940803527832},{n:698,v:.6326900720596313},{n:881,v:.6064178347587585}],[{n:550,v:.6943541765213013},{n:881,v:.6302967667579651},{n:698,v:.614362359046936},{n:705,v:.5957447290420532}],[{n:881,v:.7306259870529175},{n:698,v:.6563238501548767},{n:697,v:.5996080636978149},{n:705,v:.5957447290420532}],[{n:382,v:.7934472560882568},{n:881,v:.7749016284942627},{n:235,v:.7185882329940796},{n:700,v:.6553474068641663}],[{n:182,v:.8925474882125854},{n:66,v:.8201810121536255},{n:881,v:.7068236470222473},{n:705,v:.672695517539978}],[{n:182,v:.9824694395065308},{n:153,v:.8371187448501587},{n:195,v:.8049154281616211},{n:264,v:.7751184701919556}],[{n:253,v:.829076886177063},{n:698,v:.8199279308319092},{n:881,v:.7628124952316284},{n:754,v:.6657155156135559}],[{n:698,v:.8199279308319092},{n:398,v:.7889425754547119},{n:754,v:.6657155156135559},{n:705,v:.6093298196792603}]],[[{n:534,v:.9079174995422363},{n:200,v:.9062636494636536},{n:698,v:.6421970129013062},{n:881,v:.6021540760993958}],[{n:705,v:.6574421525001526},{n:698,v:.6176507472991943},{n:881,v:.611481785774231},{n:828,v:.5483766794204712}],[{n:183,v:1.0646706819534302},{n:881,v:.7306259870529175},{n:1,v:.6826893091201782},{n:173,v:.6781108379364014}],[{n:98,v:1.3062348365783691},{n:130,v:.8093118667602539},{n:299,v:.7860978841781616},{n:245,v:.7786812782287598}],[{n:245,v:.8506100177764893},{n:163,v:.7917885184288025},{n:668,v:.7416133880615234},{n:774,v:.738961935043335}],[{n:98,v:1.1225662231445312},{n:67,v:.8684861660003662},{n:130,v:.8239902257919312},{n:881,v:.7628124952316284}],[{n:698,v:.8025749921798706},{n:881,v:.7628124952316284},{n:1,v:.7485745549201965},{n:254,v:.7270181179046631}],[{n:698,v:.8025749921798706},{n:705,v:.722496747970581},{n:754,v:.6657155156135559},{n:881,v:.6518526673316956}]],[[{n:200,v:.9063307642936707},{n:698,v:.6421970129013062},{n:881,v:.5973352789878845},{n:422,v:.47375816106796265}],[{n:705,v:.6883432269096375},{n:881,v:.6372089982032776},{n:828,v:.6212452054023743},{n:698,v:.6038479208946228}],[{n:881,v:.780370831489563},{n:349,v:.7213923931121826},{n:705,v:.6883432269096375},{n:828,v:.6331762075424194}],[{n:881,v:.780370831489563},{n:698,v:.6305131316184998},{n:172,v:.6069660186767578},{n:705,v:.5684463381767273}],[{n:163,v:.7686170935630798},{n:774,v:.738961935043335},{n:675,v:.7216674089431763},{n:16,v:.7136716842651367}],[{n:75,v:1.001220703125},{n:881,v:.7550302147865295},{n:668,v:.6831812858581543},{n:705,v:.6809196472167969}],[{n:698,v:.7652084231376648},{n:881,v:.7550302147865295},{n:705,v:.7092170715332031},{n:110,v:.6854512691497803}],[{n:698,v:.7983105182647705},{n:705,v:.6833594441413879},{n:173,v:.6245523691177368},{n:881,v:.5782539248466492}]],[[{n:200,v:1.0545275211334229},{n:179,v:.6409960985183716},{n:881,v:.5853367447853088},{n:698,v:.5753505229949951}],[{n:705,v:.6818961501121521},{n:698,v:.598953902721405},{n:828,v:.5794365406036377},{n:881,v:.5771346092224121}],[{n:129,v:.9792327880859375},{n:160,v:.8793603777885437},{n:255,v:.7946445941925049},{n:881,v:.7600582838058472}],[{n:203,v:.9175310134887695},{n:881,v:.7600582838058472},{n:828,v:.7128739356994629},{n:298,v:.6796050071716309}],[{n:311,v:1.4553372859954834},{n:75,v:1.1595261096954346},{n:249,v:1.0315182209014893},{n:98,v:.7285364866256714}],[{n:345,v:.8772965669631958},{n:881,v:.7550302147865295},{n:208,v:.7063162326812744},{n:19,v:.6908957958221436}],[{n:698,v:.8423567414283752},{n:881,v:.7550302147865295},{n:705,v:.7255477905273438},{n:828,v:.6406093835830688}],[{n:698,v:.7750268578529358},{n:183,v:.6446380019187927},{n:173,v:.6331948637962341},{n:881,v:.5700507760047913}]],[[{n:638,v:1.5584369897842407},{n:200,v:1.2170391082763672},{n:66,v:.7985894680023193},{n:436,v:.7932174205780029}],[{n:270,v:.7404049634933472},{n:375,v:.648614764213562},{n:447,v:.5963053703308105},{n:698,v:.5501855611801147}],[{n:634,v:.7645634412765503},{n:129,v:.7205758690834045},{n:828,v:.7128739356994629},{n:698,v:.6113734841346741}],[{n:368,v:1.2319080829620361},{n:308,v:.825080156326294},{n:101,v:.7701165080070496},{n:828,v:.7128739356994629}],[{n:101,v:1.5513039827346802},{n:33,v:1.4105165004730225},{n:180,v:1.089279294013977},{n:308,v:.9390348196029663}],[{n:634,v:.9537044763565063},{n:129,v:.7917449474334717},{n:881,v:.7289462685585022},{n:721,v:.6804921627044678}],[{n:698,v:.8613718152046204},{n:828,v:.6406093835830688},{n:705,v:.6250713467597961},{n:186,v:.6244601607322693}],[{n:593,v:1.3822952508926392},{n:698,v:.7915173172950745},{n:244,v:.7549722194671631},{n:173,v:.6779009103775024}]],[[{n:354,v:.9676251411437988},{n:638,v:.6812320947647095},{n:311,v:.6717715263366699},{n:627,v:.6436799168586731}],[{n:375,v:.6486668586730957},{n:750,v:.6152186393737793},{n:697,v:.613223671913147},{n:881,v:.5795246958732605}],[{n:370,v:.8358249068260193},{n:698,v:.7558465003967285},{n:255,v:.7521921396255493},{n:253,v:.696189820766449}],[{n:698,v:.7558465003967285},{n:350,v:.6487033367156982},{n:881,v:.6040970683097839},{n:705,v:.5676056742668152}],[{n:881,v:.6285199522972107},{n:634,v:.5921717286109924},{n:56,v:.578514575958252},{n:705,v:.5676056742668152}],[{n:634,v:.7529735565185547},{n:152,v:.7481328248977661},{n:185,v:.7215260863304138},{n:881,v:.5849066376686096}],[{n:186,v:.9806051254272461},{n:235,v:.8274240493774414},{n:698,v:.6133468151092529},{n:881,v:.559402585029602}],[{n:196,v:.982046365737915},{n:270,v:.7685033082962036},{n:698,v:.7522580027580261},{n:629,v:.7362310886383057}]],[[{n:638,v:1.5422381162643433},{n:538,v:1.061121940612793},{n:107,v:1.0342063903808594},{n:203,v:.9488883018493652}],[{n:249,v:1.2061046361923218},{n:504,v:1.0090346336364746},{n:107,v:.9483400583267212},{n:130,v:.9425687789916992}],[{n:61,v:.9272236824035645},{n:157,v:.922264814376831},{n:64,v:.765044629573822},{n:67,v:.7612450122833252}],[{n:157,v:1.3246653079986572},{n:354,v:1.019620418548584},{n:220,v:.9570906162261963},{n:268,v:.9335113763809204}],[{n:194,v:.8222838640213013},{n:184,v:.7671950459480286},{n:354,v:.6583611369132996},{n:233,v:.6407293677330017}],[{n:242,v:.8849223852157593},{n:249,v:.867214024066925},{n:107,v:.6906326413154602},{n:629,v:.6680762767791748}],[{n:249,v:1.2830893993377686},{n:629,v:1.185260534286499},{n:242,v:.861138105392456},{n:638,v:.8607190847396851}],[{n:629,v:1.7458343505859375},{n:638,v:1.6027864217758179},{n:157,v:1.147857427597046},{n:249,v:.7001543045043945}]]],image_url:"ethancropped.jpg"}}),new K({target:document.body,props:{name:"world",activations:[[[{n:5,v:1.0838674306869507},{n:638,v:1.0582422018051147},{n:534,v:.9780580997467041},{n:81,v:.7416661977767944}],[{n:534,v:1.1405000686645508},{n:593,v:.7306782007217407},{n:5,v:.6800299286842346},{n:881,v:.6518493890762329}],[{n:534,v:1.026824712753296},{n:180,v:.6801866292953491},{n:881,v:.6556058526039124},{n:828,v:.5020608305931091}],[{n:534,v:.9346129894256592},{n:881,v:.6531631946563721},{n:159,v:.6080264449119568},{n:81,v:.572014331817627}],[{n:534,v:.9263365268707275},{n:881,v:.6531631946563721},{n:159,v:.5350208282470703},{n:828,v:.49871134757995605}],[{n:52,v:.6449163556098938},{n:534,v:.6410360336303711},{n:881,v:.6294655203819275},{n:25,v:.6157675385475159}],[{n:534,v:.8365540504455566},{n:593,v:.8037363290786743},{n:379,v:.7349551320075989},{n:881,v:.6138191819190979}],[{n:638,v:1.6720646619796753},{n:5,v:.8307002782821655},{n:534,v:.7041854858398438},{n:50,v:.6213701963424683}]],[[{n:5,v:.6966612339019775},{n:200,v:.669731616973877},{n:881,v:.626832902431488},{n:50,v:.5910558700561523}],[{n:881,v:.6218137741088867},{n:828,v:.5698235034942627},{n:698,v:.5463970899581909},{n:705,v:.45846283435821533}],[{n:101,v:1.1206779479980469},{n:486,v:.6813055872917175},{n:881,v:.6492702960968018},{n:80,v:.6248591542243958}],[{n:486,v:.8133397698402405},{n:881,v:.6531631946563721},{n:705,v:.6287656426429749},{n:282,v:.5849800705909729}],[{n:486,v:.8421619534492493},{n:101,v:.6852118968963623},{n:881,v:.6531631946563721},{n:254,v:.6530300974845886}],[{n:254,v:.7100397348403931},{n:101,v:.7083275318145752},{n:300,v:.648161768913269},{n:178,v:.6335524320602417}],[{n:881,v:.6023082733154297},{n:155,v:.5798170566558838},{n:253,v:.5714146494865417},{n:698,v:.5489119291305542}],[{n:30,v:.6059966087341309},{n:881,v:.6027278304100037},{n:629,v:.5914511680603027},{n:698,v:.5489119291305542}]],[[{n:5,v:.9038829207420349},{n:101,v:.6602165699005127},{n:117,v:.6197766065597534},{n:881,v:.615904688835144}],[{n:698,v:.743165910243988},{n:382,v:.6778180599212646},{n:881,v:.6606957316398621},{n:705,v:.5856342911720276}],[{n:268,v:.9245391488075256},{n:881,v:.8473880290985107},{n:639,v:.811418354511261},{n:698,v:.743165910243988}],[{n:881,v:.8473880290985107},{n:721,v:.7353403568267822},{n:16,v:.7239338159561157},{n:705,v:.6820399165153503}],[{n:58,v:.868252158164978},{n:121,v:.8070733547210693},{n:31,v:.7379258871078491},{n:881,v:.713238000869751}],[{n:81,v:.8979016542434692},{n:881,v:.7812201976776123},{n:151,v:.6751640439033508},{n:698,v:.6655619144439697}],[{n:81,v:1.2079315185546875},{n:253,v:.9937880039215088},{n:178,v:.7374348640441895},{n:698,v:.7173216938972473}],[{n:698,v:.6734129190444946},{n:881,v:.5957067608833313},{n:398,v:.5635359287261963},{n:705,v:.5591440200805664}]],[[{n:881,v:.615904688835144},{n:698,v:.5260279178619385},{n:705,v:.4980812072753906},{n:828,v:.45046117901802063}],[{n:698,v:.6727816462516785},{n:881,v:.6606957316398621},{n:254,v:.6544259786605835},{n:705,v:.6363806128501892}],[{n:130,v:1.096585750579834},{n:881,v:.8473880290985107},{n:705,v:.6511449813842773},{n:828,v:.6224890947341919}],[{n:881,v:.8473880290985107},{n:304,v:.7604474425315857},{n:721,v:.7353403568267822},{n:311,v:.7111873626708984}],[{n:248,v:.7860747575759888},{n:233,v:.7587547898292542},{n:881,v:.7242443561553955},{n:280,v:.7158734798431396}],[{n:130,v:.8068212270736694},{n:881,v:.8030949831008911},{n:289,v:.7637253999710083},{n:605,v:.730392336845398}],[{n:301,v:.7199379801750183},{n:698,v:.7173216938972473},{n:1,v:.706463098526001},{n:881,v:.7053799033164978}],[{n:542,v:.6989579796791077},{n:698,v:.6734129190444946},{n:881,v:.608001172542572},{n:705,v:.5937994122505188}]],[[{n:352,v:.6159340739250183},{n:881,v:.608925461769104},{n:534,v:.5991199016571045},{n:705,v:.5653113722801208}],[{n:698,v:.7841258645057678},{n:881,v:.7604098916053772},{n:705,v:.7575108408927917},{n:132,v:.7173336148262024}],[{n:234,v:1.0077941417694092},{n:881,v:.8851983547210693},{n:211,v:.7688319683074951},{n:75,v:.7560161352157593}],[{n:881,v:.848682701587677},{n:234,v:.7304468750953674},{n:435,v:.7153420448303223},{n:284,v:.7046715617179871}],[{n:234,v:.8547350764274597},{n:44,v:.8183417320251465},{n:128,v:.7771428227424622},{n:476,v:.756008505821228}],[{n:234,v:1.2211376428604126},{n:333,v:.9516280889511108},{n:75,v:.9334955215454102},{n:474,v:.831932008266449}],[{n:253,v:1.0183095932006836},{n:81,v:.9985359907150269},{n:160,v:.7268784046173096},{n:698,v:.7169291973114014}],[{n:542,v:.7738434672355652},{n:698,v:.6345018744468689},{n:705,v:.5937994122505188},{n:881,v:.5871914625167847}]],[[{n:698,v:.6724319458007812},{n:881,v:.6036300659179688},{n:705,v:.5653113722801208},{n:828,v:.5152179002761841}],[{n:160,v:1.0184035301208496},{n:129,v:.9612420201301575},{n:705,v:.7807719111442566},{n:321,v:.766984760761261}],[{n:324,v:1.0093104839324951},{n:881,v:.8851983547210693},{n:173,v:.8276156187057495},{n:612,v:.7990860342979431}],[{n:130,v:1.1195913553237915},{n:316,v:.8972851037979126},{n:881,v:.848682701587677},{n:311,v:.8094444274902344}],[{n:130,v:.8436143398284912},{n:881,v:.8289809226989746},{n:705,v:.7954435348510742},{n:831,v:.7031722068786621}],[{n:173,v:1.0030105113983154},{n:433,v:.906408965587616},{n:254,v:.7947306036949158},{n:698,v:.7651466131210327}],[{n:160,v:.8315017819404602},{n:881,v:.6765611171722412},{n:705,v:.6497480869293213},{n:754,v:.6476319432258606}],[{n:359,v:.7847121953964233},{n:55,v:.580378532409668},{n:24,v:.571881115436554},{n:698,v:.5698742866516113}]],[[{n:698,v:.6724319458007812},{n:200,v:.6624287366867065},{n:81,v:.6425207853317261},{n:881,v:.5705655813217163}],[{n:634,v:.7746671438217163},{n:55,v:.6760985255241394},{n:754,v:.6553621292114258},{n:705,v:.6377401947975159}],[{n:179,v:1.048551321029663},{n:698,v:.8468427062034607},{n:129,v:.8064298033714294},{n:122,v:.7334620356559753}],[{n:698,v:.8468427062034607},{n:721,v:.8445519208908081},{n:881,v:.8289809226989746},{n:705,v:.7954435348510742}],[{n:881,v:.8289809226989746},{n:230,v:.8011630773544312},{n:705,v:.7954435348510742},{n:721,v:.7833058834075928}],[{n:204,v:1.0994980335235596},{n:534,v:.8638999462127686},{n:129,v:.8618389964103699},{n:698,v:.7651466131210327}],[{n:550,v:.6667718887329102},{n:705,v:.6497480869293213},{n:881,v:.6023644208908081},{n:828,v:.5664539337158203}],[{n:24,v:.7956511378288269},{n:534,v:.7642056941986084},{n:242,v:.6605954170227051},{n:167,v:.6185166835784912}]],[[{n:638,v:1.9989084005355835},{n:629,v:1.2762162685394287},{n:336,v:.7487630844116211},{n:354,v:.72231125831604}],[{n:398,v:1.0309264659881592},{n:629,v:.9600443840026855},{n:341,v:.9577614068984985},{n:322,v:.9378225803375244}],[{n:634,v:1.8664509057998657},{n:251,v:1.6539963483810425},{n:398,v:1.366654396057129},{n:419,v:1.0217100381851196}],[{n:583,v:1.0872302055358887},{n:721,v:.8445519208908081},{n:474,v:.7760301232337952},{n:881,v:.6965945363044739}],[{n:721,v:.7833058834075928},{n:881,v:.6595388054847717},{n:705,v:.6261045336723328},{n:634,v:.6246399283409119}],[{n:398,v:1.2328715324401855},{n:62,v:1.0072985887527466},{n:251,v:.7464399337768555},{n:629,v:.7218141555786133}],[{n:62,v:1.1352545022964478},{n:629,v:.9196009635925293},{n:184,v:.847051203250885},{n:398,v:.8329789638519287}],[{n:638,v:1.5539318323135376},{n:398,v:1.2860164642333984},{n:629,v:1.2262442111968994},{n:225,v:.6179119348526001}]]],image_url:"jake.jpeg"}})}();
//# sourceMappingURL=bundle.js.map