/*nolure@vip.qq.com|http://nolure.github.io/nojs.docs*/define("nojs/module/scroll",[],function(require,a){var b=function(b,c){this.box=a("#"+b),this.box.length&&(this.wrap=this.box.find(".nj_s_wrap"),this.con=this.wrap.find(".nj_s_con"),this.item=this.con.children(),this.len=this.item.length,this.opt=c=c||{},this.direction=c.direction||"x",this.step="undefined"!=typeof c.step?parseInt(c.step):1,this.time=c.time||4e3,this.size={box:"x"==this.direction?this.wrap.width():this.wrap.height(),total:"x"==this.direction?null:this.con.height(),item:"x"==this.direction?this.item.outerWidth(!0):this.item.outerHeight(!0)},this.view=Math.ceil(this.size.box/this.size.item),this.repeat=c.repeat||!1,this.auto=1==c.auto?!0:!1,this.onScroll=c.onScroll,this.init())};return b.prototype={init:function(){var a,b=this;this.len>this.view&&(this.repeat&&this.item.slice(0,0!=this.len%2&&this.view>1?this.len:this.view).clone().appendTo(this.con),"x"==this.direction?(a=this.repeat?this.len+(0!=this.len%2&&this.view>1?this.len:this.view):this.len,this.size.total=a*this.size.item,this.con.css({width:this.size.total})):this.size.total=this.con.height(),this.start(),this.box.hover(function(){b.stop()},function(){b.start()}))},start:function(){var a=this;this.auto&&this.len>this.view&&(clearInterval(a.A),this.A=setInterval(function(){a.scroll()},a.time))},stop:function(){this.A=clearInterval(this.A)},scroll:function(a){if(!this.wrap.is(":animated")){var b,c,d=this,a=a||"+";0==this.step?(b=1,c=0):(b=this.step*this.size.item,c=400*this.step),"-"==a&&(b=-b),"x"==this.direction?(this.scrollLeft=this.wrap.scrollLeft()+b,this.wrap.animate({scrollLeft:"+="+b},c,"easeOutExpo",function(){d.wrap.scrollLeft()>=d.size.item*(d.len-(d.repeat?0:d.view))&&(d.repeat&&d.wrap.scrollLeft(0),d.repeat&&0==d.step&&d.scroll()),d.opt.onScrollEnd&&d.opt.onScrollEnd.call(d)})):(this.scrollTop=this.wrap.scrollTop()+b,this.wrap.animate({scrollTop:"+="+b},c,"easeOutExpo",function(){d.wrap.scrollTop()>=d.size.item*(d.len-(d.repeat?0:d.view))&&(d.repeat&&d.wrap.scrollTop(d.wrap.scrollTop()-d.len*d.size.item),d.repeat&&0==d.step&&d.scroll()),d.opt.onScrollEnd&&d.opt.onScrollEnd.call(d)})),d.onScroll&&d.onScroll()}}},b});