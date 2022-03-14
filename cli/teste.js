function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();

    while (num > 1) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }

    console.log(binary);
}

convertToBinary1(16);