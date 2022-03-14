const args = process.argv
const flag = String(args[2])

function converterBin(value){
    
    const number = parseInt(value)
    const res = [{value:number, res:undefined}]
    let result = ""
    
    while(res[res.length - 1].value > 1){
    
        const dividend = res[res.length - 1].value
    
        res.push({
            value: dividend/2,
            res: parseInt(dividend%2)
        })
    
    }

    res.forEach((data, i) =>{
    
        if(i > 0){
        
            if(result){
                
                result += String(data.res)
    
            }else{
                
                result = String(data.res)
    
            }
    
        }
    })
    return result.split("").reverse().join("")
}

function converterInt(value){

    let number;

    if(typeof value == "string"){

        const bin = value.toString().split("").reverse()
        const binArr = bin.map(x => parseInt(x))
        
        binArr.forEach((value, numberI) =>{

            if(number){
                number += (2**numberI)*value 
            }else{
                number = (2**numberI)*value
            }
        
        })
    
        
    }
    return number
}


if(flag.startsWith("-")){
    if(flag == "-i"){
        console.log(converterInt(args[3]))
    }else if(flag == "-b"){
        console.log(converterBin(args[3]))
    }
}
