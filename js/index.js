//模块配置信息
require.config({
	//baseUrl: "./",
	paths: {
		//工具模块
		'less': 'tools/less.min',
		'jquery': 'tools/jquery.min',
	}
});

require(['less']);

require(['jquery'], function($){
	$(window).on('keydown', function(event){
		var keyCode = event.keyCode;
		if (keyCode >36 && keyCode < 41){
			event.preventDefault();
			switch(keyCode){
				case 37:
					console.log('left');
					//$('#game-area .move-block').animate({}, 2000);
					break;
				case 38:
					console.log('up');
					break;
				case 39:
					console.log('right');
					break;
				case 40:
					console.log('down');
					break;
			}
		}
	});
});