(function(){"use strict";var e={4285:function(e,t,n){var r={};n.r(r),n.d(r,{ArrowSlideSvg:function(){return yt},ArrowSvg:function(){return Me},CloseSvg:function(){return dt},ForkSvg:function(){return ze},HomeSvg:function(){return Se},LogoSvg:function(){return nt},LogoutSvg:function(){return De},SpinnerSvg:function(){return Ct},StarSvg:function(){return Oe}});var o=n(9242),s=n(3396);function a(e,t,n,r,o,a){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}var i={name:"App"},c=n(7477);const d=(0,c.Z)(i,[["render",a]]);var l=d,p=n(678);const u={class:"wrapper"},v={class:"header"},m={class:"x-container"},g={class:"header__content"},C={class:"app-slider"};function _(e,t,n,r,o,a){const i=(0,s.up)("my-icon"),c=(0,s.up)("router-link"),d=(0,s.up)("stories-slider");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("header",v,[(0,s._)("div",m,[(0,s._)("div",g,[(0,s.Wm)(c,{class:"header__content-link",to:{name:"feeds"}},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"header__content-stories",name:"LogoSvg"})])),_:1}),(0,s.Wm)(c,{class:"header__content-link",to:{name:"feeds"}},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"header__content-close",name:"CloseSvg"})])),_:1})])])]),(0,s._)("div",C,[(0,s.Wm)(d,{initialSlide:Number(e.$route.params.initialSlide)},null,8,["initialSlide"])])])}var h=n(7139);const f={class:"c-stories-slider"},w={class:"stories__container"},S={class:"stories__list",ref:"slider"};function L(e,t,n,r,o,a){const i=(0,s.up)("slider-component");return(0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("div",w,[(0,s._)("ul",S,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.trendings,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{class:(0,h.C_)(["stories__item",{active:o.slideNdx===n}]),key:t.id,ref_for:!0,ref:"trending"},[(0,s.Wm)(i,{data:a.getStory(t),active:o.slideNdx===n,startProgress:o.readyForProgress,loading:o.slideNdx===n&&o.loading,btnsShow:a.activeBtns,onOnNextSlide:e=>a.handleSlide(n+1),onOnPrevSlide:e=>a.handleSlide(n-1),onOnProgressFinish:e=>a.handleSlide(n+1),initialSlide:e.$route.params.initialSlide},null,8,["data","active","startProgress","loading","btnsShow","onOnNextSlide","onOnPrevSlide","onOnProgressFinish","initialSlide"])],2)))),128))],512)])])}const y=["id"],A={class:"slider__head"},b={class:"slider__head-progress"},x={class:"slider__head-user"},k={class:"slider__content"},D={key:0,class:"slider__load"},Z={key:1,class:"info"},H=["innerHTML"],V={class:"slider__button"},I={class:"icon"},T={class:"icon"};function P(e,t,n,r,o,a){const i=(0,s.up)("progress-component"),c=(0,s.up)("user-git"),d=(0,s.up)("spinner-component"),l=(0,s.up)("placeholder-component"),p=(0,s.up)("button-component"),u=(0,s.up)("my-icon");return(0,s.wg)(),(0,s.iD)("div",{id:n.data.id,class:(0,h.C_)(["x-slider__item",{active:n.active}])},[(0,s._)("div",A,[(0,s._)("div",b,[(0,s.Wm)(i,{active:n.active,startProgress:n.startProgress,onOnFinish:t[0]||(t[0]=t=>e.$emit("onProgressFinish"))},null,8,["active","startProgress"])]),(0,s._)("div",x,[(0,s.Wm)(c,{name:n.data.name,avatar:n.data.avatar},null,8,["name","avatar"])])]),(0,s._)("div",k,[n.loading?((0,s.wg)(),(0,s.iD)("div",D,[(0,s.Wm)(d)])):((0,s.wg)(),(0,s.iD)("div",Z,[n.data.content?.length?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"slider__content-text",innerHTML:n.data.content},null,8,H)):((0,s.wg)(),(0,s.j4)(l,{key:1,paragraphs:2}))]))]),(0,s._)("div",V,[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" Follow ")])),_:1})]),n.active?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[n.btnsShow.includes("next")?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-next",onClick:t[1]||(t[1]=t=>e.$emit("onNextSlide"))},[(0,s._)("span",I,[(0,s.Wm)(u,{name:"ArrowSlideSvg"})])])):(0,s.kq)("",!0),n.btnsShow.includes("prev")?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"btn btn-prev",onClick:t[2]||(t[2]=t=>e.$emit("onPrevSlide"))},[(0,s._)("span",T,[(0,s.Wm)(u,{name:"ArrowSlideSvg"})])])):(0,s.kq)("",!0)],64)):(0,s.kq)("",!0)],10,y)}const M={ref:"indicator",class:"indicator"};function R(e,t,n,r,o,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,h.C_)([{active:n.active&&n.startProgress},"c-progress"])},[(0,s._)("div",M,null,512)],2)}var W={name:"ProgressComponent",emits:["onFinish"],props:{active:Boolean,startProgress:Boolean},data(){return{}},methods:{emitOnfinish(){console.log("ese"),this.$emit("onFinish")}},mounted(){this.$nextTick((()=>{setTimeout((()=>{}),0)})),this.$refs.indicator.addEventListener("transitionend",this.emitOnfinish),console.log("esmu")},beforeUnmount(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnfinish)}};const N=(0,c.Z)(W,[["render",R],["__scopeId","data-v-1da91bce"]]);var E=N;const U=["data-hover-text"],j={class:"btn__inner"};function O(e,t,n,r,o,a){return(0,s.wg)(),(0,s.iD)("button",{class:(0,h.C_)(["c-button","theme-green",{"hover-text":a.withHoverText}]),"data-hover-text":n.hoverText},[(0,s._)("span",j,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])],10,U)}var B={name:"ButtonComponent",props:{hoverText:{type:String}},computed:{withHoverText(){return console.log(this.hoverText?.length),this.hoverText?.length}}};const q=(0,c.Z)(B,[["render",O],["__scopeId","data-v-47107a6d"]]);var F=q;const G={class:"user__git-wrap"},J={class:"avatar__wrap"},Y={class:"post__item-name"};function z(e,t,n,r,o,a){const i=(0,s.up)("avatar-user");return(0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",J,[(0,s.Wm)(i,{avatar:n.avatar,alt:"avatar",class:"post__item-avatar"},null,8,["avatar"])]),(0,s._)("span",Y,(0,h.zw)(n.name),1)])}const K=["src"];function Q(e,t,n,r,o,a){return(0,s.wg)(),(0,s.iD)("img",{src:n.avatar,alt:"avatar",class:"header__users-avatar"},null,8,K)}var X={name:"AvatarUser",props:{avatar:{type:String,required:!0}}};const $=(0,c.Z)(X,[["render",Q],["__scopeId","data-v-1f989c3f"]]);var ee=$,te={name:"UserGit",components:{AvatarUser:ee},props:{name:{type:String,required:!0},avatar:{type:String,required:!0}}};const ne=(0,c.Z)(te,[["render",z],["__scopeId","data-v-c5f20962"]]);var re=ne;const oe=e=>((0,s.dD)("data-v-f965a212"),e=e(),(0,s.Cn)(),e),se={class:"placeholder"},ae=oe((()=>(0,s._)("div",{class:"mainpic"},null,-1))),ie=oe((()=>(0,s._)("div",{class:"item"},null,-1))),ce=[ie];function de(e,t,n,r,o,a){return(0,s.wg)(),(0,s.iD)("div",se,[ae,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.paragraphs,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"content",key:e},ce)))),128))])}var le={name:"PaceholderComponent",props:{paragraphs:{type:Number,default:1}}};const pe=(0,c.Z)(le,[["render",de],["__scopeId","data-v-f965a212"]]);var ue=pe;function ve(e,t,n,r,o,a){const i=(0,s.up)("my-icon");return(0,s.wg)(),(0,s.iD)("div",{class:(0,h.C_)(["spinner",{btn:n.btn}])},[(0,s.Wm)(i,{name:"SpinnerSvg"})],2)}function me(e,t,n,r,o,a){return(0,s.wg)(),(0,s.j4)((0,s.LL)(n.name))}const ge={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ce=(0,s._)("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),_e=[Ce];function he(e,t){return(0,s.wg)(),(0,s.iD)("svg",ge,_e)}const fe={},we=(0,c.Z)(fe,[["render",he]]);var Se=we;const Le={preserveAspectRatio:"none",viewBox:"0 0 26 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ye=(0,s._)("path",{d:"M13 0.942731V8.625L13.0007 9.25621L22.3025 9.255L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4813 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z",fill:"currentColor"},null,-1),Ae=[ye];function be(e,t){return(0,s.wg)(),(0,s.iD)("svg",Le,Ae)}const xe={},ke=(0,c.Z)(xe,[["render",be]]);var De=ke;const Ze={width:"10",height:"6",viewBox:"0 0 10 6",xmlns:"http://www.w3.org/2000/svg"},He=(0,s._)("path",{d:"M9.79959 5.26034C9.51774 5.56387 9.04319 5.58144 8.73966 5.29959L5 1.77348L1.26033 5.29959C0.956802 5.58144 0.482254 5.56387 0.200401 5.26034C-0.0814505 4.9568 -0.0638752 4.48225 0.239658 4.2004L4.48966 0.200402C4.77742 -0.0668049 5.22257 -0.0668049 5.51033 0.200402L9.76034 4.2004C10.0639 4.48225 10.0814 4.9568 9.79959 5.26034Z",fill:"currenColor"},null,-1),Ve=[He];function Ie(e,t){return(0,s.wg)(),(0,s.iD)("svg",Ze,Ve)}const Te={},Pe=(0,c.Z)(Te,[["render",Ie]]);var Me=Pe;const Re={preserveAspectRatio:"none",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},We=(0,s._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"currentColor"},null,-1),Ne=[We];function Ee(e,t){return(0,s.wg)(),(0,s.iD)("svg",Re,Ne)}const Ue={},je=(0,c.Z)(Ue,[["render",Ee]]);var Oe=je;const Be={preserveAspectRatio:"none",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},qe=(0,s._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"currentColor"},null,-1),Fe=[qe];function Ge(e,t){return(0,s.wg)(),(0,s.iD)("svg",Be,Fe)}const Je={},Ye=(0,c.Z)(Je,[["render",Ge]]);var ze=Ye;const Ke={id:"logo",preserveAspectRatio:"none",viewBox:"0 0 175 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Qe=(0,s.uE)('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="currentColor"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="currentColor"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="currentColor"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="currentColor"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="currentColor"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="currentColor"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="currentColor"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="currentColor"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="currentColor"></path>',9),Xe=[Qe];function $e(e,t){return(0,s.wg)(),(0,s.iD)("svg",Ke,Xe)}const et={},tt=(0,c.Z)(et,[["render",$e]]);var nt=tt;const rt={preserveAspectRatio:"none",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ot=(0,s._)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"currentColor"},null,-1),st=[ot];function at(e,t){return(0,s.wg)(),(0,s.iD)("svg",rt,st)}const it={},ct=(0,c.Z)(it,[["render",at]]);var dt=ct;const lt={preserveAspectRatio:"none",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pt=(0,s._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.0049 10.0024C18.0049 5.58281 14.4221 2 10.0024 2C9.45015 2 9.00243 1.55228 9.00243 1C9.00243 0.447715 9.45015 0 10.0024 0C15.5266 0 20.0049 4.47824 20.0049 10.0024C20.0049 15.5266 15.5266 20.0049 10.0024 20.0049C4.47824 20.0049 0 15.5266 0 10.0024C0 9.45015 0.447716 9.00243 1 9.00243C1.55228 9.00243 2 9.45015 2 10.0024C2 14.4221 5.58281 18.0049 10.0024 18.0049C14.4221 18.0049 18.0049 14.4221 18.0049 10.0024Z",fill:"currentColor"},null,-1),ut=[pt];function vt(e,t){return(0,s.wg)(),(0,s.iD)("svg",lt,ut)}const mt={},gt=(0,c.Z)(mt,[["render",vt]]);var Ct=gt;const _t={preserveAspectRatio:"none",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ht=(0,s._)("path",{d:"M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z",fill:"currentColor"},null,-1),ft=[ht];function wt(e,t){return(0,s.wg)(),(0,s.iD)("svg",_t,ft)}const St={},Lt=(0,c.Z)(St,[["render",wt]]);var yt=Lt,At={name:"MyIcon",components:{...r},props:{name:{type:String,required:!0,validator(e){return Object.keys(r).includes(e)}}}};const bt=(0,c.Z)(At,[["render",me]]);var xt=bt,kt={name:"SpinnerComponent",components:{MyIcon:xt},props:{btn:Boolean}};const Dt=(0,c.Z)(kt,[["render",ve],["__scopeId","data-v-7d970186"]]);var Zt=Dt,Ht={name:"SliderComponent",emits:["onProgressFinish","onNextSlide","onPrevSlide"],components:{ProgressComponent:E,ButtonComponent:F,UserGit:re,PlaceholderComponent:ue,SpinnerComponent:Zt,MyIcon:xt},props:{active:Boolean,loading:Boolean,startProgress:Boolean,btnsShow:{type:Array,default:()=>["next","prev"],validator(e){return e.every((e=>"next"===e||"prev"===e))},initialSlide:{type:Number}},data:{type:Object,required:!0}}};const Vt=(0,c.Z)(Ht,[["render",P],["__scopeId","data-v-447c5654"]]);var It=Vt,Tt=n(65),Pt={name:"StoriesSlider",components:{SliderComponent:It},props:{initialSlide:{type:Number}},data(){return{slideNdx:0,sliderPosition:0,loading:!1,btnsShow:!0,readyForProgress:!0}},computed:{...(0,Tt.rn)({trendings:e=>e.trendings.trendings}),activeBtns(){return!1===this.btnsShow?[]:0===this.slideNdx?["next"]:this.slideNdx===this.trendings.length-1?["prev"]:["next","prev"]}},methods:{...(0,Tt.nv)({getTrendings:"trendings/getTrendings",fetchReadme:"trendings/fetchReadme"}),async fetchReadmeForActive(){const{id:e,owner:t,name:n}=this.trendings[this.slideNdx];await this.fetchReadme({id:e,owner:t.login,repo:n})},getStory(e){return{id:e.id,avatar:e.owner.avatar_url,name:e.owner.login,content:e.readme}},moveSlider(e){const{slider:t}=this.$refs,n=this.$refs.trending[e],r=parseInt(getComputedStyle(n).width,10);this.slideNdx=e,this.sliderPosition=-r*e,t.style.transform=`translateX(${this.sliderPosition}px)`},async loadReadme(){this.loading=!0,this.btnsShow=!1,this.readyForProgress=!1;try{await this.fetchReadmeForActive()}catch(e){console.log(e)}finally{this.loading=!1,this.btnsShow=!0,this.readyForProgress=!0}},async handleSlide(e){this.moveSlider(e),await this.loadReadme()}},async mounted(){if(this.initialSlide){const e=this.trendings.findIndex((e=>e.id===this.initialSlide));await this.handleSlide(e)}await this.getTrendings(),await this.loadReadme()}};const Mt=(0,c.Z)(Pt,[["render",L],["__scopeId","data-v-00e7b84b"]]);var Rt=Mt,Wt={name:"StoriesPage",components:{StoriesSlider:Rt,MyIcon:xt}};const Nt=(0,c.Z)(Wt,[["render",_],["__scopeId","data-v-5aac3944"]]);var Et=Nt;n(7658);const Ut={class:"header__top-content"},jt={class:"header__users"},Ot={class:"header__users-list"},Bt=["id"],qt={class:"posts"},Ft={class:"container"},Gt={class:"posts__list"},Jt={class:"post__item-content"},Yt={class:"post__content"};function zt(e,t,n,r,o,a){const i=(0,s.up)("header-top"),c=(0,s.up)("header-users-item"),d=(0,s.up)("header-component"),l=(0,s.up)("post-item-git"),p=(0,s.up)("posts-git");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("header",null,[(0,s.Wm)(d,null,(0,s.Nv)({"header-top":(0,s.w5)((()=>[(0,s._)("div",Ut,[(0,s.Wm)(i)])])),_:2},[e.trendings.length?{name:"content",fn:(0,s.w5)((()=>[(0,s._)("div",jt,[(0,s._)("ul",Ot,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.trendings,(t=>((0,s.wg)(),(0,s.iD)("li",{class:"header__users-item",key:t.id,id:t.id},[(0,s.Wm)(c,{avatar:t.owner.avatar_url,name:t.owner.login,onOnPress:n=>e.$router.push({name:"stories",params:{initialSlide:t.id}})},null,8,["avatar","name","onOnPress"])],8,Bt)))),128))])])])),key:"0"}:void 0]),1024)]),(0,s._)("div",qt,[(0,s._)("div",Ft,[(0,s._)("ul",Gt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.trendings,(e=>((0,s.wg)(),(0,s.j4)(p,{key:e.id,id:e.id,name:e.owner.login,avatar:e.owner.avatar_url,date:e.created_at},{post:(0,s.w5)((()=>[(0,s._)("div",Jt,[(0,s._)("div",Yt,[(0,s.Wm)(l,{name:e.name,description:e.description,star:e.stargazers_count,fork:e.forks},null,8,["name","description","star","fork"])])])])),_:2},1032,["id","name","avatar","date"])))),128))])])])],64)}const Kt={class:"header"},Qt={class:"x-container"},Xt={class:"header__top"},$t={key:0,class:"header__users"};function en(e,t,n,r,o,a){return(0,s.wg)(),(0,s.iD)("div",Kt,[(0,s._)("div",Qt,[(0,s._)("div",Xt,[(0,s.WI)(e.$slots,"header-top",{},void 0,!0)]),e.$slots.content?((0,s.wg)(),(0,s.iD)("div",$t,[(0,s.WI)(e.$slots,"content",{},void 0,!0)])):(0,s.kq)("",!0)])])}var tn={name:"HeaderComponent"};const nn=(0,c.Z)(tn,[["render",en],["__scopeId","data-v-779ed56a"]]);var rn=nn;const on={class:"header__users--border"},sn={class:"header__users-wrap"},an={class:"header__users-name"};function cn(e,t,n,r,a,i){const c=(0,s.up)("avatar-user");return(0,s.wg)(),(0,s.iD)("div",{class:"header__users-link",onClick:t[0]||(t[0]=(0,o.iM)((t=>e.$emit("onPress")),["prevent"]))},[(0,s._)("div",on,[(0,s._)("div",sn,[(0,s.Wm)(c,{avatar:n.avatar},null,8,["avatar"])])]),(0,s._)("span",an,(0,h.zw)(n.name),1)])}var dn={name:"HeaderUserItem",emits:["onPress"],components:{AvatarUser:ee},props:{avatar:{type:String,required:!0},name:{type:String,required:!0}}};const ln=(0,c.Z)(dn,[["render",cn],["__scopeId","data-v-11b7e7d0"]]);var pn=ln;const un={class:"x-post-content"},vn={class:"post__content-text"},mn={class:"post__item-title"},gn={class:"post__item-subtitle"},Cn={class:"post__content-info"};function _n(e,t,n,r,o,a){const i=(0,s.up)("stats-git");return(0,s.wg)(),(0,s.iD)("div",un,[(0,s._)("div",vn,[(0,s._)("h2",mn,(0,h.zw)(n.name),1),(0,s._)("p",gn,(0,h.zw)(n.description),1)]),(0,s._)("div",Cn,[(0,s.Wm)(i,{star:n.star,fork:n.fork},null,8,["star","fork"])])])}const hn={class:"x-post__content-info"},fn={class:"post__info post__info-star"},wn={class:"post__info-btn"},Sn={class:"post__info-icon"},Ln={class:"post__info-counter"},yn={class:"post__info post__info-fork"},An={class:"post__info-btn"},bn={class:"post__info-icon"},xn={class:"post__info-counter"};function kn(e,t,n,r,o,a){const i=(0,s.up)("my-icon");return(0,s.wg)(),(0,s.iD)("div",hn,[(0,s._)("div",fn,[(0,s._)("button",wn,[(0,s._)("div",Sn,[(0,s.Wm)(i,{name:"StarSvg"})]),(0,s.Uk)(" Star ")]),(0,s._)("div",Ln,(0,h.zw)(n.star),1)]),(0,s._)("div",yn,[(0,s._)("button",An,[(0,s._)("div",bn,[(0,s.Wm)(i,{name:"ForkSvg"})]),(0,s.Uk)(" Fork ")]),(0,s._)("div",xn,(0,h.zw)(n.fork),1)])])}var Dn={name:"StatsGit",props:{star:{type:Number,required:!0},fork:{type:Number,required:!0}},components:{MyIcon:xt}};const Zn=(0,c.Z)(Dn,[["render",kn],["__scopeId","data-v-32a1dd84"]]);var Hn=Zn,Vn={name:"PostItemGit",components:{StatsGit:Hn},props:{name:{type:String,required:!0},description:{type:String},star:{type:Number,required:!0},fork:{type:Number,required:!0}}};const In=(0,c.Z)(Vn,[["render",_n],["__scopeId","data-v-7c93ac9a"]]);var Tn=In;const Pn={class:"posts__item"},Mn={class:"post__item-user"},Rn={class:"c-post__item-content"},Wn={class:"post__item-toggler"},Nn={class:"post__comments"},En={class:"post__comments-list"},Un={class:"post__date"};function jn(e,t,n,r,a,i){const c=(0,s.up)("UserGit"),d=(0,s.up)("toggler-view"),l=(0,s.up)("comment-item");return(0,s.wg)(),(0,s.iD)("li",Pn,[(0,s._)("div",Mn,[(0,s.Wm)(c,{avatar:n.avatar,name:n.name},null,8,["avatar","name"])]),(0,s._)("div",Rn,[(0,s.WI)(e.$slots,"post",{},void 0,!0)]),(0,s._)("div",Wn,[(0,s.Wm)(d,{onOnToggle:i.onToggle},null,8,["onOnToggle"])]),(0,s.wy)((0,s._)("div",Nn,[(0,s._)("ul",En,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(2,(e=>(0,s._)("li",{class:"post__comments-item",key:e},[(0,s.Wm)(l)]))),64))])],512),[[o.F8,a.isShow]]),(0,s._)("div",Un,(0,h.zw)(i.formatDate),1)])}const On={class:"post__btn-toggle"};function Bn(e,t,n,r,o,a){const i=(0,s.up)("my-icon");return(0,s.wg)(),(0,s.iD)("button",{class:(0,h.C_)(["post__item-btn",{active:o.isActive}]),onClick:t[0]||(t[0]=(...e)=>a.toggle&&a.toggle(...e))},[(0,s._)("span",On,(0,h.zw)(o.isActive?"Hide":"View")+" issues",1),(0,s.Wm)(i,{class:"post__btn-arrow",name:"ArrowSvg"})],2)}var qn={name:"TogglerView",components:{MyIcon:xt},emits:["onToggle"],data(){return{isActive:!1}},methods:{toggle(){this.isActive=!this.isActive,this.$emit("onToggle",this.isActive)}}};const Fn=(0,c.Z)(qn,[["render",Bn],["__scopeId","data-v-a1dbd8da"]]);var Gn=Fn;const Jn=e=>((0,s.dD)("data-v-4c9a2cc0"),e=e(),(0,s.Cn)(),e),Yn=Jn((()=>(0,s._)("span",{class:"post__comments-nick"},"joshua_l",-1)));function zn(e,t,n,r,o,a){return(0,s.wg)(),(0,s.iD)("p",null,[Yn,(0,s.Uk)("Enable performance measuring in production, at the user's request")])}var Kn={name:"CommentItem",props:{}};const Qn=(0,c.Z)(Kn,[["render",zn],["__scopeId","data-v-4c9a2cc0"]]);var Xn=Qn;const $n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var er={name:"PostsGit",components:{UserGit:re,TogglerView:Gn,CommentItem:Xn},props:{name:{type:String,required:!0},avatar:{type:String,required:!0},date:{type:String,required:!0}},data(){return{isShow:!1}},methods:{onToggle(e){this.isShow=e}},computed:{formatDate(){const e=this.date.split(/-|T/).splice(0,3).reverse(),t=`${e[0]} ${$n[e[1]-1]}  `;return t}}};const tr=(0,c.Z)(er,[["render",jn],["__scopeId","data-v-2ecc7458"]]);var nr=tr,rr="data:image/png;base64,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";const or=e=>((0,s.dD)("data-v-e70c38c0"),e=e(),(0,s.Cn)(),e),sr={class:"x-header-top"},ar={class:"header__top-wrap"},ir={class:"header__top-list"},cr={class:"header__top-item"},dr={href:"#",class:"header__top-link"},lr={class:"header__top-icon"},pr=or((()=>(0,s._)("li",{class:"header__top-item"},[(0,s._)("a",{href:"#",class:"header__top-link"},[(0,s._)("img",{src:rr,alt:"home",class:"header__top-avatar"})])],-1))),ur={class:"header__top-item"},vr={href:"#",class:"header__top-link"},mr={class:"header__top-icon"};function gr(e,t,n,r,o,a){const i=(0,s.up)("my-icon"),c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",sr,[(0,s.Wm)(c,{to:{name:"feeds"},class:"header__top-logo"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{name:"LogoSvg"})])),_:1}),(0,s._)("div",ar,[(0,s._)("ul",ir,[(0,s._)("li",cr,[(0,s._)("a",dr,[(0,s._)("div",lr,[(0,s.Wm)(i,{name:"HomeSvg"})])])]),pr,(0,s._)("li",ur,[(0,s._)("a",vr,[(0,s._)("div",mr,[(0,s.Wm)(i,{name:"LogoutSvg"})])])])])])])}var Cr={name:"HeaderTop",components:{MyIcon:xt}};const _r=(0,c.Z)(Cr,[["render",gr],["__scopeId","data-v-e70c38c0"]]);var hr=_r,fr={name:"MyFeeds",components:{HeaderComponent:rn,HeaderUsersItem:pn,PostsGit:nr,PostItemGit:Tn,HeaderTop:hr},data(){return{}},methods:{fetchUserName(e){console.log(e.id)},...(0,Tt.nv)({getTrendings:"trendings/getTrendings"})},computed:{...(0,Tt.rn)({trendings:e=>e.trendings.trendings})},async mounted(){await this.getTrendings()}};const wr=(0,c.Z)(fr,[["render",zt],["__scopeId","data-v-47200c18"]]);var Sr=wr,Lr=[{path:"/feeds",component:Sr,name:"feeds"},{path:"/stories",component:Et,name:"stories"}],yr=(0,p.p7)({history:(0,p.r5)(),routes:Lr}),Ar=n(6943);const br="https://api.github.com",xr=({url:e,method:t="get",data:n={},headers:r={}})=>(0,Ar.Z)({url:e,method:t,data:n,baseURL:br,headers:r}),kr=e=>e<10?`0${e}`:e,Dr=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),o=[r.getFullYear(),kr(r.getMonth()+1),kr(r.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${o}`),xr({url:`/search/repositories?${t}`})},Zr=({owner:e,repo:t})=>{const n="application/vnd.github.v3.html+json";return xr({url:`/repos/${e}/${t}/readme`,headers:{accept:n}})};var Hr={namespaced:!0,state:{trendings:[]},getters:{getRepoById:e=>t=>e.trendings.find((e=>e.id===t))},mutations:{SET_TRENDINGS(e,t){e.trendings=t},SET_README:(e,t)=>{e.trendings=e.trendings.map((e=>(t.id===e.id&&(e.readme=t.content),e)))}},actions:{async getTrendings({commit:e,rootState:t}){try{const{data:t}=await Dr();e("SET_TRENDINGS",t.items)}catch(n){console.log(n)}},async fetchReadme({commit:e,getters:t},{id:n,owner:r,repo:o}){const s=t.getRepoById(n);if(void 0===s.readme)try{const{data:t}=await Zr({owner:r,repo:o});e("SET_README",{id:n,content:t})}catch(a){throw console.log(a),a}}}},Vr=(0,Tt.MT)({modules:{trendings:Hr}});const Ir=(0,o.ri)(l);Ir.use(Vr),Ir.use(yr),Ir.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],s=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,a=r[0],i=r[1],c=r[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(t&&t(r);d<a.length;d++)s=a[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self["webpackChunkgitogram1"]=self["webpackChunkgitogram1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4285)}));r=n.O(r)})();
//# sourceMappingURL=app.808c2e6d.js.map