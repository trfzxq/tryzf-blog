webpackJsonp([2,10],{167:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["article"]}},168:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["comment"],data:function(){return{id:null,url:null,isHide:!1}},mounted:function(){this.addScript()},beforeDestroy:function(){var e=document.getElementById("duoshuo"),t=document.getElementById("ds-notify");e&&e.parentNode.removeChild(e),t&&t.parentNode.removeChild(t)},methods:{addScript:function(){var e=document.createElement("script"),t=document.getElementsByTagName("body")[0];e.id="duoshuo",e.src=("https:"===document.location.protocol?"https:":"http:")+"//static.duoshuo.com/embed.js",e.async=!1,t.appendChild(e)},toggleDuoshuoComments:function(){var e=this.comment._id,t=window.location.href,n=this.$refs.duoshuo,o=document.createElement("div");o.setAttribute("data-thread-key",e),o.setAttribute("data-url",t),window.DUOSHUO.EmbedThread(o),n.appendChild(o),this.isHide=!0}}}},169:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(461),i=o(c),r=n(462),s=o(r);t.default={name:"articleDetaile",computed:{article:function(){return this.$store.state.articleDetaile}},created:function(){this.getArticle()},methods:{getArticle:function(){this.$store.dispatch("getArticleDetaile",this.$route.params.id)}},components:{BodyComponent:i.default,Comment:s.default}}},230:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".comment-button[data-v-69b796e4]{color:#ccc;width:100%;background:none;border:1px solid #eee;border-radius:4px;padding:10px}.comment-box[data-v-69b796e4]{clear:both;margin-top:30px;margin-bottom:30px;border-top:1px dashed #eee;padding-top:30px}","",{version:3,sources:["/./src/components/Detaile/Comment.vue"],names:[],mappings:"AACA,iCACE,WAAW,AACX,WAAW,AACX,gBAAgB,AAChB,sBAAsB,AACtB,kBAAmB,AACnB,YAAc,CACf,AACD,8BACE,WAAY,AACZ,gBAAgB,AAChB,mBAAmB,AACnB,2BAA2B,AAC3B,gBAAiB,CAClB",file:"Comment.vue",sourcesContent:["\n.comment-button[data-v-69b796e4] {\n  color:#ccc;\n  width:100%;\n  background:none;\n  border:1px solid #eee;\n  border-radius: 4px;\n  padding: 10px;\n}\n.comment-box[data-v-69b796e4] {\n  clear: both;\n  margin-top:30px;\n  margin-bottom:30px;\n  border-top:1px dashed #eee;\n  padding-top:30px;\n}\n"],sourceRoot:"webpack://"}])},234:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".title[data-v-7939cced]{font-size:30px;color:#666;padding:20px 0;font-weight:700;letter-spacing:3px}.aritcle_content[data-v-7939cced]{font-size:16px;color:#666;margin:30px 0;letter-spacing:2px;line-height:1.5}.aritcle_content p[data-v-7939cced]{text-indent:2rem}","",{version:3,sources:["/./src/components/Detaile/Body.vue"],names:[],mappings:"AACA,wBACE,eAAe,AAEf,WAAW,AACX,eAAe,AACf,gBAAkB,AAClB,kBAAoB,CACrB,AACD,kCACE,eAAe,AACf,WAAW,AACX,cAAc,AACd,mBAAoB,AACpB,eAAiB,CAClB,AACD,oCACE,gBAAkB,CACnB",file:"Body.vue",sourcesContent:["\n.title[data-v-7939cced] {\n  font-size:30px;\n  font-weight: bold;\n  color:#666;\n  padding:20px 0;\n  font-weight: bold;\n  letter-spacing: 3px;\n}\n.aritcle_content[data-v-7939cced] {\n  font-size:16px;\n  color:#666;\n  margin:30px 0;\n  letter-spacing: 2px;\n  line-height: 1.5;\n}\n.aritcle_content p[data-v-7939cced] {\n  text-indent: 2rem;\n}\n"],sourceRoot:"webpack://"}])},237:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:"webpack://"}])},258:function(e,t,n){var o=n(230);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},262:function(e,t,n){var o=n(234);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},265:function(e,t,n){var o=n(237);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},461:function(e,t,n){var o,c;n(262),o=n(167);var i=n(495);c=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(c=o=o.default),"function"==typeof c&&(c=c.options),c.render=i.render,c.staticRenderFns=i.staticRenderFns,c._scopeId="data-v-7939cced",e.exports=o},462:function(e,t,n){var o,c;n(258),o=n(168);var i=n(491);c=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(c=o=o.default),"function"==typeof c&&(c=c.options),c.render=i.render,c.staticRenderFns=i.staticRenderFns,c._scopeId="data-v-69b796e4",e.exports=o},463:function(e,t,n){var o,c;n(265),o=n(169);var i=n(498);c=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(c=o=o.default),"function"==typeof c&&(c=c.options),c.render=i.render,c.staticRenderFns=i.staticRenderFns,e.exports=o},491:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"comment-box col-xs-8 col-xs-offset-2"},[t("button",{staticClass:"comment-button",class:{hide:e.isHide},on:{click:function(t){e.toggleDuoshuoComments()}}},[t("i",{staticClass:"glyphicon glyphicon-comment"}),e._v("\n    我要吐嘈\n  ")]),e._v(" "),t("div",{ref:"duoshuo"})])},staticRenderFns:[]}},495:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"col-xs-8 col-xs-offset-2"},[t("span",{staticClass:"title"},[e._v(e._s(e.article.title))]),e._v(" "),t("article",{staticClass:"aritcle_content",domProps:{innerHTML:e._s(e.article.content)}})])},staticRenderFns:[]}},498:function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",[t("BodyComponent",{attrs:{article:e.article}}),e._v(" "),t("Comment",{attrs:{comment:e.article}})])},staticRenderFns:[]}}});
//# sourceMappingURL=2.b703287ee07514128a2c.js.map