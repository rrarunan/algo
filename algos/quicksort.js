//quick sort

( function() {
var array = [2, -3, 4, 10, 0, 3, 4, 8, 5, 50, 6, 21, 34, 11, 0, 32, 100, 31, 15];
//var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 5, 6, 7, 8, 2, 3, 0, 1, 2, 3];

console.log(array);

//A random shuffle before a quicksort improves the speed/reliability of the sort
var quickSort = function(a) {
	sort(a, 0, a.length - 1);
}

//recursive function to sort partitioned subarrays
var sort = function(a, lo, hi) {
	if (hi <= lo) {
		return;
	}
    var j = partition(a, lo, hi);
    sort(a, lo, j-1);
    sort(a, j+1, hi);
    //assert isSorted(a, lo, hi);
};

//Main partition function that returns the index
//of where the partition element should be.
var partition = function(a, lo, hi) {
	var i = lo,
		j = hi + 1,
		v = a[lo];

	console.log("Outside while of partition(" + lo  + "," + hi + ")");
	console.log("SubArray: [");
	for(var idx = lo; idx <= hi; ++idx) {
		(idx === hi) ? console.log(a[idx]) : console.log(a[idx] + ",");
	}
	console.log("]");

	while(true) {
		while(a[++i] < v) {
			if(i===hi) {
				console.log("breaking out of lo while loop");
				break;
			}
		}

		while(v < a[--j]) {
			if(j===lo) {
				console.log("breaking out of hi while loop");
				break;
			}
		}

		console.log("i, j -> " + i + "," + j);

		if (i >= j) {
			console.log("breaking out of i >= j while loop");
			break;
		}

		console.log("exchanging " + a[i] + "and" + a[j]);
		exch(a, i, j);
	}

	//put item v at a[j]
	console.log("exchanging " + a[lo] + "and" + a[j]);
	exch(a, lo, j);

	return j;
};

var exch = function(a, i, j) {
	var swp = a[i];
	a[i] = a[j];
	a[j] = swp;
	console.log("Array after swp:" + a);
};

/*
http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
Fisher-Yates shuffle
*/
var shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

console.time("Quicksort Without Random Shuffle");
quickSort(array);
console.timeEnd("Quicksort Without Random Shuffle");

shuffle(array);
console.time("Quicksort With Random Shuffle");
quickSort(array);
console.timeEnd("Quicksort With Random Shuffle");


} ) ();

