function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;    // 1 kilometer = 1000 meter

    if (meter < 0) {
        return ("Take Some positive Number"); // kilometer can't be negetive

    } else {
        return meter;
    }

}


function budgetCalculator(watch, phone, laptop) {

    var watchprice = watch * 50;
    var phoneprice = phone * 100;
    var laptopprice = laptop * 500;

    var Totalbudget = watchprice + phoneprice + laptopprice;

    if (watch < 0) {
        return "watch can't be negetive ";
    }
    else if (phone < 0) {
        return "phone can't be negetive";
    }
    else if (laptop < 0) {
        return "laptop can't be negetive";
    }
    else {
        return Totalbudget;
    }
}




function hotelCost(day) {
    var cost = 0;
    if(day < 0){
        return "Day can't be negetive";
    }
    else if (day <= 10) {                  //For the first 10 days
        cost = day * 100;
    }
    else if (day <= 20) {                  // Between 10 to 20 days
        var first10days = 10 * 100;
        var remainingdays = day - 10;
        var second10days = remainingdays * 80;
        cost = first10days + second10days;
    }
    else {
        var first10days = 10 * 100;         //Above 20 days
        var second10days = 10 * 80;
        var remainingdays = day - 20;
        var restofthedays = remainingdays * 50;
        cost = first10days + second10days + restofthedays;
    }
    return cost;
}



function megaFriend(name) {

    var lengthName = 0;      // initial length should be 0

    for (var i = 0; i < name.length; i++) {
        if (name[i].length > lengthName) {
            var lengthName = name[i].length;
            var longestName = name[i];
        }
    }
    return longestName;
}

