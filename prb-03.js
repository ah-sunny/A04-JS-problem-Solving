function deleteInvalids(arr) {
    let numArray = [];
    if( !Array.isArray(arr) ){
        return " “Invalid Array” ";
    }else {
        //code
        for (const num of arr) {
            if(typeof num === 'number' && !isNaN(num)){
                numArray.push(num);
            }
        }

        return numArray;
    }

}

let num = [ "10",{num:2},NaN,undefined];
// let num = {num : [1,2,3,4]}
// let num = [1,2,-3];

let callFun = deleteInvalids(num)
console.log(callFun)
