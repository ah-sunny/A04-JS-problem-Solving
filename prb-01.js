function calculateMoney(ticketSale) {
    if ( typeof ticketSale !== "number"){
        return "“Invalid Number”";
    } else{
        let fixLoss = (500 + (8 * 50));
        let earnByTicket = (ticketSale * 120 );
        let earnTk = earnByTicket - fixLoss;
        if ( earnTk < 0){
            return "error :: please input: (0<=Input)" 
        }else{
            return earnTk;
        }
    }
    
}

let callFun = calculateMoney(-130)
console.log("result == ", callFun);