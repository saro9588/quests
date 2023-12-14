const binarySearch = (array, target) => {
	// min and max are indexes
	let min = 0 
	let max = array.length - 1
	// while loop will run until min and max cross each other
	while(min <= max) {
		// find middle index
		const middle = Math.floor((min + max) / 2)
		const current = array[middle]
		// determine if we need to search left or right or end if we found it
		if(target < current) max = middle - 1 // search left
		if(target > current) min = middle + 1 // search right
		if(target === current) return middle  // found it
	}
	// while loop ended without finding target
	return -1
}

const _binarySearch = (arr, target) => {
	if (arr.length === 0) return -1
	return rBinarySearch(arr, target, 0, arr.length - 1)
}

const rBinarySearch = (arr, target, min, max) => {
	if (min > max) return -1
	const middle = Math.floor((min + max) / 2)
	const current = arr[middle]
	// determine if we need to search left or right
	if (target < current) max = middle - 1 // search left
	if (target > current) min = middle + 1 // search right
	if (target === current) return middle  // found it

	// recursive call to search again left or right
	return rBinarySearch(arr, target, min, max)
}


module.exports = binarySearch