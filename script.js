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
    
    let num = value
    let binary = (num % 2).toString()

    while(num > 1){
        num = parseInt(num/2)
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
            if(number){
                number += (2**numberI)*value 
            }else{
                number = (2**numberI)*value
            }
        })
    }
    return number
}