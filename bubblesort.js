function bubbleSort(arr){
	var tmp = 0;
	for(var j = arr.length; j > 0; j--){
		for(var i=0; i < j - 1; i++){
				compare(arr, i);
			}
		}		
	
	return arr;
}

function compare(arr, i){
	if (arr[i] > arr[i + 1]){
		swap(arr, i)
		return arr;	
	}
}

function swap(arr, i){
	tmp = arr[i];
	arr[i] = arr[i + 1];
	arr[i + 1 ]	=  tmp;
	return arr;	
}