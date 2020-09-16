
module.exports.adder=function(num1,num2){
    var result = num1+num2;
    return result;
}

module.exports.arr=function(){
    var accounts = [
     {
         id:1, name:'alex', deposit:5
     },
     {
         id:2, name:'sarah', deposit:5
     },
     {
         id:3, name:'jim', deposit:15
     }     
    ]
    var parsed = "";
    for (i = 0; i< accounts.length; i++) {
        parsed += "<br />";
        var myobj=  accounts[i];
        for (var property in myobj) {
            parsed += property + ": " + myobj[property] + "\t";          
        }
     }   
    console.log(parsed);
    return parsed;
}










