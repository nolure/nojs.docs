/*2013/11/19-http://nolure.github.io/nojs.docs*/define("nojs/module/imgcapture",[],function(require,a){function b(a){this.options=a||{},this.url=a.url,this.url&&"string"==typeof this.url&&(this.wrap=null,this.init())}return b.prototype={init:function(){this.wrap=a("<div></div>").appendTo(document.body),this.wrap.load(this.url,function(){this.contentWindow})}},b});