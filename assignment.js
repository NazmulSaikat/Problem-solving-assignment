// Kilometer To Meter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(10);
console.log(result);







// Hotel Cost

function hotelCost(day) {
    if (day <= 10) {
        var first10Days = day * 100;
        var total = first10Days;
    }
    else if (day <= 20) {
        var first10Days = 10 * 100;
        var second10Days = (day - 10) * 80;
        var total = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var after20days = (day - 20) * 50;
        var total = first10Days + second10Days + after20days
    }
    return total;
}
var totalCost = hotelCost(21);
console.log(totalCost);







// Budget Calculator

function budgetCalculator (watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice +laptopPrice
    console.log(total)
}
    budgetCalculator( 5, 2, 1)







// Mega Friend

function megaFriend(name){
    var friend ="";
for (var i = 0; i < name.length; i++) { 
    var element = name[i];       
    if (element.length > friend.length) {
        friend = element;
    }
}
return friend;
}
var output = megaFriend(["jaidur", "rubai", "talha", "mehedi", "miraj", "rakin"])

console.log(output)