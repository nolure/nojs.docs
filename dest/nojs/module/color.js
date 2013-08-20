/*nolure@vip.qq.com http://nolure.github.io/nojs.docs*/define("nojs/module/color",[],function(require,a){function b(c){function d(){var b=['<div id="nj_color">','<div class="mask"><div class="b"></div><div class="c" data="s"></div></div>','<div class="roll"><div class="c" data="r"></div></div>','<div class="r">','<span class="preview"><i></i>颜色</span>',"<dl>",'<dd><label>H：</label><input name="h" value="0" />度</dd>','<dd><label>S：</label><input name="s" value="0" />%</dd>','<dd><label>B：</label><input name="b" value="0" />%</dd>',"</dl>","<dl>",'<dd><label>R：</label><input name="_r" value="255" /></dd>','<dd><label>G：</label><input name="_g" value="255" /></dd>','<dd><label>B：</label><input name="_b" value="255" /></dd>','<dd class="color"><label>#</label> <input name="color" value="#ffffff" /></dd>',"</dl>",'<input type="button" class="ok" value="确定" /> <input type="button" class="close" value="取消" />',"</div>","</div>"];n=a("body").append(b.join("")).find("#nj_color"),k=n.find(".mask"),maskDrag=k.find(".c"),l=n.find(".roll"),rollDrag=l.find(".c"),m=n.find(".preview i");var c=n.find("dd input");o={h:c.eq(0),s:c.eq(1),b:c.eq(2),R:c.eq(3),G:c.eq(4),B:c.eq(5),color:c.eq(6)},a(document).click(function(){j()}),e()}function e(){function b(b,c){var h=!b.hasClass("roll"),i=h?maskDrag:rollDrag,j=h?6:3;d={x:c.clientX,y:c.clientY},g=d.y+a(window).scrollTop()-b.offset().top,g=0>g?0:g,g=g>255?255:g,i.css({top:g-j}),h?(p.b=100-100*g/255,e=d.x+a(window).scrollLeft()-b.offset().left,e=0>e?0:e,e=e>255?255:e,i.css({left:e-j}),p.s=100*e/255):(p.h=360-360*g/255,p.h=360==p.h?0:p.h),f(h),a.stopDefault(c)}n.click(function(b){a.stopBubble(b);var c=b.target,d=a(c);d.hasClass("close")&&j()});var d,e,g,h=a(document);n.find(".mask,.roll").mousedown(function(c){var d=a(this);b(d,c),h.bind("mousemove.color",function(a){b(d,a,!0)}).bind("mouseup.color",function(){h.unbind("mousemove.color mouseup.color")})}),n.find(".ok").click(function(){c.val("#"+p.color),j()})}function f(a){var c,d;o.h.val(Math.round(p.h)),o.b.val(Math.round(p.b)),o.s.val(Math.round(p.s)),c=b.HsbToRgb(p.h,p.s,p.b),o.R.val(Math.round(c.R)),o.G.val(Math.round(c.G)),o.B.val(Math.round(c.B)),p.color=b.RgbToHex(c.R,c.G,c.B),o.color.val(p.color),m.css("background","#"+p.color),a||(d=b.HsbToRgb(p.h,100,100),k.css("background","rgb("+Math.round(d.R)+","+Math.round(d.G)+","+Math.round(d.B)+")"))}function g(a){if(a&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(a)){var c=b.HexToRgb(a),d=b.RgbToHsb(c.R,c.G,c.B);p.h=d.H,p.s=d.S,p.b=d.B,f(!1),maskDrag.css({top:255-255*d.B/100-6,left:255*d.S/100-6}),rollDrag.css({top:255-255*d.H/360-3})}}function h(b){var c=b.length;if(c)for(var d=0;c>d;d++)!function(b){b.click(function(c){a.stopBubble(c),i(b)})}(b.eq(d))}function i(a){!n.length&&d();var b=a.offset().left+"px",c=a.offset().top+a.outerHeight()+"px";n.css({display:"block",left:b,top:c}),g(a.val())}function j(){n.hide()}var k,l,m,n=a("#nj_color"),o={},p={h:0,s:0,b:0,R:255,G:255,B:255,color:"ffffff"};return h(c),{add:h}}return b.HsbToRgb=function(a,b,c){var d={R:0,G:0,B:0};if(a=a>=360?0:a,b/=100,c/=100,0==b)d.R=255*c,d.G=255*c,d.B=255*c;else{switch(i=Math.floor(a/60)%6,f=a/60-i,p=c*(1-b),q=c*(1-b*f),t=c*(1-b*(1-f)),i){case 0:d.R=c,d.G=t,d.B=p;break;case 1:d.R=q,d.G=c,d.B=p;break;case 2:d.R=p,d.G=c,d.B=t;break;case 3:d.R=p,d.G=q,d.B=c;break;case 4:d.R=t,d.G=p,d.B=c;break;case 5:d.R=c,d.G=p,d.B=q}d.R=255*d.R,d.G=255*d.G,d.B=255*d.B}return d},b.RgbToHsb=function(a,b,c){var d,e,f,g=Math.min(Math.min(a,b),c),h=Math.max(Math.max(a,b),c),i={H:0,S:0,B:0};return g==h?i.H=0:h==a&&b>=c?i.H=60*((b-c)/(h-g)):h==a&&c>b?i.H=60*((b-c)/(h-g))+360:h==b?i.H=60*((c-a)/(h-g))+120:h==c&&(i.H=60*((a-b)/(h-g))+240),i.S=0==h?0:1-g/h,d=a/255,e=b/255,f=c/255,i.B=Math.max(Math.max(d,e),f),i.H=i.H>=360?0:i.H,i.S=100*i.S,i.B=100*i.B,i},b.RgbToHex=function(a,b,c,d){for(var e,f="",g=[Math.round(a),Math.round(b),Math.round(c)],h=0;h<g.length;h++)e=Number(g[h]).toString(16),1==e.length&&(e="0"+e),f+=e;return d&&(f="#"+f),f},b.HexToRgb=function(a){var b=String(a).toLowerCase().replace(/#/,""),c=/^([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,d="",e=[];if(b&&c.test(b)){if(3==b.length){for(var f=0;3>f;f++)d+=b.slice(f,f+1)+b.slice(f,f+1);b=d}for(var f=0;5>f;f+=2)e.push(parseInt("0x"+b.slice(f,f+2)));return{R:e[0],G:e[1],B:e[2]}}return b},b});