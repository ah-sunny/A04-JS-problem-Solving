
function calculateMoney(ticketSale) {
    if ( typeof ticketSale !== "number"){
        return "“Invalid Number”";
    } else{
        let fixLoss = (500 + (8 * 50));
        let earnByTicket = (ticketSale * 120 );
        let earnTk = earnByTicket - fixLoss;
        if ( earnTk < 0){
            return "Invalid Number :: please input: (0<=Input)" ;
        }else{
            return earnTk;
        }
    }
    
}

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

function deleteInvalids(arr) {
    let numArray = [];
    if( !Array.isArray(arr) ){
        return " “Invalid Array” ";
    }else {
        
        for (const num of arr) {
            if(typeof num === 'number' && !isNaN(num)){
                numArray.push(num);
            }
        }

        return numArray;
    }

}

function password(obj){
    if(typeof obj !== "object"){
        return "invalid";
    }else {

        if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || typeof obj.name !== 'string' || typeof obj.siteName !== 'string'  ){
            return "invalid";
        }else if (typeof obj.birthYear === 'number' && obj.birthYear >= 1000 && obj.birthYear <= 9999){

            let len = obj.siteName.length;
            let webName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1,len);
            let pass = webName +'#'+ obj.name +'@'+obj.birthYear ;


            return pass;
        }else{
            return "invalid";
        }
      
    }
}

function monthlySavings(arr,livingCost){
    if( !Array.isArray(arr) || typeof livingCost !== "number" ){
        return " invalid input ";
    }else {
        
        for (let j of arr) {
            if(j>=3000){
               let tax = j * 0.2;
                let afterTax = j - tax;
                arr[arr.indexOf(j)] = afterTax;
               
            }
        }

        //calculate
        let totalIncome = 0
        for (const i of arr) {
            totalIncome += i;
        }
        let saving = totalIncome - livingCost;
        
        if(saving < 0){
            return " “earn more” ";
        }else{
            return saving;
        }
      
    }
}
