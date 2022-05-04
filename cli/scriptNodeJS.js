const args = process.argv
const flag = String(args[2])

function converterBin(value){
    let num = parseInt(value)
    let binary = (num % 2).toString()

    while(num > 1){
        num = parseInt(num / 2)
        binary = (num % 2) + binary 
    }
    return binary
}

function converterInt(value){

    let number;

    if(typeof value == "string"){

        const bin = value.toString().split("").reverse()
        const binArr = bin.map(x => parseInt(x))
        
        binArr.forEach((value, numberI) =>{
            number = number ? number += (2**numberI)*value : number = (2**numberI)*value
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
