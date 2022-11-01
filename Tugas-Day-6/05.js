function FilmRating(params) {
    if (params >= 21) {
        return "__DEWASA__";
    } else if (params >= 13 && params <= 89 ) {
        return "__REMAJA__";
    } else if (params >= 9 && params <= 79) {
        return "__BIMBINGAN ORANG TUA__";
    } else if (params < 9) {
        return "__SEMUA USIA__";
    } else {
        return "Eror! your input must be a Number!!";
    }
}

console.log(FilmRating(32));