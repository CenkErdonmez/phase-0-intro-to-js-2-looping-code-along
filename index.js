// Code your solutions in this file
const arr = []
function writeCards(arr,event){
    for (let i=0; i< arr.length;i++){
        arr[i]=`Thank you, ${arr[i]}, for the wonderful ${event} gift!`
        
    }
    return arr
}

function countDown(num){
    while (num >= 0){
        console.log(num--)
    }
}