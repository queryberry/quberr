class ArrWorker {
    constructor(x){
        this.x = x;
    }

    //function for fun
    bubbleSort(x=''){
        if(x == 'debug'){
            console.time('Sorted time bubble');
        }

        let arr = this.x;
        let arrLenght = arr.length;

        for (let i = 0; i < arrLenght; i++){
            for (let j = 0; j < arrLenght; j++){
                if (arr[j] > arr[j + 1]){
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }

        if(x == 'debug'){
            console.timeEnd('Sorted time bubble');
        }
        
        return arr;
    }

    quickSort(y='') {
        if(y == 'debug'){
            console.time('Sorted time quic');
        }

        let x = this.x;

        function swap(items, leftIndex, rightIndex){
            var temp = items[leftIndex];
            items[leftIndex] = items[rightIndex];
            items[rightIndex] = temp;
        }

        function partition(items, left, right) {
            var pivot = items[Math.floor((right + left) / 2)], 
                i = left, 
                j = right; 
            while (i <= j) {
                while (items[i] < pivot) {
                    i++;
                }
                while (items[j] > pivot) {
                    j--;
                }
                if (i <= j) {
                    swap(items, i, j); 
                    i++;
                    j--;
                }
            }
            return i;
        }
        
        function quickSort(items, left, right) {
            var index;
            if (items.length > 1) {
                index = partition(items, left, right); 
                if (left < index - 1) { 
                    quickSort(items, left, index - 1);
                }
                if (index < right) { 
                    quickSort(items, index, right);
                }
            }
            return items;
        }

        var sortedArray = quickSort(x, 0, x.length - 1);

        if(y == 'debug'){
            console.timeEnd('Sorted time quic');
        }

        return sortedArray;
        
    }
    

    // нужно дописать


}

module.exports = ArrWorker