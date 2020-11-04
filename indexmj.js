function findMj (str) {
    const newstr = str.toLowerCase();
    if (newstr.indexOf("michael") !== -1 && !!str.indexOf("jackson" !== -1)) {
        console.log( "He is among Us")}
    else if (newstr.indexOf("micheal") !== -1 && str.indexOf("jackson" !== -1)) {
        console.log( "There is a spelling mistake")
    }
    else { 
        console.log( "Micheal is not here.")
    }

}


//str = "michael jackson is here "

//findMj(str);

module.exports.findMj = findMj;