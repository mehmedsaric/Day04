function main() { 
    var myRes = 75;
    var i = myRes + 1;
    myRes = i++;
    return myRes;
}
console.log(main());
module.exports = main;