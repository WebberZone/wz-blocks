!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,l=window.wp.element,n=window.wp.i18n,o=window.wp.serverSideRender,a=e.n(o),r=window.wp.blockEditor,s=window.wp.components;(0,t.registerBlockType)("knowledgebase/knowledgebase",{edit:function(e){let{attributes:t,setAttributes:o}=e;function i(e){return void 0===e||0===e||""===e||isNaN(e)?"":parseInt(e)}const{category:c,limit:d,showArticleCount:w,showExcerpt:u,hasClickableSection:g,showEmptySections:b,columns:h,other_attributes:m}=t;console.log(t);const _=(0,r.useBlockProps)();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,n.__)("Knowledge Base Settings","knowledgebase"),initialOpen:!0},(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.TextControl,{label:(0,n.__)("Category ID","knowledgebase"),value:c,onChange:e=>{o({category:void 0===e?"":e})},help:(0,n.__)("Enter a single category/section ID to display its knowledge base or leave back to display the full knowledge base. You can find this under Knowledge Base > Sections.","knowledgebase")}))),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.TextControl,{label:(0,n.__)("Max articles per section","knowledgebase"),value:d,onChange:e=>{o({limit:i(e)})},help:(0,n.__)("After this limit is reached, the footer is displayed with the more link to view the category.","knowledgebase")}))),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Show article count","knowledgebase"),help:w?(0,n.__)("Article count displayed","knowledgebase"):(0,n.__)("No article count displayed","knowledgebase"),checked:w,onChange:()=>{o({showArticleCount:!w})}}))),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Show excerpt","knowledgebase"),help:u?(0,n.__)("Excerpt displayed","knowledgebase"):(0,n.__)("No excerpt","knowledgebase"),checked:u,onChange:()=>{o({showExcerpt:!u})}}))),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Show clickable section","knowledgebase"),help:g?(0,n.__)("Section headers are linked","knowledgebase"):(0,n.__)("Section headers not linked","knowledgebase"),checked:g,onChange:()=>{o({hasClickableSection:!g})}}))),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Show empty sections","knowledgebase"),help:b?(0,n.__)("Empty sections displayed","knowledgebase"):(0,n.__)("Empty sections hidden","knowledgebase"),checked:b,onChange:()=>{o({showEmptySections:!b})}}))),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.TextControl,{label:(0,n.__)("Number of columns","knowledgebase"),value:h,onChange:e=>{o({columns:i(e)})},help:(0,n.__)("Only works when inbuilt styles are enabled in the Settings page","knowledgebase")}))),(0,l.createElement)(s.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(s.TextareaControl,{label:(0,n.__)("Other attributes","knowledgebase"),value:m,onChange:e=>{o({other_attributes:void 0===e?"":e})},help:(0,n.__)("Enter other attributes in a URL-style string-query.","knowledgebase")}))))),(0,l.createElement)("div",_,(0,l.createElement)(a(),{block:"knowledgebase/knowledgebase",attributes:t})))},save:()=>null})}();