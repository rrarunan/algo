(function() {

	var array = [2, -3, 4, 10, 0, 3, 4, 8, 5, 50, 6, 21, 34, 11, 0, 32, 100, 31, 15];

	console.log(array);

	/*var printArray = function(a, i, j) {
		return Array.prototype.slice(a, i, j);
	};

	var merge = function(a, temp, lo, mid, hi) {

		//make sure `a` is sorted i.e
		//a[lo...mid+1] and a[mid+1...hi] subarrays are sorted

		//console.log(printArray(a, lo, mid));
		//console.log(printArray(a, mid+1, hi));

		//copy a into temp
		for(var k=lo; k<hi; ++k) {
			temp[k] = a[k];
			console.log("temp[k]:" + temp[k] + "|" + "a[k]:" + a[k]);
		}

		//compare and merge back to a
		var i = lo,
			j = mid + 1;

		for(k=lo; k<=hi; ++k) {
			if (i > mid) {
				a[k] = temp[j++];
			} else if (j > hi) {
				a[k] = temp[i++];
			} else if (temp[j] < temp[i]) {
				a[k] = temp[j++];
			} else {
				a[k] = temp[i++];
			}
		}

		//console.log(printArray(a, lo, hi));

	};

	function sort(a, temp, lo, hi) {
		if (hi <= lo) {
			return;
		}
		//straightforward partition unlike quicksort
		mid = Math.floor(lo + ((hi - lo) / 2));
		console.log("mid:" + mid);
		sort(a, temp, lo, mid);
		sort(a, temp, mid+1, hi);
		merge(a, temp, lo, mid, hi);
	};

	var mergeSort = function(array) {
		var tempArray = [];
		var n = array.length;
		sort(array, tempArray, 0, n-1);
	};

	mergeSort(array);

	console.log(array);*/


	function mergesort(a){
	    if (a.length <=1) {
	        return a;
	        }
	    var mid = Math.round((a.length/2));
	    var left = a.slice(0, mid);
	    var right = a.slice(mid);
	    console.log(left,right);
	    return merge(mergesort(left), mergesort(right));
	}

	function merge(left, right) {
	    var sorted = [];
	    console.log(sorted,left, right, left[0], right[0]);
	    while (left && left.length >0 && right && right.length >0){
	        if (left[0] <= right[0]) {
	            sorted.push(left.shift());
	            console.log("left", left, right);
	        }
	        else {
	            sorted.push(right.shift());
	            console.log("right", left, right);
	        }
	    }
	    return sorted.concat(left,right);
	}

	console.log(mergesort(array));
	
}) ();