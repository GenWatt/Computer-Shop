(this.webpackJsonpadraintube=this.webpackJsonpadraintube||[]).push([[1],{10:function(n,e,t){"use strict";var r=t(24),a={customSearch:function(n){return{type:r.a,payload:n}},randomSearch:function(n){return{type:r.b,payload:n}},setBgVideo:function(n){return{type:r.c,payload:n}}},o=t(11),i={addVideosToState:function(n){return{type:o.g,payload:n}},fetchVideos:function(n){return{type:o.c,payload:n}},addCommentsToState:function(n){return{type:o.f,payload:n}},fetchComments:function(n){return{type:o.a,payload:n}},addErrorsAction:function(n){return{type:o.b,payload:n}},clearComments:function(n){return{type:o.d,payload:n}},clearVideos:function(n){return{type:o.e,payload:n}}},c=t(35),s={searchActions:a,searchResultsActions:i,settingsActions:{setSettings:function(n){return{type:c.a,payload:n}}}};e.a=s},11:function(n,e,t){"use strict";t.d(e,"g",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"e",(function(){return o})),t.d(e,"f",(function(){return i})),t.d(e,"a",(function(){return c})),t.d(e,"d",(function(){return s})),t.d(e,"b",(function(){return u}));var r="FETCH_VIDEOS",a="ADD_RESULTS",o="CLEAR_VIDEOS",i="FETCH_COMMENTS",c="ADD_COMMENTS",s="CLEAR_COMMENTS",u="ADD_ERRORS"},20:function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return s}));var r=t(5),a=t(4);function o(){var n=Object(r.a)(["\n  cursor: pointer;\n  border: none;\n  outline: none;\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return i=function(){return n},n}var c=Object(a.c)(i()),s=Object(a.c)(o())},24:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o}));var r="CUSTOM_SEARCH",a="RANDOM_SEARCH",o="SET_BG_VIDEO"},29:function(n,e,t){"use strict";t.d(e,"d",(function(){return r})),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i}));var r=["music","football","animals","COVID-19","film trailer"],a=15,o=6,i=200},30:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r=t(0),a=t.n(r),o=t(5),i=t(4),c=t(20);function s(){var n=Object(o.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: grey;\n  margin-left: 25px;\n  animation: "," 2s ease-in-out infinite;\n\n  &:nth-child(1) {\n    animation-delay: 0.3s;\n  }\n\n  &:last-child {\n    animation-delay: 0.6s;\n  }\n"]);return s=function(){return n},n}function u(){var n=Object(o.a)(["\n  0%,\n  100% {\n    transform: scale(0.7) translateY(0);\n  }\n\n  25% {\n    transform: scale(1) translateY(20px);\n  }\n\n  50% {\n    transform: scale(0.4) translateY(-20px);\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(o.a)(["\n  ",";\n"]);return l=function(){return n},n}var d=i.d.div(l(),c.b),m=Object(i.e)(u()),f=i.d.span(s(),m);function p(){return a.a.createElement(d,null,a.a.createElement(f,null),a.a.createElement(f,null),a.a.createElement(f,null))}},35:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r="SET_SETTINGS"},57:function(n,e,t){n.exports=t(71)},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(32),i=t.n(o),c=t(27),s=t(12),u=t(30),l=t(10),d=t(51),m=t.n(d),f=t(5),p=t(4);function b(){var n=Object(f.a)(["\n  background-color: ",";\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  box-shadow: ",",\n    ",";\n  height: 100%;\n  width: 50px;\n  margin: 15px 0;\n  padding: 10px;\n  outline: none;\n  cursor: pointer;\n  border: none;\n  border-left: 1px solid ",";\n  color: ",";\n  transition: box-shadow 0.4s ease-in-out;\n\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(f.a)(["\n  width: 100%;\n  height: 35px;\n  padding: 10px 5px 0 10px;\n  border: none;\n  background-image: ",";\n  box-shadow: ",";\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  color: ",";\n  outline: none;\n  transition: box-shadow 0.7s ease-in-out;\n"]);return h=function(){return n},n}function g(){var n=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: ",";\n  font-size: ",";\n  transition: transform 0.4s ease, left 0.4s ease-in-out;\n  ",";\n"]);return g=function(){return n},n}function x(){var n=Object(f.a)(["\n  position: relative;\n  min-width: 70%;\n  height: 35px;\n  margin: 15px;\n\n  &:hover,\n  &:focus {\n    ",";\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]);return v=function(){return n},n}var O=p.d.form(v()),y=p.d.div(x(),(function(n){return n.theme.boxShadows.common})),j=p.d.label(g(),(function(n){return n.isFocus?" 50%;":"10px"}),(function(n){return n.theme.fontSizes.small}),(function(n){return n.isFocus&&"transform: translateX(-50%);"})),E=p.d.input.attrs({type:"text"})(h(),(function(n){var e=n.theme;return"linear-gradient(45deg, ".concat(e.colors.primary,",").concat(e.colors.secondary,");")}),(function(n){return n.theme.boxShadows.common}),(function(n){return n.theme.fontColors.mainText})),w=p.d.button.attrs({type:"submit"})(b(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.boxShadows.common}),(function(n){return n.theme.boxShadows.inset}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontColors.mainText}),(function(n){return n.theme.boxShadows.common}));var S=a.a.memo((function(){var n=Object(r.useState)(""),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),u=Object(c.a)(i,2),d=u[0],f=u[1],p=Object(s.b)();return a.a.createElement(O,{onSubmit:function(n){return function(n){n.preventDefault(),t&&(p(l.a.searchActions.customSearch(t)),p(l.a.searchResultsActions.clearVideos(!0)))}(n)}},a.a.createElement(y,null,a.a.createElement(j,{htmlFor:"search",isFocus:d},"Search For Films..."),a.a.createElement(E,{name:"search",id:"search",onChange:function(n){return o(n.target.value)},onFocus:function(){f(!0)},onBlur:function(){t||f(!1)},value:t})),a.a.createElement(w,null,a.a.createElement(m.a,{className:"submit__icon"})))}));function k(){var n=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return k=function(){return n},n}function C(){var n=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0.3;\n  z-index: -1;\n"]);return C=function(){return n},n}var R=p.d.aside(C()),A=p.d.iframe(k());function T(n){var e=n.bgVideo;return a.a.createElement(R,null,a.a.createElement(A,{src:e.url,title:e.title}))}var L=t(29);var I=function(){var n=Math.floor(Math.random()*L.d.length);return L.d[n]};function z(){var n=Object(f.a)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]);return z=function(){return n},n}function V(){var n=Object(f.a)(["\n  text-transform: uppercase;\n  text-align: center;\n  font-size: ",";\n"]);return V=function(){return n},n}function M(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: inherit;\n"]);return M=function(){return n},n}var _=p.d.div(M()),D=p.d.h1(V(),(function(n){return n.theme.fontSizes.large})),F=p.d.section(z()),N=a.a.lazy((function(){return t.e(0).then(t.bind(null,84))})),U=a.a.memo((function(){var n,e=Object(s.c)((function(n){return n})),t=e.search,o=t.bgVideo,i=t.search,c=e.searchResult.videos,d=c.items,m=c.isLoading,f=e.settings.settings.videoBackground,p=Object(s.b)();Object(r.useEffect)((function(){p(l.a.searchResultsActions.clearVideos(!0)),p(l.a.searchActions.randomSearch(I()))}),[p]),Object(r.useEffect)((function(){i&&p(l.a.searchResultsActions.fetchVideos(i))}),[i,p]);var b=d.flat(1).map((function(n){return n.items})).flat(1);return!m&&b.length&&(n=a.a.createElement(F,null,b.map((function(n){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.a,null),key:n.id.videoId},a.a.createElement(N,{video:n}))})))),a.a.createElement(_,null,a.a.createElement(S,null),f&&o&&a.a.createElement(T,{bgVideo:o}),a.a.createElement("header",null,a.a.createElement(D,null,i)),n,m&&a.a.createElement(u.a,null))})),B=t(36),P=t(7),Y=t(23),J=t(20);function H(){var n=Object(f.a)(["\n  ",";\n  background-image: linear-gradient(45deg, rgb(31, 120, 236), rgb(8, 123, 218));\n  position: fixed;\n  bottom: 30px;\n  left: 50%;\n  ","\n  width: 100px;\n  height: 35px;\n  border-radius: 10px;\n  padding: 5px;\n  transform-origin: center center;\n  transition: transform 0.4s ease-in-out;\n  color: white;\n\n  &:hover,\n  &:focus {\n    transform: scaleX(1.1) translate(-50%, 0);\n  }\n"]);return H=function(){return n},n}function G(){var n=Object(f.a)(["\n  justify-self: flex-start;\n  align-self: center;\n"]);return G=function(){return n},n}function K(){var n=Object(f.a)(['\n  justify-self: self-end;\n  margin-right: 30px;\n  width: 80px;\n  height: 25px;\n  position: relative;\n\n  &::before {\n    content: "";\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    transition: background-color 0.3s ease-out;\n  }\n\n  &:checked::before {\n    background-color: black;\n  }\n\n  &::after {\n    content: "";\n    background-color: rgb(63, 63, 231);\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    position: absolute;\n    left: 65%;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    transition: background-color 0.4s ease-in, left 0.5s ease-in-out;\n  }\n\n  &:checked::after {\n    background-color: white;\n    left: 0;\n  }\n']);return K=function(){return n},n}function q(){var n=Object(f.a)(["\n  width: 90%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  margin-top: 20px;\n"]);return q=function(){return n},n}function Q(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n"]);return Q=function(){return n},n}function X(){var n=Object(f.a)(["\n  font-size: ",";\n  letter-spacing: 2px;\n  text-transform: uppercase;\n"]);return X=function(){return n},n}function W(){var n=Object(f.a)(["\n  ",";\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  transform-origin: top right;\n  padding: ",";\n  background-image: ",";\n"]);return W=function(){return n},n}var Z=Object(p.d)(Y.b.section)(W(),J.b,(function(n){return n.theme.colors}),(function(n){var e=n.theme;return"linear-gradient(45deg, ".concat(e.colors.primary,", ").concat(e.colors.secondary,")")})),$=p.d.h1(X(),(function(n){return n.theme.fontSizes.xl})),nn=p.d.form(Q()),en=Object(p.d)(Y.b.div)(q()),tn=p.d.input.attrs({type:"checkbox"})(K()),rn=p.d.label(G()),an=p.d.button.attrs({type:"submit"})(H(),J.a,(function(n){return n.isShow?"transform: scale(1) translate(-50%, 0);":"transform: scale(0) translateY(100px);"})),on={initial:{clipPath:"circle(0%)",scale:0},animate:{scale:1,clipPath:"circle(75%)"},exit:{scale:0,clipPath:"circle(0%)"}},cn={initial:{opacity:0,y:20},animate:{opacity:1,y:0}};function sn(){var n=Object(s.c)((function(n){return n.settings})),e=Object(r.useState)(n),t=Object(c.a)(e,2),o=t[0],i=t[1],u=Object(s.b)(),d=function(n){return i(Object(P.a)(Object(P.a)({},o),{},{settings:Object(P.a)(Object(P.a)({},o.settings),{},Object(B.a)({},n.target.name,n.target.checked))}))};return Object(r.useEffect)((function(){return localStorage.setItem("userSettings",JSON.stringify(n))}),[n]),a.a.createElement(Z,{variants:on,animate:"animate",initial:"initial",exit:"exit",transition:{duration:.5,staggerChildren:.3,delayChildren:.2}},a.a.createElement("header",null,a.a.createElement($,null,"Settings")),a.a.createElement(nn,{action:"",onSubmit:function(n){n.preventDefault(),o&&u(l.a.settingsActions.setSettings(o))}},a.a.createElement(en,{variants:cn},a.a.createElement(tn,{name:"darkMode",id:"switch-mode",checked:o.settings.darkMode,onChange:function(n){return d(n)}}),a.a.createElement(rn,{htmlFor:"switch-mode"},"Dark Mode ",o.settings.darkMode?" On":" Off")),a.a.createElement(en,{variants:cn},a.a.createElement(tn,{name:"videoBackground",id:"video-background",checked:o.settings.videoBackground,onChange:function(n){return d(n)}}),a.a.createElement(rn,{htmlFor:"video-background"},"Video In Background",o.settings.videoBackground?" On":" Off")),a.a.createElement(an,{isShow:JSON.stringify(n)!==JSON.stringify(o),disabled:JSON.stringify(n)===JSON.stringify(o)},"Save Changes")))}var un=t(8);function ln(){var n=Object(f.a)(["\n  display: grid;\n  grid-auto-rows: minmax(300px, 400px);\n  grid-gap: 5px;\n  margin-top: 10px;\n  margin-right: 10px;\n  place-items: center;\n\n  @media only screen and (max-width: 610px) {\n    margin-left: 10px;\n  }\n"]);return ln=function(){return n},n}function dn(){var n=Object(f.a)(["\n  grid-column: 1/3;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n"]);return dn=function(){return n},n}function mn(){var n=Object(f.a)(["\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  display: grid;\n  grid-template-columns: minmax(50%, 30%);\n  grid-template-rows: 600px 1fr;\n  background-image: ",";\n\n  @media only screen and (max-width: 610px) {\n    grid-template-columns: 1fr;\n  }\n"]);return mn=function(){return n},n}var fn=p.d.section(mn(),(function(n){var e=n.theme;return"linear-gradient(45deg,".concat(e.colors.primary,",").concat(e.colors.secondary,")")})),pn=p.d.iframe.attrs({allow:"autoplay; encrypted-media;",allowFullScreen:!0})(dn()),bn=p.d.aside(ln()),hn=a.a.lazy((function(){return t.e(0).then(t.bind(null,84))})),gn=a.a.lazy((function(){return t.e(4).then(t.bind(null,83))}));function xn(){var n=Object(un.h)().videoId,e=Object(s.c)((function(n){return n.searchResult.videos})),t=e.items,o=e.isLoading,i=Object(s.b)();if(Object(r.useEffect)((function(){i(l.a.searchResultsActions.clearComments(!0))}),[n,i]),o)return i(l.a.searchActions.customSearch("")),a.a.createElement(un.a,{to:"/"});var c=t.map((function(n){return n.items})).flat(1);return a.a.createElement(fn,null,a.a.createElement(pn,{src:"http://www.youtube.com/embed/".concat(n,"?autoplay=1"),title:n}),a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.a,null)},a.a.createElement(gn,{videoId:n})),a.a.createElement(bn,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.a,null)},c.map((function(e){return e.id.videoId===n?null:a.a.createElement(hn,{video:e,key:e.id.videoId,vertical:!0})})))))}function vn(){var n=Object(f.a)(["\n  background-color: ",";\n  width: 70%;\n  text-align: center;\n  border-radius: 5px;\n  box-shadow: ",";\n"]);return vn=function(){return n},n}function On(){var n=Object(f.a)(["\n  width: 100%;\n  position: fixed;\n  left: 0;\n  opacity: 0;\n  color: white;\n  font-weight: bold;\n  z-index: 1000;\n  ",";\n  pointer-events: none;\n"]);return On=function(){return n},n}var yn=Y.b.custom(p.d.section(On(),J.b)),jn=p.d.div(vn(),(function(n){return n.theme.colors.errorColor}),(function(n){return n.theme.boxShadows.neumorphismRed})),En={initial:{opacity:0,top:-100},animate:{opacity:1,top:0},exit:{opacity:0,top:100}};function wn(){var n=Object(s.c)((function(n){return n.searchResult})).errors;return a.a.createElement(yn,{variants:En,animate:"animate",initial:"initial",exit:"exit"},a.a.createElement(jn,null,n.message?a.a.createElement("p",null,n.message):a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{style:{fontSize:"1.6em"}},n.error.code),a.a.createElement("p",{style:{margin:3}},n.error.message))))}var Sn=t(52),kn=t.n(Sn);function Cn(){var n=Object(f.a)(["\n  font-size: ",';\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  text-shadow: ',";\n  color: ",";\n\n  @media only screen and (max-width: 500px) {\n    font-size: ",";\n  }\n"]);return Cn=function(){return n},n}function Rn(){var n=Object(f.a)(["\n  ","\n  position: fixed;\n  top: 15px;\n  right: 15px;\n  width: 40px;\n  height: 40px;\n  z-index: 3;\n  cursor: pointer;\n  transform: scale(1.7);\n  background-color: transparent;\n  outline: none;\n  border: none;\n  border-radius: 50%;\n  transition: background-color 0.4s ease;\n  color: ",";\n\n  &:hover {\n    animation: "," 1.5s ease-in-out infinite;\n    background-color: ",";\n  }\n\n  @media only screen and (max-width: 490px) {\n    top: 5px;\n    right: 5px;\n  }\n\n  @media only screen and (max-width: 320px) {\n    right: 3px;\n    transform: scale(1.5);\n  }\n"]);return Rn=function(){return n},n}function An(){var n=Object(f.a)(["\n    0% {\n        transform: rotate(0) scale(1.5);\n    }\n\n    100% {\n        transform: rotate(360deg) scale(1.5);\n    }\n"]);return An=function(){return n},n}function Tn(){var n=Object(f.a)(["\n  ",";\n  color: ",";\n"]);return Tn=function(){return n},n}var Ln=p.d.h1(Tn(),J.b,(function(n){return n.theme.fontColors.mainText})),In=Object(p.e)(An()),zn=p.d.button(Rn(),J.b,(function(n){return n.theme.fontColors.mainText}),In,(function(n){return n.theme.colors.opositeColorLowAlpha})),Vn=p.d.header(Cn(),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.boxShadows.common}),(function(n){return n.theme.fontColors.mainText}),(function(n){return n.theme.fontSizes.large})),Mn=t(28);function _n(n){var e=n.setShowSettings,t=n.showSettings;return a.a.createElement(Ln,null,a.a.createElement(Mn.b,{to:"/",style:{textDecoration:"none"},title:"Home"},a.a.createElement(Vn,null,"adrianTube")),a.a.createElement(zn,{onClick:function(){return e(!t)},name:"settings"},a.a.createElement(kn.a,null)))}var Dn={colors:{primary:"rgb(236, 231, 231)",secondary:"rgb(226, 226, 226)",commentGradient:"linear-gradient(rgb(209, 209, 209), rgb(190, 180, 180))",lowAlpha:"rgba(236, 231, 231, 0.3)",opositeColorLowAlpha:"rgba(24, 24, 24, 0.3)",errorColor:"rgb(197, 7, 7)"},fontColors:{mainText:"rgb(20, 20, 20)"},fontSizes:{small:"0.8em",medium:"1.1em",large:"1.7em",xl:"3em"},boxShadows:{neumorphismRed:"3px 3px 10px #00000085, -3px -3px 10px rgb(163, 105, 105)",common:"-3px 3px 10px rgba(0,0,0,0.2), 3px -3px 10px rgba(255, 255, 255)",inset:"inset 3px 3px 20px rgba(0, 0, 0, 0.158), inset 0px -3px 20px rgba(0, 0, 0, 0.164)"}},Fn={colors:{primary:"rgb(24, 24, 24)",secondary:"rgb(36, 34, 34)",commentGradient:"linear-gradient(rgb(59, 59, 59), rgb(73, 71, 71))",lowAlpha:"rgba(24, 24, 24, 0.3)",opositeColorLowAlpha:"rgba(236, 231, 231, 0.3)",errorColor:"rgb(197, 7, 7)"},fontColors:{mainText:"#f0efe6"},fontSizes:{small:"0.8em",medium:"1.1em",large:"1.7em",xl:"3em"},boxShadows:{neumorphismRed:"3px 3px 10px #00000085, -3px -3px 10px rgb(163, 105, 105)",common:"-3px 3px 10px black, 3px -3px 10px rgba(255, 255, 255, 0.247)",inset:"inset 3px 3px 20px rgba(255, 255, 255, 0.158), inset 0px -3px 20px rgba(255, 255, 255, 0.164)"}};function Nn(){var n=Object(f.a)(["\nhtml{\n  @media only screen and (max-width: 570px) {\n    font-size: 15px;\n  }\n}\n\nbody{\n  min-height: 100vh;\n  color:",";\n  background-image:",";\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overflow-x:hidden;\n}\n\niframe{\n  border:none;\n}\n"]);return Nn=function(){return n},n}var Un=Object(p.b)(Nn(),(function(n){return n.theme.fontColors.mainText}),(function(n){var e=n.theme;return"linear-gradient(45deg,".concat(e.colors.primary,",").concat(e.colors.secondary,")")})),Bn=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(s.c)((function(n){return n})),u=i.searchResult,d=i.settings,m=u.errors,f=d.settings.darkMode,b=Object(un.g)(),h=Object(s.b)();return Object(r.useEffect)((function(){var n=localStorage.getItem("userSettings");if(n){var e=JSON.parse(n);h(l.a.settingsActions.setSettings(e))}}),[h]),a.a.createElement(p.a,{theme:f?Fn:Dn},a.a.createElement(Un,null),a.a.createElement("section",{className:"container"},a.a.createElement(Y.a,null,m.error.error&&a.a.createElement(wn,null)),a.a.createElement(_n,{setShowSettings:o,showSettings:t}),a.a.createElement(Y.a,null,t&&a.a.createElement(sn,null)),a.a.createElement(un.d,{location:b},a.a.createElement(un.b,{component:xn,path:"/:videoId"}),a.a.createElement(un.b,{component:U,path:"/"}),a.a.createElement(un.a,{to:"/"}))))},Pn=t(22),Yn=t(55),Jn=t(24),Hn={search:"",bgVideo:{url:"",title:""}};var Gn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Jn.a:case Jn.b:return Object(P.a)(Object(P.a)({},n),{},{search:e.payload});case Jn.c:return Object(P.a)(Object(P.a)({},n),{},{bgVideo:{url:e.payload.url,title:e.payload.title}});default:return n}},Kn=t(43),qn=t(11),Qn={videos:{isLoading:!0,items:[],nextPageToken:""},comments:{items:[],isLoading:!0,nextPageToken:""},errors:{message:"",error:{error:!1}}};var Xn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case qn.a:return Object(P.a)(Object(P.a)({},n),{},{comments:Object(P.a)(Object(P.a)({},n.comments),{},{isLoading:!0})});case qn.d:return e.payload?Object(P.a)(Object(P.a)({},n),{},{comments:{items:[],isLoading:!0}}):n;case qn.e:return e.payload?Object(P.a)(Object(P.a)({},n),{},{videos:{items:[],isLoading:!0}}):n;case qn.c:return Object(P.a)(Object(P.a)({},n),{},{videos:Object(P.a)(Object(P.a)({},n.videos),{},{isLoading:!0})});case qn.g:return Object(P.a)(Object(P.a)({},n),{},{videos:{items:[].concat(Object(Kn.a)(n.videos.items),[e.payload]),IsLoading:e.payload.isLoading}});case qn.f:return Object(P.a)(Object(P.a)({},n),{},{comments:{items:[].concat(Object(Kn.a)(n.comments.items),[e.payload]),IsLoading:e.payload.isLoading,nextPageToken:e.payload.nextPageToken}});case qn.b:return Object(P.a)(Object(P.a)({},n),{},{errors:{message:e.payload.message,error:e.payload.error}});default:return n}},Wn=t(35),Zn={settings:{darkMode:!0,videoBackground:!0}};var $n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Wn.a:return e.payload;default:return n}},ne=Object(Pn.c)({search:Gn,searchResult:Xn,settings:$n}),ee=t(14),te=t.n(ee),re=t(25),ae=t(42),oe=t(53),ie=t(54),ce=function(){function n(){Object(oe.a)(this,n),this.mainURL=void 0,this.API_KEY=void 0,this.videosURL=void 0,this.commentsURL=void 0,this.API_KEY="key=".concat("AIzaSyAF9sQnfvSLZ0WeXWqR7bp7qBQBNCTyu5Q"),this.mainURL="https://www.googleapis.com/youtube/v3/",this.videosURL="".concat(this.mainURL,"search?").concat(this.API_KEY,"&type=video&part=snippet&maxResults=").concat(L.b,"&fullscreen=1&q="),this.commentsURL="".concat(this.mainURL,"commentThreads?").concat(this.API_KEY,"&part=snippet&maxResults=").concat(L.a,"&videoId=")}return Object(ie.a)(n,[{key:"getVideos",value:function(n){return this.fetchVideos(n)}},{key:"getComments",value:function(n){return this.fetchComments(n)}},{key:"fetchVideos",value:function(){var n=Object(ae.a)(te.a.mark((function n(e){var t,r;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=this.videosURL+e,n.next=4,fetch(t);case 4:return n.next=6,n.sent.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",{massage:n.t0.massage,error:!0});case 13:case"end":return n.stop()}}),n,this,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchComments",value:function(){var n=Object(ae.a)(te.a.mark((function n(e){var t,r,a,o;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.videoId,r=e.nextPageToken,n.prev=1,a=this.commentsURL+t,r&&(a=a+"&pageToken="+r),n.next=6,fetch(a);case 6:return n.next=8,n.sent.json();case 8:return o=n.sent,n.abrupt("return",o);case 12:return n.prev=12,n.t0=n.catch(1),n.abrupt("return",{massage:n.t0.massage,error:!0});case 15:case"end":return n.stop()}}),n,this,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()}]),n}(),se=te.a.mark(fe),ue=te.a.mark(pe),le=te.a.mark(be),de=te.a.mark(he),me=te.a.mark(ge);function fe(n){var e,t;return te.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,new ce;case 2:return e=r.sent,r.next=5,e.getVideos(n.payload);case 5:if(!(t=r.sent).error||!t.massage){r.next=11;break}return r.next=9,he(t);case 9:r.next=19;break;case 11:if(!t.error||t.massage){r.next=16;break}return r.next=14,be();case 14:r.next=19;break;case 16:if(t.error){r.next=19;break}return r.next=19,Object(re.b)(l.a.searchResultsActions.addVideosToState(t));case 19:case"end":return r.stop()}}),se)}function pe(n){var e,t;return te.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,new ce;case 2:return e=r.sent,r.next=5,e.getComments(n.payload);case 5:if(!(t=r.sent).error||!t.massage){r.next=11;break}return r.next=9,he(t);case 9:r.next=19;break;case 11:if(!t.error||t.massage){r.next=16;break}return r.next=14,be();case 14:r.next=19;break;case 16:if(t.error){r.next=19;break}return r.next=19,Object(re.b)(l.a.searchResultsActions.addCommentsToState(t));case 19:case"end":return r.stop()}}),ue)}function be(){return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(re.b)(l.a.searchResultsActions.addErrorsAction({message:"Something goes wrong",error:{error:!0}}));case 2:case"end":return n.stop()}}),le)}function he(n){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.b)(l.a.searchResultsActions.addErrorsAction({message:n.massage,error:{error:n.error}}));case 2:case"end":return e.stop()}}),de)}function ge(){return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(re.a)([Object(re.c)(qn.c,fe),Object(re.c)(qn.a,pe)]);case 2:case"end":return n.stop()}}),me)}var xe=ge,ve=Object(Yn.a)(),Oe=Object(Pn.e)(ne,Object(Pn.a)(ve));ve.run(xe),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:Oe},a.a.createElement(Mn.a,null,a.a.createElement(Bn,null)))),document.getElementById("root"))}},[[57,2,3]]]);
//# sourceMappingURL=main.e8ef1819.chunk.js.map