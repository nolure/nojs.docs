define(function(require,$,ui){
    
	var demo = {
		container : $('#demo_content').css('opacity','0'),
		isOpen : null
	},
	codeLight = require('nojs/module/codelight'),
	url = require('./url'),
	setUrl = url.setUrl,
	option = $('#ui_head .options');	
	
	demo.openFirst = setUrl('demo')!=undefined;
	
	demo.getHtml = function(){
		if( !demoAction || !demoAction.item ){
			return '';
		}
		var _demo = '',
			n = demoAction.item.length,
			i;
		_demo = [
			'<div class="demo_wrap">',
				'<div class="demo_head">',
					'<a href="" data-action="back" class="nj_btn">返回</a>',
					'<a href="" data-action="source" class="nj_btn n_b_sb">获取示例源码</a>',
				'</div>',
				demoAction.html || ''
		].join('');
		if( n ){
			_demo += '<ul class="nj_s_menu clearfix">';
			for( i=0; i<n; i++ ){
				_demo += '<li class="nj_s_m">demo'+(i+1)+'</li>';
			}
			_demo += '</ul>';
			_demo += '<div class="nj_s_con">';
			
			for( i=0; i<n; i++ ){
				_demo += '<div class="nj_s_c">'+(demoAction.item[i].content||'')+'</div>';
			}
			_demo += '</div>';
		}
		
		_demo += '</div>';
		return _demo;
	}
	demo.show = function(index){
	    index = parseInt(index || 0);
		var btn = option.find('a[data-action=demo]');
		demo.index = index;
		demo.source[setUrl('source')?'show':'hide']();
		!demo.isOpen && btn.click();
		demo.tab.change(index);
	}
	demo.hide = function(){
		var btn = option.find('a[data-action=demo]');
		demo.isOpen && btn.click();
	}
	
	demo.container.click(function(e){
		var t = e.target,
			m, act;
		if( t.tagName.toLowerCase()=='a' ){
			m = $(t);
			act = m.attr('data-action');
			if( act=='back' ){
				demo.hide();
				return false;
			}else if( act=='source' ){
				demo.source.show(m);
				return false;
			}
		}	
	})
	demo.source = function(){
		var win, button;
		function init(){
			win = new ui.popup({
				width : '85%',
				onShow : function(){
				    setUrl('source', 1);
				},
                onHide : function(){
                    setUrl('source', null);
                }
			});
			win.element.css('max-width','900px');
			button.data('win', win);
		}
		function str(fun){
			fun = typeof fun=='function' ? 
				fun.toString()
				.replace(/^function\s*\([^\(\)]*\)\s*{/,'')
				.replace(/\s*}$/,'\n')
				.replace(/\t/g,'    ')//替换制表符
				.replace(/[\s\r\n]*(\/\/)(\*\*)(hide)[\s\S]*\1\3\2[\s\r\n]*/g,'\n')//替换隐藏代码
				: '';
				
			if( fun.length>4 ){
				var tab = fun.length-fun.replace(/(^\s*)/,'').length;
				tab = Math.floor(tab/4)*4;
				fun = fun.replace(new RegExp("(\\n\\s{"+tab+"})","g"),'\n') //去除行首多余空格
			}	
			return fun;
		}
		return {
			show : function(obj){
			    obj = obj || demo.container.find('a[data-action=source]');
				win = obj.data('win');
				button = obj;
				!win && init();
				var item = demoAction.item[demo.index],
				html = [
					'<div style="height:500px;overflow:auto"><script type="text/templete" code="html">',
						'<!DOCTYPE html>',
						'<html>',
						'<head>',
						'<meta charset="utf-8" />',
						'<title>'+Menu.selected+'示例'+(demo.index+1)+'- nojs</title>',
						'<base href="http://nolure.github.io/nojs.docs/" />',
						'<link rel="stylesheet" href="public/css/ui.css" />',
						'<link rel="stylesheet" href="public/css/base.css" />',
						'<link rel="stylesheet" href="public/css/main.css" />',
						'<script src="public/src/nojs/noJS.js" data-config="global:[\'nojs/jquery\',\'nojs/ui\']" id="nojs"></ script>',
						'</head>',
						'<body>',
							demoAction.html ? demoAction.html.replace(/^\n*/,'') : '',
							item.content ? item.content.replace(/^\n*/,'') : '',
							'<script>'+str(item.callback||demoAction.callback)+'</ script>',
						'</body>',
						'</html>',
					'</script></div>',
				], code;
				win.set('title', Menu.selected+' - 示例'+(demo.index+1)+'源码');
				win.set('content', html.join('\n'));
				code = new codeLight({parent:win.content});
				win.show();
				//code.select();
			},
			hide : function(){
			    win && win.hide();
			}
		}
	}();
	
	
	url.onHashChange.push(function(e, data){
        var key = data.key;
        
        //console.log(key,demo.tab && demo.isOpen && setUrl('demo')!=demo.index)
        if( key == 'demo' || key == 'source' ){
            if( demo.isOpen ){
                demo.tab && setUrl('demo')!=demo.index && demo.tab.change(setUrl('demo'));
            }else{
                demo.show();
            }
            demo.source[setUrl('source')?'show':'hide']();              
        }
    })
	
	return demo;
});