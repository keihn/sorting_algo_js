
//Test array
array = [5, 1, 4, 2, 8 ]

/**
 * @param array
 * @return array
 */

function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j+1] < array[j]){
                temp  = array[j]
                array[j] = array[j+1];
                array[j+1] = temp
            }
        }
    }
    return array
}

//test thr code here
var bubble = new bubbleSort(array)
console.log(bubble)