import { features } from "process";


function storeCarInfo(manufacturer:string, modleName:string, ...extraOption:{ [ key:string ]: any }[]): 
object{ 
     const carinfo ={
        manufacturer,
        modleName,
        ...Object.assign({},...extraOption)
    }

    return carinfo;
}

let ans = storeCarInfo('Honda','Civic',{colour:'Black'},{features:['nevigation','powerwindow']})
console.log(ans)

