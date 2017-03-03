// 思考：给出一个数组，这个数组的任意两个元素组合，共有多少种组合方式，能否罗列出来。

function composition1(arr) {

	var len = arr.length,
		newArr = [],
		i, j;

	for (i = 0; i < len; i++) {
		for (j = 0; j < len; j++) {
			newArr.push( arr[i] + arr[j] );		
		}
	}

	return newArr;
}

/*上面这种方式，两个遍历嵌套，内外两个遍历的次数是一样的，相当于是 arr.length * arr.length 种方式。但是如果题目要求
不能和自身组合，且两个元素的先后组合顺序不算两种组合的话，应该怎么设计遍历的嵌套呢？看下面的设计
*/
 
function composition2(arr) {

	var len = arr.length,
		newArr = [],
		i, j;

	for (i = 0; i < len; i++) {
		for (j = i+1; j < len; j++) {
			newArr.push(arr[i] + arr[j]);
		}
	}
	return newArr;
}

var res1 = composition1(['a', 'b', 'c']);
console.log(res1);

var res2 = composition2(['a', 'b', 'c']);
console.log(res2);

/* 上面这种方式就排除了和自身组合，还有两个组合元素相同但是只是顺序不同时，算一种新组合的情况。这种组合共有
arr.length + (arr.length-1) + (arr.length-2) + .... + 1 种组合。 
*/