function Grading(params) {
    if (params >= 90) {
        return "__A__";
    } else if (params >= 80 && params <= 89 ) {
        return "__B__";
    } else if (params >= 70 && params <= 79) {
        return "__C__";
    } else if (params >= 60 && params <= 69) {
        return "__D__";
    } else if (params <= 59) {
        return "__E__";
    } else {
        return "Eror! your input must be a Number!!";
    }
}

console.log(Grading(90));