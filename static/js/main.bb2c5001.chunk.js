(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),c=(n(26),n(3)),l=n.n(c),s=n(10),u=n.n(s),f=n(9),p=n.n(f);n(14);function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var b="(data) => { // data\u662fexcel\u6587\u4ef6\u8bfb\u53d6\u540e\u7684JSON\u6570\u636e\n  /* processing logic */ \n  return data\n}",y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,g(t).call(this,e))).changeState=function(e,t){e.preventDefault(),n.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,"file"===t?e.target.files[0]:e.target.value))},n.transfer=function(){if(!n.state.file)return alert("\u8bf7\u9009\u62e9\u6587\u4ef6\uff01");var e=new FileReader;e.onload=function(){var t=l.a.read(e.result,{type:"binary"}),a=l.a.utils.sheet_to_json(t.Sheets[t.SheetNames[n.state.sheet]]),o=window.eval(n.state.function)(a);n.setState({line:o.length,json:u()(o,{indent:"  ",singleQuotes:!1})})},e.readAsBinaryString(n.state.file)},n.clipboard=new p.a(".copyBtn"),n.clipboard.on("success",function(e){e.clearSelection(),alert("\u590d\u5236\u6210\u529f\uff01")}),n.state={file:null,sheet:0,function:b,json:"",line:0},n}var n,a,r;return n=t,(a=[{key:"componentWillUnmount",value:function(){this.clipboard.destroy()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"App-title"},"Excel2JSON")),o.a.createElement("main",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"Input"},o.a.createElement("div",{className:"item"},o.a.createElement("label",{className:"uploadfile mr-2"},o.a.createElement("span",null,this.state.file?this.state.file.name:"\u8bf7\u9009\u62e9\u6587\u4ef6"),o.a.createElement("input",{type:"file",accept:".xls, .xlsx",onChange:function(t){return e.changeState(t,"file")}})),o.a.createElement("label",null,"Sheet\u5e8f\u53f7\uff1a",o.a.createElement("input",{className:"sheet",type:"number",min:"0",value:this.state.sheet,onChange:function(t){return e.changeState(t,"sheet")}}))),o.a.createElement("div",{className:"item"},o.a.createElement("textarea",{className:"function-textarea",rows:"10",cols:"84",placeholder:"\u81ea\u5b9a\u4e49\u5904\u7406\uff08JS\uff09",value:this.state.function,onChange:function(t){return e.changeState(t,"function")}})),o.a.createElement("div",{className:"item"},o.a.createElement("button",{className:"btn mr-2",type:"button",onClick:this.transfer},"\u8f6c\u6362"),o.a.createElement("button",{className:"btn copyBtn",type:"button","data-clipboard-target":"#result"},"\u590d\u5236\u7ed3\u679c")),o.a.createElement("span",null,"\u6709\u6548\u884c\u6570\uff1a",this.state.line)),o.a.createElement("div",{className:"Result"},o.a.createElement("textarea",{id:"result",value:this.state.json})))))}}])&&d(n.prototype,a),r&&d(n,r),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");h(e.prototype,t&&t.prototype),t&&h(e,t)}(t,e),t}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");w?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):E(e)})}}()},14:function(e,t,n){},26:function(e,t,n){},4:function(e,t){},40:function(e,t,n){n(39),e.exports=n(12)}},[[40,0,1]]]);
//# sourceMappingURL=main.bb2c5001.chunk.js.map