function monthlySavings(arr,livingCost){
    if( !Array.isArray(arr) || typeof livingCost !== "number" ){
        return " invalid input ";
    }else {
        //code
        console.log("main array : ",arr+"\nliving cost : ",livingCost);

        for (let j of arr) {
            if(j>=3000){
               let tax = j * 0.2;
                let afterTax = j - tax;
                console.log("tax is : ",tax)
                console.log("after tax : ",afterTax);
                arr[arr.indexOf(j)] = afterTax;
               
            }
        }
        console.log("giving tax then taka: ",arr);

        //calculate
        let totalIncome = 0
        for (const i of arr) {
            totalIncome += i;
        }
        let saving = totalIncome - livingCost;
        console.log(" income =",totalIncome)
        console.log(" saving =",saving)
        if(saving < 0){
            console.log("=> earn more")
        }else{
            console.log("=> ",saving)
        }

       return "perfect"
    }
}


let a = [1000,2500,2000];
let b = 5000;
let c = monthlySavings(a,b);
console.log("=> ",c);