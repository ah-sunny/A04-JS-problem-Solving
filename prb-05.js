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
            return "earn more";
        }else{
            return saving;
        }
      
    }
}


let a = [900,2700,3400];
let b = 5000;
let c = monthlySavings(a,b);
console.log("=> ",c);