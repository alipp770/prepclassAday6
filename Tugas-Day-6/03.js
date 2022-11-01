function OddEven(params) {
    let isEven = "";
    params % 2 == 0 ? isEven = "Genap" : isEven = "Ganjil";
    return isEven;
}

console.log(OddEven(1032));