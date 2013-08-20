/*nolure@vip.qq.com http://nolure.github.io/nojs.docs*/!function(window,undefined){function type(a){return null==a?String(a):Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function load(a){function b(b){c(i?a[b]:k.getPath(a[b],l))}function c(b){k.point=a.point?a.point:i?j:b,f=d.createElement("script"),f.async=!0,k.event(f,function(){e(this,1,b)},function(){e(this,2,b)}),f.src=b,head.appendChild(f)}function e(a,c,d){m++,a&&(a.onreadystatechange=a.onload=a.onerror=null,head.removeChild(a)),m>=n?(k.now[1]&&k.now[1](),k.fileItem.length?k.begin():k.state=!1):l.queue===!0&&a&&b(m),(a||c)&&check(modules[d])}var f,g,h,i,j,k=load,l=k.now[2]||{},m=0,n=a.length;for(l.base="undefined"!=typeof l.base?l.base:config.base,l.fix="undefined"!=typeof l.fix?l.fix:config.fix,l.queue=l.queue===!1?!1:config.queue,h=n-1;h>=0;h--)g=k.getPath(a[h],l),modules[g]?(a.splice(h,1),e(null,1,g),n--):modules[g]={id:g};if(n=a.length){if(a.point)for(h=0;h<a.point.length;h++)g=load.getPath(a.point[h]),a.point[h]=g,modules[g]={id:g};if(i){for(j=a,a=load.pack(a,l),h=0;n>h;h++)j[h]=k.getPath(j[h],l);n=1}m=0,l.queue===!0&&b(0)}}function require(a){var b;return a=load.getPath(a),b=modules[a],b&&getExports(b)}function parseRequire(a){var b=[],c=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,d=/\\\\/g;return a.replace(d,"").replace(c,function(a,c,d){d&&b.push(d)}),b}function check(){if(!load.state){var a,b,c,d=[];for(a in modules)b=modules[a],"start"==a||b.init||b.factory&&d.push(b);for(a=d.length-1;a>=0;a--)b=d[a],getExports(b);for(;modules.start.length;)c=modules.start.shift(),c(depsToExports(c.deps))}}function depsToExports(a,b){var c,d,e=[];for(d=0;d<a.length;d++)c=load.getPath(a[d]),c=modules[c],c&&(getExports(c),b?globalExports.push(c.exports):e.push(c.exports));return e}function getExports(a){if(a.init)return a.exports;a.init=!0;var b=[require].concat(globalExports);return a.exports=a.exports===undefined?("function"==type(a.factory)?a.factory.apply(null,b):a.factory)||{}:a.exports,a.exports}function getSrc(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function defaultLoad(){var i,T=load,nojsSrc=getSrc(nojsScript),_modules=nojsScript.getAttribute("data-main"),_config=nojsScript.getAttribute("data-config");(_config||_modules)&&(_config&&(/\.js$/.test(_config)?(onReady=function(){config.pack||(T.add([_config],null,{fix:""}),configFile=!0),onReady=null},T.event(nojsScript,onReady)):(_config=eval("({"+_config+"})"),noJS.config(_config))),_modules&&(_modules=_modules.split(","),defaultLoad.deps=defaultLoad.deps.concat(_modules),T.add(_modules)))}var _noJS=window.noJS;if(!_noJS||!_noJS.version){var d=window.document,head=d.getElementsByTagName("head")[0],noJS=window.noJS={version:"1.0"},modules={start:[]},globalExports,config={queue:!0,fix:".js"},onReady,configFile;load.pack=function(a){var b,c=[],d=config.pack;if("array"==type(a)){for(b=0;b<a.length;b++)c.push(a[b].replace(/\//g,"-"));c=[d.base+c.join(",")+d.fix]}return c},load.fileItem=[],load.now=null,load.point=null,load.state=null,load.add=function(a,b,c,d){var e=load;"array"==type(a)&&a.length&&(e.fileItem[1==d?"unshift":"push"]([a,b,c]),!e.state&&e.begin())},load.begin=function(){configFile||(load.state=!0,load.now=load.fileItem.shift(),load(load.now[0]))},load.getPath=function(a,b){if("string"!=typeof a)return"";b=b||config;var c,d,e,f,g=a.indexOf("./"),h=a.lastIndexOf("./"),i=b.base,j=b.fix;if(0!=g)return i+a+j;if(c=g==h?1:h/2+1,e=0==i.indexOf("http")?3:1,i=i.split("/"),a=a.replace(/\.\//g,""),d=i.length,d>e&&d>c){for(f=0;c+1>f;f++)i.pop();i=i.join("/"),i=""==i?"":i+"/"}return i+a+j},load.getPaths=function(a){function b(a){return load.getPath(a)}var c=type(a),d=a;if("string"==c)return b(a);if("array"==c){d=[];for(var e=0;e<a.length;e++)d[e]=b(a[e])}return d},load.event=function(a,b,c){a.onload=a.onreadystatechange=function(){/^(?:loaded|complete|undefined)$/.test(this.readyState)&&b&&b.call(this)},a.onerror=function(){c&&c.call(this)}},require.async=function(){noJS.use.apply(null,Array.prototype.slice.apply(arguments))},window.define=function(){function a(){check(f)}var b,c=Array.prototype.slice.call(arguments),d=c.slice(-1)[0],e=type(d),f="array"==type(load.point)?load.point.shift():load.point;if(f=modules[f],f.factory=d,"function"==e)if(b=parseRequire(d.toString()),b.length){if(f.deps=[].concat(b),config.pack&&"string"==typeof load.point){load.point=load.getPaths(b);var g,h;for(g=0;g<b.length;g++)h=load.getPath(b[g]),modules[h]={id:h};return}load.add(b,a)}else a();else f.exports=d},noJS.config=function(a){var b;a=a||{};for(b in a)config[b]=a[b];configFile=null,onReady&&onReady();var c=config.pack;c&&("object"!=type(c)||"string"!=typeof c.base||(c.path=c.path||"",c.fix=c.fix||config.fix));var d=config.global;if(!globalExports&&d&&(d="string"==typeof d?[d]:d,"array"==type(d))){if(globalExports=[],defaultLoad.deps=defaultLoad.gdeps=[].concat(d),c){var e=d;d=d.slice(0,1),d.point=e}load.add(d,function(){depsToExports(defaultLoad.deps,!0)},null,!0)}var f,g,h,i,j,k,l=config.page;if(l){if("string"==typeof l)return noJS.use(l),noJS;f=location.href.split(/[#?]/)[0],g=location.host,h=function(){return/^www[\.]/.test(g)||g.indexOf(".")==g.lastIndexOf(".")}(),i=new RegExp(g.replace(/\./g,"\\.")+"/$").test(f);a:for(b in l)if("main"==b&&h||new RegExp("^"+b+"[.]").test(g)){j=l[b];for(k in j)if("index"==k&&i||f.indexOf(k)>1){noJS.use(j[k]);break a}}}return noJS},noJS.use=function(a,b,c){function d(a){b&&b.apply(null,a)}var e=load,f=type(a);return a?("function"==f?(b=a,d.deps=[].concat(defaultLoad.gdeps),modules.start.push(d),load.state||check()):("array"==f||"string"==f)&&("string"==f&&(a=[a]),"object"==type(b)&&(c=b,b=null),defaultLoad.deps=defaultLoad.deps.concat(a),d.deps=defaultLoad.gdeps.concat(a),e.add(a,function(){modules.start.push(d)},c)),noJS):noJS};var script=d.getElementsByTagName("script"),Len=script.length,nojsScript=d.getElementById("nojs")||script[Len-1];if(defaultLoad.deps=[],defaultLoad.gdeps=[],!function(){for(var a,b,c,a=0;Len>a;a++)b=getSrc(script[a]),b&&(modules[b]={id:b},!c&&(config.base=c=b.split("/").slice(0,-2).join("/")+"/"))}(),defaultLoad(),_noJS&&_noJS.args)for(var methods=["define","config","use"],args=_noJS.args,i=0;i<args.length;i+=2)noJS[methods[args[i]]].apply(noJS,args[i+1])}}(this),noJS.config({base:"js/",global:["nojs/jquery","nojs/ui"],page:"main"});