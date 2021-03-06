!function(){
	var debug = location.host!='nolure.github.io',
		_debug = /[?&]nojs-debug=(true|false)(?:&|$|#)/.exec(location.href),
		mobile = location.href.indexOf('m.html')>0,
		prefix = debug ? '' : '/nojs.docs';
	if( _debug ){
		debug = _debug[1]=='true' ? true : false;
	}
	if( mobile ){
	    window.Page = 'mobile';
	}
	noJS.config({
		base : prefix + (debug ? '/public/src/' : '/public/js/'),
		pack : !debug && {relative:true},
		global : mobile ? ['m/zepto','m/ui'] : ['nojs/jquery','nojs/ui'],
		page : ['main',function(){
		    //console.log(arguments)
		}],
		update : {
		    version : '2013.11.22',
		    files : ['main']
		}
	});
}();
