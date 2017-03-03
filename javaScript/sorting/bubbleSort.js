// https://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/

function bubbleSort(arr) {

	function swap(arr, firstIndex, secondIndex) {
		var temp = arr[firstIndex];
		arr[firstIndex] = arr[secondIndex];
		arr[secondIndex] = temp;
	}

	var length = arr.length,
		i, j, stop;

	for (i = 0; i < length; i++) {
		for (j = 0, stop = length - i; j < stop; j++) {
			if (arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
			}
		}
	}

	return arr;
}

var unsorted = [3, 1, 5 ,2, 4];

var sorted = bubbleSort(unsorted);

console.log(sorted);