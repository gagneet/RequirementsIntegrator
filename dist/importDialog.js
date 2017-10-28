define(["VSS/Controls/Notifications","VSS/Controls","VSS/Service","TFS/WorkItemTracking/RestClient","TFS/Core/RestClient","VSS/Controls/Menus","VSS/Controls/TreeView","VSS/Controls/Dialogs"],function(e,t,n,r,o,i,s,a){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,i){for(var s,a,c=0,u=[];c<t.length;c++)a=t[c],o[a]&&u.push(o[a][0]),o[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(n&&n(t,r,i);u.length;)u.shift()()};var r={},o={3:0,6:0,7:0,8:0,10:0,11:0};return t.e=function(e){function n(){a.onerror=a.onload=null,clearTimeout(c);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var i=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=i;var s=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,t.nc&&a.setAttribute("nonce",t.nc),a.src=t.p+""+e+".js";var c=setTimeout(n,12e4);return a.onerror=a.onload=n,s.appendChild(a),i},t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=16)}([function(t,n){t.exports=e},function(e,t,n){var r,o;r=[n,t,n(2),n(0),n(5),n(3)],void 0!==(o=function(e,t,n,r,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){}return e.prototype.displayMessage=function(e,t){$("#message").html("");var o=n.create(r.MessageAreaControl,$("#message"),null);o.setMessage(e,t),this.messenger=o},e.prototype.closeMessage=function(){this.messenger.hideElement()},e}();t.MessageService=s;var a=function(){function e(){}return e.prototype.getWorkItems=function(e,t){var n=new Array,r=i.getCollectionClient(o.WorkItemTrackingHttpClient),s={query:e};return r.queryByWiql(s).then(function(e){if(!e.workItems)throw new Error("The query supplied does not produce any work item results.");return e.workItems.forEach(function(e){n.push(e.id)}),r.getWorkItems(n,t)})},e.prototype.getWorkItemHierarchy=function(e,t,n){var r=new Array,s=new Array,a=i.getCollectionClient(o.WorkItemTrackingHttpClient),c={query:e};return a.queryByWiql(c).then(function(e){if(!e.workItemRelations)throw new Error("The query supplied does not produce any work item relations.");return e.workItemRelations.forEach(function(e){var t={data:{id:e.target.id,name:"",parent:e.source?e.source.id:n,link:e.target.url}};r.push(t),s.push(e.target.id)}),a.getWorkItems(s,t).then(function(e){return e.forEach(function(e,t){r.forEach(function(t,n){if(t.data.id===e.id)return t.data.name=e.fields["System.Title"],void(t.data.workItemType=e.fields["System.WorkItemType"])})}),r})})},e.prototype.getWorkItemTypes=function(){return i.getCollectionClient(o.WorkItemTrackingHttpClient).getWorkItemTypes(VSS.getWebContext().project.name)},e}();t.QueryService=a}.apply(t,r))&&(e.exports=o)},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var r,o;r=[n,t,n(1),n(0),n(7),n(3)],void 0!==(o=function(e,t,r,o,i,s){"use strict";function a(e){try{e()}catch(e){l.displayMessage(e,o.MessageAreaType.Error)}}function c(e){return s.getCollectionClient(i.CoreHttpClient).getProject(e,!0)}function u(e,t){var r={},o=new Array,i=JSON.parse(e);o[0]=["RequirementId","Title","Description","MappedItems"],i.forEach(function(e,t){o[t+1]=[e.RequirementId,e.Title,e.Description,e.MappedItems]});var s={s:{c:1e7,r:1e7},e:{c:0,r:0}};n.e(0).then(function(){var e=[n(12)];(function(e){for(var n=0;n!==o.length;++n)for(var i=0;i!==o[n].toString().length;++i){s.s.r>n&&(s.s.r=n),s.s.c>i&&(s.s.c=i),s.e.r<n&&(s.e.r=n),s.e.c<i&&(s.e.c=i);var a={v:o[n][i],t:"s"};if(null!=a.v){var c=XLSX.utils.encode_cell({c:i,r:n});"number"==typeof a.v?a.t="n":"boolean"==typeof a.v?a.t="b":a.v instanceof Date?(a.t="n",a.z=XLSX.SSF._table[14],a.v=p(a.v)):a.t="s",r[c]=a}}s.s.c<1e7&&(r["!ref"]=XLSX.utils.encode_range(s));var u={SheetNames:[],Sheets:{}};u.SheetNames.push("Requirements"),u.Sheets.Requirements=r;var l=XLSX.write(u,t);return e(new Blob([function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r!==e.length;++r)n[r]=255&e.charCodeAt(r);return t}(l)],{type:"application/octet-stream"}),VSS.getWebContext().project.name+".xlsx")}).apply(null,e)}).catch(n.oe)}Object.defineProperty(t,"__esModule",{value:!0});var p,l=new r.MessageService;t.executeBoundary=a,t.getProcessTemplate=c,t.exportToExcel=u}.apply(t,r))&&(e.exports=o)},function(e,t){e.exports=r},function(e,t,n){var r,o;r=[n,t,n(1),n(4),n(0)],void 0!==(o=function(e,t,n,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.messenger=new n.MessageService}return e.prototype.getCollection=function(e,t){var n=localStorage.getItem(e);return n.length<1&&this.messenger.displayMessage("Item '"+e+"' could not be located or has no value.",o.MessageAreaType.Warning),t?(t(n),null):n},e.prototype.setCollection=function(e,t){localStorage.setItem(e,t),this.messenger.displayMessage("Item '${id}' added/updated.",o.MessageAreaType.Info)},e.prototype.clear=function(){localStorage.clear(),this.messenger.displayMessage("Local storage has been cleared.",o.MessageAreaType.Info)},e.prototype.remove=function(e){localStorage.removeItem(e),this.messenger.displayMessage("Item '${id}' removed.",o.MessageAreaType.Info)},e}();t.LocalStorageAdapter=i;var s=function(){function e(e){this.scope=e||"ProjectCollection",this.messenger=new n.MessageService,this.dataService=VSS.getService(VSS.ServiceIds.ExtensionData)}return e.prototype.getCollection=function(e,t){var n=this;if(void 0===t)throw new Error("This method requires a callback function.");n.dataService.then(function(r){r.getDocument("RequirementsManagement",e).then(function(e){t(e.json)},function(e){n.messenger.displayMessage("It appears you do not have any requirements.  Please use the Import button to add requirements.",o.MessageAreaType.Info)})})},e.prototype.setCollection=function(e,t){var n=this,r={id:e,json:t};n.dataService.then(function(e){e.setDocument("RequirementsManagement",r).then(function(e){return e},function(e){n.messenger.displayMessage(e.message,o.MessageAreaType.Error)})})},e.prototype.clear=function(){var e=this;e.dataService.then(function(t){t.getDocuments("RequirementsManagement").then(function(n){n.forEach(function(e,n,r){t.deleteDocument("RequirementsManagement",e.id).then(function(e){})}),e.messenger.displayMessage("All documents successfully removed.",o.MessageAreaType.Info)})})},e.prototype.remove=function(e){var t=this;t.dataService.then(function(n){n.deleteDocument("RequirementsManagement",e).then(function(){},function(e){var n=JSON.parse(e.responseText);t.messenger.displayMessage(n.message,o.MessageAreaType.Error)})})},e}();t.VsoDocumentServiceAdapter=s;var a=function(){function e(e){this.scope=e,this.messenger=new n.MessageService,this.dataService=VSS.getService(VSS.ServiceIds.ExtensionData)}return e.prototype.getCollection=function(e,t){var n=this;if(void 0===t)throw new Error("This method requires a callback function.");r.executeBoundary(function(){n.dataService.then(function(n){n.getValue(e).then(function(e){t(e)})})})},e.prototype.setCollection=function(e,t){var n=this;r.executeBoundary(function(){n.dataService.then(function(n){n.setValue(e,t).then(function(e){return!0})})})},e.prototype.clear=function(){r.executeBoundary(function(){throw Error("Method not implemented.")})},e.prototype.remove=function(e){var t=this;r.executeBoundary(function(){t.setCollection(e,null)})},e}();t.VsoSettingsServiceAdapter=a}.apply(t,r))&&(e.exports=o)},function(e,t){e.exports=o},function(e,t,n){var r,o;r=[n,t,n(4),n(1),n(0),n(2),n(10),n(9)],void 0!==(o=function(e,t,n,r,o,i,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e){this.list=JSON.parse(e)}return e.prototype.add=function(e){this.list.push(e)},e.prototype.remove=function(e){this.list.splice(this.list.indexOf(e),1)},e.prototype.update=function(e){this.list.forEach(function(t,n){if(t.RequirementId===e.RequirementId)return t.Description=e.Description,t.Title=e.Title,void(t.MappedItems=e.MappedItems)})},e.prototype.toString=function(){return JSON.stringify(this.list)},e.prototype.getItem=function(e){var t;return this.list.forEach(function(n,r){if(n.RequirementId===e)return void(t=n)}),t},e}();t.RequirementCollection=c;var u=function(){function e(){this.projectId=VSS.getWebContext().project.id,this.messenger=new r.MessageService;var e=this;e.nodes=new Array;var t=new s.TreeNode("Requirements");t.link="index.html";var c=new s.TreeNode("Iteration Path View");c.link="sprintView.html";var u=new s.TreeNode("Gap Analysis");u.link="gapAnalysis.html",e.nodes.push(t),e.nodes.push(c),e.nodes.push(u),e.tree=i.create(s.TreeView,$("#treeMenu"),{nodes:e.nodes});i.create(a.MenuBar,$("#navToolbar"),{items:[{id:"getTemplate",text:"Get Latest Template",icon:"icon-download-package",title:"Downloads the template for importing requirements via Excel"}],executeAction:function(e){switch(e.get_commandName()){case"getTemplate":window.open(VSS.getExtensionContext().baseUri+"/data/SampleRequirements.xlsx")}}});n.getProcessTemplate(e.projectId).then(function(t){e.processTemplate=t.capabilities.processTemplate.templateName},function(t){e.messenger.displayMessage(t.message,o.MessageAreaType.Error)})}return e.prototype.setActiveNode=function(e){var t=this;t.nodes.forEach(function(n,r){if(n.text===e)return void t.tree.setSelectedNode(n)})},e.prototype.validateTemplate=function(e){var t=this;setTimeout(function(){null!=t.processTemplate.match("CMMI")?($("#reqtMenu").hide(),$("#content").show().append("<span>The CMMI process template allows you to manage requirements natively.  Import, export and reporting functionality has been disabled at this time.</span>"),t.messenger.displayMessage("Warning: CMMI process template detected.",o.MessageAreaType.Warning)):e()},500)},e}();t.ViewModelBase=u}.apply(t,r))&&(e.exports=o)},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t,n){var r,o;r=[n,t,n(1),n(6),n(0),n(8)],void 0!==(o=function(e,t,n,r,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e){this.store=null==e?new r.LocalStorageAdapter:e,this.msg=new n.MessageService,this.projectId=VSS.getWebContext().project.id}return e.prototype.process=function(e,t){var n,r=this,s=e.files;n=s[0];var a=new FileReader;n.name;a.onload=function(e){var n=e.target.result;try{var s=XLSX.read(n,{type:"binary"});s.SheetNames.forEach(function(e){var n=s.Sheets[e],o=XLSX.utils.sheet_to_json(n),a=new i.RequirementCollection(JSON.stringify(o));r.store.setCollection(r.projectId+"-requirements",a.toString()),t&&t()})}catch(e){r.msg.displayMessage(e.message,o.MessageAreaType.Error)}},a.readAsBinaryString(n)},e}();t.FlatFileAdapter=s;var a=function(){function e(){}return e.prototype.process=function(e){},e}();t.RepositoryAdapter=a}.apply(t,r))&&(e.exports=o)},,function(e,t){e.exports=a},,,function(e,t,n){var r,o,i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();r=[n,t,n(6),n(1),n(13),n(11)],void 0!==(o=function(e,t,n,r,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var o=e.call(this)||this,i=o;return i.context=t,i.messenger=new r.MessageService,i.adapter=new s.FlatFileAdapter(new n.VsoDocumentServiceAdapter("ProjectCollection")),o}return i(t,e),t.prototype.start=function(){var e=this;$("#myFile").on("change",function(){e.adapter.process($("#myFile")[0],null),e.updateOkButton(!0)})},t.prototype.import=function(){return!0},t}(o.ModalDialog);t.ImportDialog=a,t.dlg=new a}.apply(t,r))&&(e.exports=o)}])});