function KabisatYear(params) {
    let isKabisat = "";
    params % 400 == 0 ? isKabisat = "Kabisat" : isKabisat = "Bukan Kabisat";
    return isKabisat;
}

console.log(KabisatYear(1900));