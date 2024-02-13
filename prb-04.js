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


let sani = { name: "sani" , birthYear:2002, siteName: "google"  }
let callf = password(sani);
console.log(" => ",callf);