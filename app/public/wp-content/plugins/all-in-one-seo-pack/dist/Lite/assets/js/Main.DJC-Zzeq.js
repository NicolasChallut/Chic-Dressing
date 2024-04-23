import{u as D,a as O,D as B,v as N}from"./links.rndHrQjc.js";import V from"./BadBotBlocker.C08Uq4ol.js";import{C as I}from"./Index.Dm8ivQTm.js";import E from"./DatabaseTools.DcoQl73e.js";import{C as R,S as U}from"./Caret.iRBf3wcH.js";import{C as Y}from"./Card.DD8bdJAp.js";import{C as H}from"./Tabs.DAwM7Jx9.js";import{C as K}from"./Index.B2NJt47b.js";import{C as z}from"./Upload.BGb900n8.js";import{C as G}from"./SettingsRow.DQldd-1Z.js";import{B as P}from"./Checkbox.D2dfpbIi.js";import{G as F,a as W}from"./Row.CzuhYwfs.js";import{x as a,o as n,c as h,C as p,m as d,F as M,K as T,l as g,D as w,t as m,a as l,d as v,v as C,G as q}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as A}from"./_plugin-vue_export-helper.BN1snXvA.js";import j from"./HtaccessEditor.CKxtoJSL.js";import J from"./ImportExport.octWfl1e.js";import Q from"./RobotsEditor.C6DAFGyo.js";import X from"./SystemStatus.D0gQIDCZ.js";import Z from"./WpCode.BIlbp50a.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.BYd0a-KO.js";import"./Textarea.BgYpy-yd.js";import"./Tooltip.Jp05nfCy.js";import"./index.BQgiQQKQ.js";import"./Slide.CRIn0kdn.js";import"./license.CFrwgEU2.js";import"./upperFirst.cYf2npu2.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.CPCYjjV1.js";import"./allowed.BiR9eKPM.js";/* empty css             */import"./params.B3T1WKlC.js";import"./Ellipse.BbMe4Rtx.js";import"./Header.CZyFrCa6.js";import"./addons.CFb2IwD4.js";import"./ScrollAndHighlight.DwveUXoo.js";import"./LogoGear.BF23BIEd.js";import"./AnimatedNumber.D3vhSMTe.js";import"./numbers.zAmItkHM.js";import"./Logo.DoVR4qom.js";import"./Support.B-t20u3s.js";import"./Url.CdiHqGVc.js";import"./Date.CjYsJ2CI.js";import"./constants.DpuIWwJ9.js";import"./Exclamation.DKtT8kuH.js";import"./Gear.aQH8e4fl.js";import"./Network.CvFzG_zp.js";import"./ToolsSettings.C3R1ZWot.js";import"./Checkmark.pCOnqh_g.js";import"./Blur.DNVDismY.js";import"./Index.XNbBlAFo.js";import"./RequiredPlans.aEVPoUrs.js";import"./TruSeoScore.TjofuHRQ.js";import"./Information.CESrgQJV.js";import"./Editor.XgOGwjMW.js";import"./Plus.DrDYrwHh.js";import"./History.CPNtfvcc.js";import"./Refresh.Cok1AepX.js";import"./Download.D6FXl6uu.js";import"./regex.C2CBDGQi.js";import"./Drag.BPKV-DzA.js";import"./External.Bfg4674G.js";import"./Row.DMGP3siA.js";const ee={setup(){return{rootStore:D()}},emits:["update"],components:{BaseCheckbox:P,GridColumn:F,GridRow:W},props:{loading:Boolean,disabled:Boolean},data(){return{options:{},strings:{updateOptions:this.$t.__("Update Options",this.$td)}}},mounted(){this.rootStore.aioseo.deprecatedOptions.forEach(e=>{e.enabled&&(this.options[e.value]=!0)})}},te={class:"aioseo-deprecated-options"},oe=l("br",null,null,-1),se=l("br",null,null,-1),ie=l("br",null,null,-1);function ne(e,o,i,u,t,r){const c=a("base-checkbox"),b=a("grid-column"),S=a("grid-row"),f=a("base-button");return n(),h("div",te,[p(S,{class:"settings"},{default:d(()=>[(n(!0),h(M,null,T(u.rootStore.aioseo.deprecatedOptions,(_,k)=>(n(),g(b,{key:k,xl:"6",sm:"12"},{default:d(()=>[p(c,{size:"medium",modelValue:t.options[_.value],"onUpdate:modelValue":y=>t.options[_.value]=y,disabled:i.disabled},{default:d(()=>[w(m(_.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024))),128))]),_:1}),oe,p(f,{type:"blue",size:"medium",onClick:o[0]||(o[0]=_=>e.$emit("update",t.options)),loading:i.loading,disabled:i.disabled},{default:d(()=>[w(m(t.strings.updateOptions),1)]),_:1},8,["loading","disabled"]),se,ie])}const re=A(ee,[["render",ne]]),ae={setup(){return{optionsStore:O()}},computed:{infoItems(){return[{label:"Migrated Version",value:this.optionsStore.internalOptions.internal.migratedVersion},{label:"First Activated",value:this.optionsStore.internalOptions.internal.firstActivated!==0?B.fromMillis(this.optionsStore.internalOptions.internal.firstActivated*1e3).toFormat("MMMM d, yyyy"):!1}]}}},le={class:"v3-migration-info aioseo-description"},ce={class:"info-items"},de={key:0},ue={key:1};function pe(e,o,i,u,t,r){return n(),h("div",le,[l("ul",ce,[(n(!0),h(M,null,T(r.infoItems,(c,b)=>(n(),h("li",{key:b},[c.value?(n(),h("span",de,m(c.label),1)):v("",!0),c.value?(n(),h("span",ue,m(c.value),1)):v("",!0)]))),128))])])}const me=A(ae,[["render",pe]]),he={setup(){return{rootStore:D(),toolsStore:N()}},components:{CoreAlert:R,CoreCard:Y,CoreMainTabs:H,CoreModal:K,CoreNetworkSiteSelector:z,CoreSettingsRow:G,DeprecatedOptions:re,MigrationInfo:me,SvgClose:U},props:{extraActions:{type:Array,required:!1}},data(){return{site:{},tabsKey:0,doingActionKey:0,activeTab:"general",currentAction:"",showAreYouSureModal:!1,doingAction:[],strings:{selectSite:"Select Site",cardLabel:"Debug",selectLabel:"Select a Debug Action:",buttonLabel:"Run Action",alertWarning:"Before you run any action, please make sure that you have fully read the description and understand the consequences as these cannot be reverted.",cannotBeUndone:"This action cannot be undone.",yesDoAction:"Yes, run this action",noChangedMind:"No, I changed my mind"},alertLink:this.$links.getPlainLink("Click here to open to the Scheduled Actions panel",this.rootStore.aioseo.urls.admin.scheduledActions,!0)}},computed:{areYouSureTitle(){return`Are you sure you want to run the "${this.currentAction.label}" action?`},tabs(){const e=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.rootStore.aioseo.urls.admin.scheduledActions),o=this.rootStore.aioseo.data.isNetworkAdmin?"<br><strong>NOTE: If no site is selected, this will clear the network cache.</strong>":"",i=this.rootStore.aioseo.data.isNetworkAdmin?"<br><strong>NOTE: If no site is selected, this will clear the network plugin updates transient.</strong>":"";return[{slug:"general",name:"General",actions:[{label:"Clear Cache",slug:"clear-cache",shortDescription:`This action deletes all records of the <code>aioseo_cache</code> table in the database.${o}`,longDescription:"",showModal:!1,network:!0},{label:"Clear Plugin Updates Transient",slug:"clear-plugin-updates-transient",shortDescription:`This action clears the plugin updates transient, which forces WordPress Core to check for plugin updates.${i}`,longDescription:"",showModal:!1,network:!0},{label:"Readd Capabilities",slug:"readd-capabilities",shortDescription:"This action will readd our capabilities (access permissions) for all users.",longDescription:"",showModal:!1},{label:"Reset Data",slug:"reset-data",shortDescription:"This action will <strong>delete</strong> all our custom tables and options.",longDescription:"",showModal:!0}]},{slug:"sitemap",name:"Sitemap",actions:[{label:"Clear Image Data",slug:"clear-image-data",shortDescription:"This action removes all image data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("To speed up the image scan, go to %1$s and run the <code>aioseo_image_sitemap_scan</code> action.",e),showModal:!1}]},{slug:"migrations",name:"Migrations",actions:[{label:"Rerun V4+ Migrations",slug:"rerun-migrations",shortDescription:"This action will rerun all update migrations since 4.0.0, excluding the V3 migration.",longDescription:"",showModal:!0}]},{slug:"old-issues",name:"Old Issues",actions:[{label:"Remove Duplicates",slug:"remove-duplicates",shortDescription:"This action will delete any duplicate records that are found in the <code>aioseo_posts</code> and <code>aioseo_terms</code> tables.",longDescription:"",showModal:!1},{label:"Unescape Data",slug:"unescape-data",shortDescription:"This action will clean <code>aioseo_posts</code> and <code>aioseo_term</code> records whose data is corrupted.",longDescription:this.$t.sprintf("The action will trigger a routine which runs in batches via Action Scheduler. It may take some time for this routine to complete, To speed up this process, go to %1$s and run the <code>aioseo_unslash_escaped_data_posts</code> or <code>aioseo_unslash_escaped_data_terms</code> action.",e),showModal:!1}]},{slug:"deprecated-options",name:"Deprecated Options",actions:[{label:"Deprecated Options",slug:"deprecated-options",shortDescription:"Enable or disable any options that have been deprecated in AIOSEO.",longDescription:"<strong>These options are not guaranteed to work and all support has been dropped.</strong>",showModal:!1,component:"deprecated-options"}]}]},activeTabObject(){return this.tabs.find(e=>e.slug===this.activeTab)}},methods:{isActionDisabled(e){return this.rootStore.aioseo.data.isNetworkAdmin?this.site.blog_id?this.site.blog_id==="network"&&e.network?!1:this.site.blog_id==="network"&&!e.network:!0:!1},isLoading(e){return!!this.doingAction[e.slug]},getSelectedActionObject(e){let o=null;return this.actions.forEach(i=>{const u=i.options.find(t=>t.value===e);u&&(o=u)}),o},maybeDoAction(e,o){if(this.currentAction=e,e.showModal){this.showAreYouSureModal=!0;return}this.doAction(o)},doAction(e){this.doingAction[this.currentAction.slug]=!0,this.showAreYouSureModal=!1,this.doingActionKey++,this.toolsStore.doTask({action:this.currentAction.slug,siteId:this.site.blog_id||this.rootStore.aioseo.data.currentBlogId,data:e}).then(()=>{console.log(`Action "${this.currentAction.label}" has been completed.`)}).catch(o=>{console.error(`Action "${this.currentAction.label}" could not be completed: `,o)}).finally(()=>{this.doingAction[this.currentAction.slug]=!1,this.doingActionKey++})}},beforeMount(){var o;let e=-1;if(this.rootStore.aioseo.data.v3Options&&(e=this.tabs.findIndex(i=>i.slug.toLowerCase()==="migrations"),e!==-1)){const i=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.rootStore.aioseo.urls.admin.scheduledActions);this.tabs[e].actions.push({label:"Rerun V3 Migration",slug:"restart-v3-migration",shortDescription:"This action restarts the migration from V3 to V4.",longDescription:this.$t.sprintf("All settings will be migrated immediately. However, the post/term meta needs to be migrated via a routine which runs in batches via Action Scheduler. To speed up the post/term meta migration, go to %1$s and run the <code>aioseo_migrate_post_meta</code> or <code>aioseo_migrate_term_meta</code> action.",i),infoComponent:"MigrationInfo",showModal:!0})}(o=this.extraActions)!=null&&o.length&&this.extraActions.forEach(i=>{if(e=this.tabs.findIndex(u=>u.slug.toLowerCase()===i.slug.toLowerCase()),e!==-1){this.tabs[e].actions=this.tabs[e].actions.concat(i.actions);return}this.tabs.push(i)})}},ge={class:"aioseo-tools-debug"},_e={key:0,class:"aioseo-settings-row"},be={class:"select-site"},fe=["innerHTML"],we=["innerHTML"],Ae=["innerHTML"],ve={class:"aioseo-modal-body"},Se=["innerHTML"];function ke(e,o,i,u,t,r){const c=a("core-network-site-selector"),b=a("core-alert"),S=a("core-main-tabs"),f=a("base-button"),_=a("core-settings-row"),k=a("svg-close"),y=a("core-modal"),x=a("core-card");return n(),h("div",ge,[p(x,{slug:"debug","header-text":t.strings.cardLabel},{default:d(()=>[u.rootStore.aioseo.data.isNetworkAdmin?(n(),h("div",_e,[l("div",be,m(t.strings.selectSite),1),p(c,{onSelectedSite:o[0]||(o[0]=s=>t.site=s),"show-network":""})])):v("",!0),p(b,{type:"yellow"},{default:d(()=>[l("div",null,m(t.strings.alertWarning),1),l("div",{innerHTML:t.alertLink},null,8,fe)]),_:1}),(n(),g(S,{internal:"",key:t.tabsKey,tabs:r.tabs,active:t.activeTab,showSaveButton:!1,onChanged:o[1]||(o[1]=s=>t.activeTab=s)},null,8,["tabs","active"])),(n(!0),h(M,null,T(r.activeTabObject.actions,(s,L)=>(n(),g(_,{key:t.activeTab+L,name:s.label,align:""},{content:d(()=>[s.component?(n(),g(C(s.component),{key:0,onUpdate:$=>r.maybeDoAction(s,$),loading:t.doingAction[s.slug],disabled:r.isActionDisabled(s)},null,40,["onUpdate","loading","disabled"])):(n(),g(f,{type:"blue",size:"medium",onClick:$=>r.maybeDoAction(s),loading:t.doingAction[s.slug],key:t.doingActionKey,disabled:r.isActionDisabled(s)},{default:d(()=>[w(m(t.strings.buttonLabel),1)]),_:2},1032,["onClick","loading","disabled"])),l("div",{class:"aioseo-description",innerHTML:s.shortDescription},null,8,we),l("div",{class:"aioseo-description",innerHTML:s.longDescription},null,8,Ae),s.infoComponent?(n(),g(C(s.infoComponent),{key:2})):v("",!0)]),_:2},1032,["name"]))),128)),p(y,{show:t.showAreYouSureModal,"no-header":"",onClose:o[5]||(o[5]=s=>t.showAreYouSureModal=!1),classes:["aioseo-debug-modal"]},{body:d(()=>[l("div",ve,[l("button",{class:"close",onClick:o[3]||(o[3]=q(s=>t.showAreYouSureModal=!1,["stop"]))},[p(k,{onClick:o[2]||(o[2]=s=>t.showAreYouSureModal=!1)})]),l("h3",null,m(r.areYouSureTitle),1),l("div",{class:"description",innerHTML:t.strings.cannotBeUndone},null,8,Se),p(f,{type:"blue",size:"medium",onClick:r.doAction},{default:d(()=>[w(m(t.strings.yesDoAction),1)]),_:1},8,["onClick"]),p(f,{type:"gray",size:"medium",onClick:o[4]||(o[4]=s=>t.showAreYouSureModal=!1)},{default:d(()=>[w(m(t.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"])]),_:1},8,["header-text"])])}const ye=A(he,[["render",ke]]),Ce={components:{Debug:ye}};function De(e,o,i,u,t,r){const c=a("debug",!0);return n(),g(c)}const Me=A(Ce,[["render",De]]),Te={setup(){return{rootStore:D()}},components:{BadBotBlocker:V,CoreMain:I,DatabaseTools:E,Debug:Me,HtaccessEditor:j,ImportExport:J,RobotsEditor:Q,SystemStatus:X,WpCode:Z},data(){return{strings:{pageName:this.rootStore.aioseo.data.isNetworkAdmin?this.$t.__("Network Tools",this.$td):this.$t.__("Tools",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="system-status"&&this.$route.name!=="import-export"&&this.$route.name!=="database-tools"&&this.$route.name!=="debug"&&this.$route.name!=="wp-code"}}};function $e(e,o,i,u,t,r){const c=a("core-main");return n(),g(c,{"page-name":t.strings.pageName,"show-save-button":r.showSaveButton},{default:d(()=>[(n(),g(C(e.$route.name)))]),_:1},8,["page-name","show-save-button"])}const Ut=A(Te,[["render",$e]]);export{Ut as default};
