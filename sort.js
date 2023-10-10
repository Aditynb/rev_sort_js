function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
} 
const arr1=[ 1,2,3,7,6];
console.log(arrSort(arr1))