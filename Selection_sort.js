// Test array
array = [67, 25, 11, 22, 10]

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {

        //keep track of the minimum index
        minimum_index = i
    
        for (let j = i+1; j < array.length; j++) {
            if(array[minimum_index] > array[j]){

                //update the minimum index 
                minimum_index = j
            }
        }
    
        //swap the lowest element - putting it at the beginning
        temp = array[minimum_index];
        array[minimum_index] = array[i];
        array[i] = temp
    }

    return array
}


console.log(selectionSort(array))