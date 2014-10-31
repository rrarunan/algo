(function() {

	function KFYShuffle(array) {
		//swp function
		function swp(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		var movingIdx = array.length,
			currIdx;

		while (movingIdx > 0) {
			//console.log("--------");
			//console.log(movingIdx);
			currIdx = Math.floor(Math.random() * --movingIdx);
			//console.log(currIdx);
			//console.log(movingIdx);
			//console.log("--------");
			//swp
			swp(array, currIdx, movingIdx);
		}

		return array;
	}

	var arrayToShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	console.log(arrayToShuffle);
	console.time("KFY Shuffle took");
	console.log(KFYShuffle(arrayToShuffle));
	console.timeEnd("KFY Shuffle took");

}) ();