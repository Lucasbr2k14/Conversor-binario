const integer = document.getElementById("number")
const binary = document.getElementById("binary")
const resultDiv = document.getElementById("result")

binary.addEventListener("input", () =>{
    integer.value = converterInt(binary.value)
})

integer.addEventListener("input", ()=>{
    binary.value = converterBin(integer.value)
})

function triger(value){
    resultDiv.innerHTML = converterBin(value)
}

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