import{u as e,h as l}from"./links.rndHrQjc.js";const h={data(){return{button1Loading:!1,button2Loading:!1}},methods:{getHref(t){if(!t)return"";let o=t;if(this.isRoute(t)){const s=t.split("#")[1].split(":");o=e().aioseo.urls.aio.dashboard.replace("page=aioseo",`page=${s[0]}#/${s[1]}`)}return o},getTarget(t){return this.isRoute(t)?null:"_blank"},isRoute(t){return t.startsWith("http://route#")||t.startsWith("https://route#")},isAction(t){return t.startsWith("http://action#")||t.startsWith("https://action#")},getTagType(t){return this.isAction(t)?"button":"a"},processButtonClick(t,o){if(this[`button${o}Loading`]=!0,this.isAction(t))return this.processAction(t,o);if(this.isRoute(t))return this.processRoute(t,o);this[`button${o}Loading`]=!1},processAction(t,o){const n=/[^#?]*/gm,s=t.match(n),r=s[2];l().processButtonAction(r).then(()=>{if(s[4]&&s[4].startsWith("redirect=")){const u=e(),i=s[4].replace("redirect=","").split(":"),a=u.aioseo.urls.aio.dashboard.replace("page=aioseo",`page=${i[0]}#/${i[1]}`);if(a===window.location.href){window.location.reload();return}window.location.href=a}else s[4]&&s[4].startsWith("refresh")?window.location.reload():this[`button${o}Loading`]=!1})},processRoute(t){const o=e(),n=/[^#?]*/gm,r=t.match(n)[2].split(":");o.aioseo.urls.aio.dashboard.replace("page=aioseo",`page=${r[0]}#/${r[1]}`)===window.location.href&&window.location.reload()}}};export{h as U};
