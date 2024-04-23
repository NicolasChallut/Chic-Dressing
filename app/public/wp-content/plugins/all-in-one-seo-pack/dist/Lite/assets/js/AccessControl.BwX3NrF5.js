import{u as v,n as B,f as x}from"./links.rndHrQjc.js";import{s as a,_ as s}from"./default-i18n.Bd0Z306Z.js";import{x as i,o as c,c as _,C as l,m as r,a as S,t as u,D as p,F as w,K as L,l as h,d as C}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as b}from"./_plugin-vue_export-helper.BN1snXvA.js";import{C as U}from"./Blur.DNVDismY.js";import{C as P}from"./Card.DD8bdJAp.js";import{C as D}from"./ProBadge.WwPkDor4.js";import{C as M}from"./SettingsRow.DQldd-1Z.js";import{C as N}from"./Index.XNbBlAFo.js";import"./helpers.BYd0a-KO.js";import"./Tooltip.Jp05nfCy.js";import"./Caret.iRBf3wcH.js";import"./index.BQgiQQKQ.js";import"./Slide.CRIn0kdn.js";import"./Row.CzuhYwfs.js";import"./constants.DpuIWwJ9.js";const e="all-in-one-seo-pack",V=()=>{const t={tooltip:a(s("By default, only Administrators have permission to manage %1$s within WordPress. With Access Controls, you can easily extend access permissions to other user roles.",e),"AIOSEO"),accessControl:s("Access Control Settings",e),useDefaultSettings:s("Use Default Settings",e)},o=[{label:s("Administrator",e),name:"administrator",description:a(s("By default Admins have access to %1$sall SEO site settings%2$s",e),"<strong>","</strong>")},{label:s("Editor",e),name:"editor",description:a(s("By default Editors have access to %1$sSEO settings for General Settings, Search Appearance, Social Networks, and Redirects as well as all settings for individual pages and posts.%2$s",e),"<strong>","</strong>")},{label:s("Author",e),name:"author",description:a(s("By default Authors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",e),"<strong>","</strong>")},{label:s("Contributor",e),name:"contributor",description:a(s("By default Contributors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",e),"<strong>","</strong>")},{label:s("SEO Manager",e),name:"seoManager",description:a(s("By default SEO Managers have access to %1$sSEO settings for General Settings, Sitemaps, Link Assistant, Redirects, Local SEO, and individual pages and posts.%2$s",e),"<strong>","</strong>")},{label:s("SEO Editor",e),name:"seoEditor",description:a(s("By default SEO Editors have access to %1$sSEO settings for individual pages and posts.%2$s",e),"<strong>","</strong>")}];return{strings:t,roles:o}},F={computed:{getRoles(){const t=v();return this.roles.concat(Object.keys(t.aioseo.user.customRoles).map(o=>({label:t.aioseo.user.roles[o],name:o,description:this.$t.sprintf(this.$t.__("By default the %1$s role %2$shas no access%3$s to %4$s settings.",this.$td),t.aioseo.user.roles[o],"<strong>","</strong>","All in One SEO"),dynamic:!0})))}}},G={setup(){const{strings:t,roles:o}=V();return{composableStrings:t,roles:o}},components:{CoreBlur:U,CoreCard:P,CoreProBadge:D,CoreSettingsRow:M,Cta:N},mixins:[F],data(){return{strings:B(this.composableStrings,{wpRoles:this.$t.__("WP Roles (Editor, Author)",this.$td),seoManagerRole:this.$t.__("SEO Manager Role",this.$td),seoEditorRole:this.$t.__("SEO Editor Role",this.$td),defaultSettings:this.$t.__("Default settings that just work",this.$td),granularControl:this.$t.__("Granular controls per role",this.$td),ctaButtonText:this.$t.__("Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is a %1$s Feature",this.$td),"PRO")})}},computed:{getLiteRoles(){const t=this.getRoles;let o=1;for(;8>t.length;)t.push({label:this.$t.__("Custom Role",this.$td)+" "+o,name:"customRole"+o}),o++;return t}}},T={class:"aioseo-access-control-lite"},W={class:"toggle"};function j(t,o,E,d,n,f){const g=i("core-pro-badge"),m=i("base-toggle"),A=i("core-settings-row"),R=i("core-blur"),O=i("cta"),k=i("core-card");return c(),_("div",T,[l(k,{slug:"accessControl"},{header:r(()=>[S("span",null,u(n.strings.accessControl),1),l(g)]),tooltip:r(()=>[p(u(n.strings.tooltip),1)]),default:r(()=>[l(R,null,{default:r(()=>[(c(!0),_(w,null,L(f.getLiteRoles,$=>(c(),h(A,{key:$.name,name:$.label},{content:r(()=>[S("div",W,[l(m,{disabled:!0,modelValue:!0},{default:r(()=>[p(u(n.strings.useDefaultSettings),1)]),_:1})])]),_:2},1032,["name"]))),128))]),_:1}),l(O,{"feature-list":[n.strings.granularControl,n.strings.wpRoles,n.strings.seoManagerRole,n.strings.seoEditorRole],"cta-link":t.$links.getPricingUrl("access-control","access-control-upsell"),"button-text":n.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("access-control",null,t.$isPro?"pricing":"liteUpgrade"),"align-top":""},{"header-text":r(()=>[p(u(n.strings.ctaHeader),1)]),description:r(()=>[p(u(n.strings.tooltip),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link"])]),_:1})])}const y=b(G,[["render",j]]),H={setup(){return{licenseStore:x()}},components:{AccessControl:y,AccessControlLite:y}},I={class:"aioseo-access-control"};function K(t,o,E,d,n,f){const g=i("access-control",!0),m=i("access-control-lite");return c(),_("div",I,[d.licenseStore.isUnlicensed?C("",!0):(c(),h(g,{key:0})),d.licenseStore.isUnlicensed?(c(),h(m,{key:1})):C("",!0)])}const lt=b(H,[["render",K]]);export{lt as default};
