define('dyadicArray', ['jquery'], function($){
	var array;

	function randomArray(size){
		array = [];
		var count = 0;
		for (var i = 0; i < size; i++){
			var row = [];
			for (var j = 0; j < size; j++){
				var ranNum = Math.random();
				if (ranNum < 0.8){
					row.push(0);
				}
				else if (ranNum < 0.93){
					row.push(2);
					count ++;
				}
				else{
					row.push(4);
					count ++;
				}
			}
			array.push(row);
		}
		if (count <3){
			arguments.callee(size);
		}
	}

	return {
		init: randomArray,
		newOne: function(){
			var possibility = [];
			for (var i = 0; i < array.length; i++){
				for (var j = 0; j < array.length; j++){
					if (array[i][j] == 0){
						var value = Math.random()>0.6? 4 : 2;
						var obj = {
							x: j,
							y: i,
							value: value
						}
						possibility.push(obj);
					}
				}
			}
			if (possibility.length == 0){
				alert('游戏结束');
				return false;
			}

			var random = Math.floor( Math.random() * possibility.length );
			//更新array数据
			array[possibility[random].y][possibility[random].x] = possibility[random].value;
			return possibility[random];
		},
		array: function(){
			return array;
		}
	};
});