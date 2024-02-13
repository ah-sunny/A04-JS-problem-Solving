function checkName(babyName){
    if(typeof babyName !== 'string' ){
        return "invalid";
    }else{
        let lastWrd = babyName[babyName.length-1];
        //console.log("last word = ", lastWrd); 
        if (lastWrd === 'A' || lastWrd === 'Y' || lastWrd === 'I' || lastWrd === 'E' || lastWrd === 'O' || lastWrd === 'U' || lastWrd === 'W' || lastWrd === 'a' || lastWrd === 'y' || lastWrd === 'i' || lastWrd === 'e' || lastWrd === 'o' || lastWrd === 'u' || lastWrd === 'w'){
            return "Good Name";
    
        }else {
            return "Bad Name";
        }
    }

}

let callFun = checkName('RAFEE');
console.log(callFun);